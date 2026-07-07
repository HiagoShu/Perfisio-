const CARD_SECTION_DEFINITIONS = [
  {
    sectionId: "calouro",
    level: "Nível Calouro",
    moduleTitle: "Os Conceitos da Fisioterapia",
    description: "Fundamentos básicos e definições essenciais da profissão.",
    categories: ["Conceitos", "Anatomia Palpatória"],
  },
  {
    sectionId: "veterano",
    level: "Nível Veterano",
    moduleTitle: "Os Mistérios do Sistema Muscular",
    description: "Aprenda sobre músculos e como eles influenciam o movimento.",
    categories: ["Sistema Muscular"],
  },
  {
    sectionId: "perfisio",
    level: "Nível PerFisio",
    moduleTitle: "Os Reinos do Sistema Articular",
    description: "Estude articulações e como elas influenciam estabilidade e mobilidade.",
    categories: ["Sistema Articular"],
  },
];

// activityData é montado inteiramente a partir de cards_2.json (ver
// cardDataReady mais abaixo). Começa vazio de propósito: não existe mais
// nenhuma pergunta/dica hard-coded neste arquivo, então não há como o
// conteúdo antigo voltar a vazar para o jogo.
let activityData = [];

function buildActivityDataFromCards(cards) {
  return CARD_SECTION_DEFINITIONS.map((definition) => {
    const items = cards
      .filter((card) => definition.categories.includes(card.category))
      .map((card, index) => ({
        id: `${definition.sectionId}-${index + 1}`,
        title: "Use as dicas abaixo para adivinhar a resposta!",
        description: `Categoria: ${card.category}`,
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: card.hints,
        answer: card.answer,
      }));
    return {
      sectionId: definition.sectionId,
      level: definition.level,
      moduleTitle: definition.moduleTitle,
      description: definition.description,
      items,
    };
  });
}

function splitIntoNGroups(items, n) {
  const groups = Array.from({ length: n }, () => []);
  for (let i = 0; i < items.length; i++) {
    const groupIndex = Math.floor((i * n) / items.length);
    groups[groupIndex].push(items[i]);
  }
  return groups;
}

function getLessonSection(sectionId) {
  return (
    activityData.find((section) => section.sectionId === sectionId) || null
  );
}

function getGroupBySection(sectionId, groupIndex) {
  const section = getLessonSection(sectionId);
  if (!section) return null;
  const groups = splitIntoNGroups(section.items, 4);
  const index = Number(groupIndex) - 1;
  const groupItems = groups[index];
  if (!groupItems) return null;
  return {
    sectionId: section.sectionId,
    level: section.level,
    moduleTitle: section.moduleTitle,
    description: section.description,
    groupIndex: index + 1,
    itemCount: groupItems.length,
    totalGroups: groups.length,
    items: groupItems,
  };
}

function getActivityGroupIndex(activity) {
  if (!activity || !activity.sectionId) return null;
  const section = getLessonSection(activity.sectionId);
  if (!section) return null;
  const groups = splitIntoNGroups(section.items, 4);
  for (let i = 0; i < groups.length; i += 1) {
    if (groups[i].some((item) => item.id === activity.id)) {
      return String(i + 1);
    }
  }
  return null;
}

function getActivityById(id) {
  for (const section of activityData) {
    const activity = section.items.find((item) => item.id === id);
    if (activity) {
      return {
        ...activity,
        sectionId: section.sectionId,
        level: section.level,
        moduleTitle: section.moduleTitle,
      };
    }
  }
  return null;
}

function getLessonSections() {
  return activityData;
}

const CARDS_DATA_PATH = "../cards_2.json";

// Única fonte de dados das perguntas: busca cards_2.json e monta
// activityData inteiramente a partir dele (ver buildActivityDataFromCards
// no topo do arquivo). Não há mais nenhum fallback para dados hard-coded.
const cardDataReady = fetch(CARDS_DATA_PATH)
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((cards) => {
    activityData.length = 0;
    activityData.push(...buildActivityDataFromCards(cards));
  })
  .catch((error) => {
    console.error("cards_2.json: falha ao carregar as perguntas.", error);
  });

function pickRandomHints(pool, count = 4) {
  if (!Array.isArray(pool) || pool.length === 0) return [];
  if (pool.length <= count) return [...pool];
  return shuffleArray(pool).slice(0, count);
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const MUSIC_VOLUME_KEY = "perfisio-music-volume";
const SFX_VOLUME_KEY = "perfisio-sfx-volume";
const DEFAULT_MUSIC_VOLUME = 0.4;
const DEFAULT_SFX_VOLUME = 1;
const CHEAT_SCORE_TARGET = 999999;
const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
  "Enter",
];
let konamiProgress = 0;

function clampVolume(value) {
  return Math.min(1, Math.max(0, Number(value)));
}

function getMusicVolume() {
  const stored = localStorage.getItem(MUSIC_VOLUME_KEY);
  return stored !== null ? clampVolume(stored) : DEFAULT_MUSIC_VOLUME;
}

function setMusicVolume(value) {
  const clamped = clampVolume(value);
  localStorage.setItem(MUSIC_VOLUME_KEY, String(clamped));
  if (activeBackgroundMusic) activeBackgroundMusic.volume = clamped;
}

function getSfxVolume() {
  const stored = localStorage.getItem(SFX_VOLUME_KEY);
  return stored !== null ? clampVolume(stored) : DEFAULT_SFX_VOLUME;
}

function setSfxVolume(value) {
  localStorage.setItem(SFX_VOLUME_KEY, String(clampVolume(value)));
}

const SOUND_FILES = {
  keyuse: "../som/keyuse.m4a",
  right: "../som/right.ogg",
  wrong: "../som/wrong.m4a",
  timeout: "../som/timeout.m4a",
  charge: "../som/charge.mp3",
};

function playSound(name) {
  const src = SOUND_FILES[name];
  if (!src) return;
  try {
    const audio = new Audio(src);
    audio.volume = getSfxVolume();
    audio.play().catch(() => {});
  } catch (error) {
    // Reprodução de áudio pode ser bloqueada pelo navegador; ignora silenciosamente.
  }
}

let activeChargeAudio = null;

function startChargeSound() {
  stopChargeSound();
  try {
    const audio = new Audio(SOUND_FILES.charge);
    audio.loop = true;
    audio.volume = getSfxVolume();
    audio.play().catch(() => {});
    activeChargeAudio = audio;
  } catch (error) {
    // Reprodução de áudio pode ser bloqueada pelo navegador; ignora silenciosamente.
  }
}

function stopChargeSound() {
  if (!activeChargeAudio) return;
  activeChargeAudio.pause();
  activeChargeAudio.currentTime = 0;
  activeChargeAudio = null;
}

const MUSIC_FILES = {
  activity: "../som/Red_Doors.mp3",
  challenge: "../som/Orbital_Colossus.mp3",
};

const MUSIC_RESUME_TRACK_KEY = "perfisio-music-track";
const MUSIC_RESUME_TIME_KEY = "perfisio-music-time";

let activeBackgroundMusic = null;
let activeBackgroundMusicName = null;

// Cada questão/tela é uma navegação de página nova, o que destruiria o
// <audio> anterior. Para a música tocar continuamente entre elas (em vez de
// reiniciar do zero a cada resposta certa ou timeout), salvamos o ponto em
// que ela estava antes de sair da página e retomamos dali na próxima.
window.addEventListener("beforeunload", () => {
  if (!activeBackgroundMusic || !activeBackgroundMusicName) return;
  sessionStorage.setItem(MUSIC_RESUME_TRACK_KEY, activeBackgroundMusicName);
  sessionStorage.setItem(
    MUSIC_RESUME_TIME_KEY,
    String(activeBackgroundMusic.currentTime),
  );
});

function playBackgroundMusic(name) {
  const src = MUSIC_FILES[name];
  if (!src) return;

  const resumeTrack = sessionStorage.getItem(MUSIC_RESUME_TRACK_KEY);
  const resumeTime = Number(sessionStorage.getItem(MUSIC_RESUME_TIME_KEY));
  sessionStorage.removeItem(MUSIC_RESUME_TRACK_KEY);
  sessionStorage.removeItem(MUSIC_RESUME_TIME_KEY);

  stopBackgroundMusic();
  try {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = getMusicVolume();
    if (resumeTrack === name && Number.isFinite(resumeTime) && resumeTime > 0) {
      audio.currentTime = resumeTime;
    }
    audio.play().catch(() => {});
    activeBackgroundMusic = audio;
    activeBackgroundMusicName = name;
  } catch (error) {
    // Reprodução de áudio pode ser bloqueada pelo navegador; ignora silenciosamente.
  }
}

function stopBackgroundMusic() {
  if (!activeBackgroundMusic) return;
  activeBackgroundMusic.pause();
  activeBackgroundMusic.currentTime = 0;
  activeBackgroundMusic = null;
  activeBackgroundMusicName = null;
}

function escapeHtml(text) {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function getQuizOptions(activity) {
  const section = getLessonSection(activity.sectionId);
  const answers = section
    ? section.items
        .map((item) => item.answer)
        .filter((answer) => answer && answer !== activity.answer)
    : [];
  const uniqueAnswers = [...new Set(answers)];
  const shuffled = shuffleArray(uniqueAnswers);
  const options = [activity.answer, ...shuffled.slice(0, 3)];
  const fallbackOptions = [
    "Movimento Linear",
    "Movimento Angular",
    "Torque",
    "Flexibilidade Articular",
    "Extensibilidade",
    "Elasticidade",
    "Força Muscular",
    "Bioalavanca",
    "Centro de Gravidade",
    "Cinemática",
    "Irritabilidade e Capacidade de Desenvolver Tensão",
    "Paradoxo de Codman",
    "Ciclo Alongamento-Encurtamento",
  ];
  while (options.length < 4) {
    const nextOption = fallbackOptions.find(
      (option) => !options.includes(option),
    );
    if (!nextOption) break;
    options.push(nextOption);
  }
  return shuffleArray(options);
}

const HINT_CURRENCY_KEY = "perfisio-hint-currency";
const HINT_CURRENCY_START = 20;

// Moeda única de dicas, compartilhada por todas as atividades (não por
// grupo/seção). Persiste enquanto o jogador navega entre questões e só é
// reiniciada para 20 quando ele volta para a tela inicial (ver home.js).
function getHintCurrency() {
  const stored = localStorage.getItem(HINT_CURRENCY_KEY);
  if (stored !== null) return Math.max(0, Number(stored));
  localStorage.setItem(HINT_CURRENCY_KEY, String(HINT_CURRENCY_START));
  return HINT_CURRENCY_START;
}

function setHintCurrency(balance) {
  localStorage.setItem(HINT_CURRENCY_KEY, String(Math.max(0, balance)));
}

function hasSolvedQuestion(activityId) {
  return localStorage.getItem(`perfisio-solved-${activityId}`) === "true";
}

function markQuestionSolved(activityId) {
  localStorage.setItem(`perfisio-solved-${activityId}`, "true");
}

function markQuestionTimedOut(activityId) {
  localStorage.setItem(`perfisio-timedout-${activityId}`, "true");
}

function hasTimedOut(activityId) {
  return localStorage.getItem(`perfisio-timedout-${activityId}`) === "true";
}

function createModal({
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button type="button" class="modal-close" aria-label="Fechar">×</button>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(message)}</p>
      <div class="modal-actions"></div>
    </div>
  `;

  const actions = overlay.querySelector(".modal-actions");
  const closeModal = () => {
    overlay.remove();
    if (typeof onCancel === "function") onCancel();
  };

  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  if (typeof cancelText === "string") {
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "modal-btn cancel";
    cancelButton.textContent = cancelText;
    cancelButton.addEventListener("click", closeModal);
    actions.appendChild(cancelButton);
  }

  if (typeof confirmText === "string") {
    const confirmButton = document.createElement("button");
    confirmButton.type = "button";
    confirmButton.className = "modal-btn confirm";
    confirmButton.textContent = confirmText;
    confirmButton.addEventListener("click", () => {
      overlay.remove();
      if (typeof onConfirm === "function") onConfirm();
    });
    actions.appendChild(confirmButton);
  }

  document.body.appendChild(overlay);
}

function showInfoModal(title, message) {
  createModal({
    title,
    message,
    cancelText: "Fechar",
  });
}

function normalizeKonamiInput(event) {
  const key = event.key || "";
  const code = event.code || "";

  if (code === "ArrowUp" || key === "ArrowUp" || key === "Up") return "ArrowUp";
  if (code === "ArrowDown" || key === "ArrowDown" || key === "Down") return "ArrowDown";
  if (code === "ArrowLeft" || key === "ArrowLeft" || key === "Left") return "ArrowLeft";
  if (code === "ArrowRight" || key === "ArrowRight" || key === "Right") return "ArrowRight";
  if (code === "KeyB" || key.toLowerCase() === "b") return "KeyB";
  if (code === "KeyA" || key.toLowerCase() === "a") return "KeyA";
  if (code === "Enter" || key === "Enter") return "Enter";

  return null;
}

function applyCheatCodeUnlock() {
  const sections = getLessonSections();
  if (!sections.length) {
    if (typeof cardDataReady !== "undefined") {
      cardDataReady.then(() => applyCheatCodeUnlock());
    }
    return;
  }

  document.body.classList.add("challenge-victory-glow");
  localStorage.setItem("perfisio-challenge-victory-glow", "true");
  localStorage.setItem("perfisio-cheat-activated", "true");

  sections.forEach((section) => {
    const groups = splitIntoNGroups(section.items, 4);
    groups.forEach((groupItems, index) => {
      const groupIndex = index + 1;
      markGroupCompleted(section.sectionId, groupIndex, groupItems);
      saveBestScore(section.sectionId, groupIndex, CHEAT_SCORE_TARGET);
    });
  });

  const challengeSectionId =
    typeof CHALLENGE_SECTION_ID !== "undefined" ? CHALLENGE_SECTION_ID : "doutor";
  const challengeGroupIndex = Number(
    typeof CHALLENGE_GROUP_INDEX !== "undefined" ? CHALLENGE_GROUP_INDEX : "1",
  );

  localStorage.setItem(
    `perfisio-group-completed-${challengeSectionId}-${challengeGroupIndex}`,
    "true",
  );
  saveBestScore(challengeSectionId, challengeGroupIndex, CHEAT_SCORE_TARGET);

  const currentSectionId = getQueryParam("section");
  const currentGroupIndex = getQueryParam("group");
  if (currentSectionId && currentGroupIndex) {
    localStorage.setItem(
      `perfisio-session-score-${currentSectionId}-${currentGroupIndex}`,
      String(CHEAT_SCORE_TARGET),
    );
  } else {
    localStorage.setItem(
      `perfisio-session-score-${challengeSectionId}-${challengeGroupIndex}`,
      String(CHEAT_SCORE_TARGET),
    );
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("perfisio-cheat-applied"));
  }
}

function handleKonamiCode(event) {
  if (event.repeat) return;

  const input = normalizeKonamiInput(event);
  if (!input) return;

  event.preventDefault();

  if (input !== KONAMI_SEQUENCE[konamiProgress]) {
    konamiProgress = input === KONAMI_SEQUENCE[0] ? 1 : 0;
    return;
  }

  konamiProgress += 1;
  if (konamiProgress === KONAMI_SEQUENCE.length) {
    applyCheatCodeUnlock();
    konamiProgress = 0;
  }
}

function markGroupCompleted(sectionId, groupIndex, groupItems) {
  groupItems.forEach((item) => markQuestionSolved(item.id));

  const completedKey = `perfisio-group-completed-${sectionId}-${groupIndex}`;
  localStorage.setItem(completedKey, "true");
}

function isGroupCompleted(sectionId, groupIndex) {
  const key = `perfisio-group-completed-${sectionId}-${groupIndex}`;
  return localStorage.getItem(key) === "true";
}

function isGroupUnlocked(sectionId, groupIndex) {
  const index = Number(groupIndex);
  if (index <= 1) return true;
  return isGroupCompleted(sectionId, index - 1);
}

function countGroupCorrect(groupItems) {
  return groupItems.filter((item) => hasSolvedQuestion(item.id)).length;
}

function registerQuestionError(activityId) {
  const key = `perfisio-errors-${activityId}`;
  const current = Number(localStorage.getItem(key) || 0);

  localStorage.setItem(key, String(current + 1));
}

function getQuestionErrors(activityId) {
  return Number(localStorage.getItem(`perfisio-errors-${activityId}`) || 0);
}

function countGroupErrors(groupItems) {
  return groupItems.reduce((total, item) => {
    return total + getQuestionErrors(item.id);
  }, 0);
}

const SCORE_BASE = 30;

function getBestScore(sectionId, groupIndex) {
  return Number(
    localStorage.getItem(`perfisio-best-score-${sectionId}-${groupIndex}`) || 0,
  );
}

function saveBestScore(sectionId, groupIndex, score) {
  localStorage.setItem(
    `perfisio-best-score-${sectionId}-${groupIndex}`,
    String(Math.max(0, score)),
  );
}

/**
 
   @returns {{ newBest: number, isRecord: boolean }}
 */
function updateBestScore(sectionId, groupIndex, sessionScore) {
  const previous = getBestScore(sectionId, groupIndex);
  if (sessionScore > previous) {
    saveBestScore(sectionId, groupIndex, sessionScore);
    return { newBest: sessionScore, isRecord: true };
  }
  return { newBest: previous, isRecord: false };
}

function getTotalScore() {
  let total = 0;
  activityData.forEach((section) => {
    const groups = splitIntoNGroups(section.items, 4);
    groups.forEach((_, index) => {
      total += getBestScore(section.sectionId, index + 1);
    });
  });
  total += getBestScore(
    typeof CHALLENGE_SECTION_ID !== "undefined" ? CHALLENGE_SECTION_ID : "doutor",
    typeof CHALLENGE_GROUP_INDEX !== "undefined" ? CHALLENGE_GROUP_INDEX : "1",
  );
  return total;
}

const REQUIRED_SCORE_MULTIPLIER = 1.5;

const LEVEL_SCORE_REQUIREMENTS = {
  perfisio: 4000,
  doutor: 6000,
};

function getLevelOrder() {
  return [...activityData.map((section) => section.sectionId), "doutor"];
}

function getPreviousSectionId(sectionId) {
  const order = getLevelOrder();
  const index = order.indexOf(sectionId);
  if (index <= 0) return null;
  return order[index - 1];
}

function isLevelCompleted(sectionId) {
  const section = getLessonSection(sectionId);
  if (!section) return false;
  const groups = splitIntoNGroups(section.items, 4);
  return groups.every((_, index) => isGroupCompleted(sectionId, index + 1));
}

function getRequiredScoreToUnlock(sectionId, previousSectionId) {
  if (Object.prototype.hasOwnProperty.call(LEVEL_SCORE_REQUIREMENTS, sectionId)) {
    return LEVEL_SCORE_REQUIREMENTS[sectionId];
  }
  const previousSection = getLessonSection(previousSectionId);
  const questionCount = previousSection ? previousSection.items.length : 0;
  return Math.round(questionCount * SCORE_BASE * REQUIRED_SCORE_MULTIPLIER);
}

function getLevelUnlockStatus(sectionId) {
  const previousSectionId = getPreviousSectionId(sectionId);
  const currentScore = getTotalScore();

  if (!previousSectionId) {
    return {
      unlocked: true,
      currentScore,
      requiredScore: 0,
      previousCompleted: true,
    };
  }

  const requiredScore = getRequiredScoreToUnlock(sectionId, previousSectionId);
  const previousCompleted = isLevelCompleted(previousSectionId);
  const unlocked = previousCompleted && currentScore >= requiredScore;

  return { unlocked, currentScore, requiredScore, previousCompleted };
}

function isLevelUnlocked(sectionId) {
  return getLevelUnlockStatus(sectionId).unlocked;
}

function getSessionScore(sectionId, groupIndex) {
  const key = `perfisio-session-score-${sectionId}-${groupIndex}`;
  return Number(localStorage.getItem(key) || 0);
}

function addToSessionScore(sectionId, groupIndex, points) {
  const key = `perfisio-session-score-${sectionId}-${groupIndex}`;
  const newScore = getSessionScore(sectionId, groupIndex) + points;
  localStorage.setItem(key, String(newScore));
  return newScore;
}

function getSessionMultipliers(sectionId, groupIndex) {
  const key = `perfisio-session-multipliers-${sectionId}-${groupIndex}`;
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function addSessionMultiplier(sectionId, groupIndex, multiplier) {
  const key = `perfisio-session-multipliers-${sectionId}-${groupIndex}`;
  const arr = getSessionMultipliers(sectionId, groupIndex);
  arr.push(multiplier);
  localStorage.setItem(key, JSON.stringify(arr));
}

function clearSessionData(sectionId, groupIndex) {
  localStorage.removeItem(`perfisio-session-score-${sectionId}-${groupIndex}`);
  localStorage.removeItem(
    `perfisio-session-multipliers-${sectionId}-${groupIndex}`,
  );
}

function calculateMultiplier(timerRatio) {
  return 1 + timerRatio * 2;
}

function calculateScore(timerRatio) {
  const clampedRatio = Math.max(0, Math.min(1, timerRatio));
  const multiplier = calculateMultiplier(clampedRatio);
  const points = Math.round(SCORE_BASE * multiplier);
  return { points, multiplier };
}

function showGroupCompletionModal(groupItems, sectionId, groupIndex) {
  const total = groupItems.length;

  const firstTryCorrect = groupItems.filter(
    (item) => getQuestionErrors(item.id) === 0 && !hasTimedOut(item.id),
  ).length;

  const percentual = Math.round((firstTryCorrect / total) * 100);

  const sessionScore = getSessionScore(sectionId, groupIndex);
  const sessionMultipliers = getSessionMultipliers(sectionId, groupIndex);
  const avgMultiplier =
    sessionMultipliers.length > 0
      ? sessionMultipliers.reduce((a, b) => a + b, 0) /
        sessionMultipliers.length
      : 1;

  const { newBest, isRecord } = updateBestScore(
    sectionId,
    groupIndex,
    sessionScore,
  );

  clearSessionData(sectionId, groupIndex);

  let multiplierClass = "multiplier-low";
  if (avgMultiplier >= 2.5) multiplierClass = "multiplier-high";
  else if (avgMultiplier >= 1.5) multiplierClass = "multiplier-mid";

  const encouragements = [
    "Continue assim e chegará ao topo! 💪",
    "Você está evoluindo a cada questão! 🚀",
    "Excelente desempenho! O conhecimento é seu melhor instrumento. 🏆",
    "Mais um grupo vencido! Siga em frente! ⚡",
  ];
  const message =
    encouragements[Math.floor(Math.random() * encouragements.length)];

  const newRecordBannerHtml = isRecord
    ? `<div class="completion-new-record">
        <span class="completion-new-record__icon">🏆</span>
        <span class="completion-new-record__text">Novo Recorde!</span>
      </div>`
    : "";

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal completion-modal" role="dialog" aria-modal="true">
      <div class="completion-emoji">🎉</div>
      <h3 class="completion-title">Atividade Concluída!</h3>
      ${newRecordBannerHtml}
      <p class="completion-encouragement">${escapeHtml(message)}</p>

      <div class="completion-score-section">
        <div class="completion-score-row">
          <div class="completion-score-earned">
            <span class="completion-score-earned__label">Pontos nesta tentativa</span>
            <span class="completion-score-earned__value">+${sessionScore}</span>
          </div>
          <div class="completion-score-multiplier">
            <span class="completion-multiplier-label">Mult. médio</span>
            <span class="completion-multiplier-value ${multiplierClass}">${avgMultiplier.toFixed(1)}×</span>
          </div>
        </div>
        <div class="completion-total-score ${isRecord ? "completion-total-score--record" : ""}">
          <span class="completion-total-label">🏅 Melhor pontuação do nível</span>
          <span class="completion-total-value">${newBest}</span>
        </div>
      </div>

      <div class="completion-stats">
        <div class="completion-stat">
          <span class="completion-stat__value"><strong>${total}</strong></span>
          <span class="completion-stat__label">Questões respondidas</span>
        </div>
        <div class="completion-stat">
          <span class="completion-stat__value"><strong>${firstTryCorrect}</strong></span>
          <span class="completion-stat__label">Acertos de primeira</span>
        </div>
        <div class="completion-stat">
          <span class="completion-stat__value"><strong>${percentual}%</strong></span>
          <span class="completion-stat__label">Precisão</span>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="modal-btn confirm completion-cta" id="completion-continue">
          Continuar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay
    .querySelector("#completion-continue")
    .addEventListener("click", () => {
      overlay.remove();
      window.location.href = "home.html";
    });
}

function renderActivity(activity) {
  const groupFromQuery = getQueryParam("group");
  const currentGroupIndex =
    groupFromQuery || getActivityGroupIndex(activity) || "1";

  const root = document.getElementById("activity-root");
  if (!activity) {
    root.innerHTML = `
      <div class="activity-not-found">
        <h2>Atividade não encontrada</h2>
        <p>Verifique se o link está correto e tente novamente.</p>
        <a href="home.html">Voltar para o início</a>
      </div>
    `;
    return;
  }

  const hints = pickRandomHints(activity.hints, 4);
  const options = getQuizOptions(activity);

  const sectionId = activity.sectionId;

  const activityState = {
    keyBalance: getHintCurrency(),
    hints: hints.map((hint, index) => ({
      text: hint,
      unlocked: index === 0,
    })),
    solved: hasSolvedQuestion(activity.id),
  };

  const hintButtonsHtml = activityState.hints
    .map(
      (hintState, index) => `
      <button
        type="button"
        class="quiz-hint-btn ${hintState.unlocked ? "unlocked" : "locked"}"
        data-hint-index="${index}"
        aria-label="Dica ${index + 1}"
      >
        <span class="quiz-hint-btn-icon">${hintState.unlocked ? "🔓" : "🔒"}</span>
        <span>Dica ${String(index + 1).padStart(2, "0")}</span>
      </button>
    `,
    )
    .join("");

  const optionsHtml = options
    .map(
      (option, index) => `
      <label class="quiz-option" for="option-${index}">
        <input id="option-${index}" type="radio" name="quiz-option" value="${escapeHtml(option)}" ${index === 0 ? "checked" : ""} />
        <span>${escapeHtml(option)}</span>
      </label>
    `,
    )
    .join("");

  const section = getLessonSection(activity.sectionId);

  const groups = splitIntoNGroups(section.items, 4);

  const groupItems = groups[Number(currentGroupIndex) - 1];

  const questionIndex = groupItems.findIndex((item) => item.id === activity.id);

  const totalQuestions = groupItems.length;

  const progressPercent = Math.round(
    ((questionIndex + 1) / totalQuestions) * 100,
  );

  const listSectionId = getQueryParam("section") || activity.sectionId;
  const listHref =
    listSectionId && currentGroupIndex
      ? `activity.html?section=${listSectionId}&group=${currentGroupIndex}`
      : "home.html";

  root.innerHTML = `

     <div class="quiz-timer-wrapper">
    <svg class="quiz-timer-icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polyline points="12 7 12 12 15 15"/>
    </svg>
    <div class="quiz-timer-track">
      <div class="quiz-timer-fill" id="timer-fill"></div>
    </div>
    <span class="quiz-timer-label" id="timer-label">60</span>
  </div>

  <div class="quiz-status-bar">

  <div class="quiz-question-counter">
    QUESTÃO ${questionIndex + 1}/${totalQuestions}
  </div>

  <div class="quiz-score-display" id="score-display">
    <span class="quiz-score-star">⭐</span>
    <span class="quiz-score-value" id="score-value">
      ${getSessionScore(sectionId, currentGroupIndex)}
    </span>
    <span class="quiz-score-label">pts</span>
  </div>

</div>
  
    <div class="quiz-keys-container">
      <div class="quiz-badge">
        <span class="quiz-badge-icon">💡</span>
        <span class="quiz-badge-label">Dicas disponíveis para comprar:</span>
        <span class="quiz-badge-value" id="key-balance">${activityState.keyBalance}</span>
      </div>
    </div>

    <div class="activity-card">
      <div class="quiz-question-pill">Use as dicas abaixo para adivinhar a resposta.</div>

      <div class="quiz-card">
        <h2 class="quiz-question-title">${escapeHtml(activity.title)}</h2>
        <p class="quiz-question-instruction">${escapeHtml(activity.description)}</p>

        <div class="quiz-hints-container">
          <div class="quiz-hints-title">Dicas</div>
          <div class="quiz-hint-buttons">
            ${hintButtonsHtml}
          </div>
          <div class="quiz-hint-modal" id="hint-modal"></div>
        </div>

        <div class="quiz-options">
          ${optionsHtml}
        </div>

        <button type="button" class="quiz-submit-btn" id="submit-answer" disabled>Responder</button>
        <div class="quiz-feedback" id="feedback"></div>
      </div>

      <button type="button" class="activity-back-link" id="back-home-button" aria-label="Segure para voltar para o início">
        <span class="activity-back-link__label">Voltar para o início</span>
      </button>
    </div>
  `;

  const keyBadge = root.querySelector("#key-balance");
  const keyBadgeContainer = root.querySelector(".quiz-badge");
  const keyWarningState = { active: false, timeoutId: null };
  const hintModal = root.querySelector("#hint-modal");
  const feedback = root.querySelector("#feedback");
  const submitButton = root.querySelector("#submit-answer");
  const optionInputs = root.querySelectorAll("input[name='quiz-option']");
  const hintButtons = root.querySelectorAll(".quiz-hint-btn");

  function updateKeyDisplay() {
    if (keyBadge) {
      keyBadge.textContent = String(activityState.keyBalance);
    }
  }

  /**
   
   * @param {number} totalScore 
   * @param {number} gained 
   * @param {number} multiplier 
   */
  function updateScoreDisplay(totalScore, gained, multiplier) {
    const scoreValueEl = document.getElementById("score-value");
    const scoreDisplayEl = document.getElementById("score-display");
    if (!scoreValueEl || !scoreDisplayEl) return;

    const previous = Number(scoreValueEl.textContent.replace(/\D/g, "")) || 0;
    const duration = 600;
    const startTs = performance.now();

    function animateCount(now) {
      const elapsed = now - startTs;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(previous + (totalScore - previous) * eased);
      scoreValueEl.textContent = current;
      if (progress < 1) requestAnimationFrame(animateCount);
    }
    requestAnimationFrame(animateCount);

    scoreDisplayEl.classList.remove("score-pulse");
    void scoreDisplayEl.offsetWidth;
    scoreDisplayEl.classList.add("score-pulse");

    const popup = document.createElement("div");
    popup.className = "score-popup";
    const roundedMult = Math.round(multiplier * 10) / 10;
    popup.innerHTML = `
      <span class="score-popup-points">+${gained}</span>
      <span class="score-popup-multiplier">${roundedMult.toFixed(1)}×</span>
    `;
    scoreDisplayEl.appendChild(popup);

    setTimeout(() => popup.remove(), 1400);
  }

  (function setupTimer() {
    const DURATION = 60;
    const fillEl = document.getElementById("timer-fill");
    const labelEl = document.getElementById("timer-label");

    if (!fillEl || !labelEl) return;

    let startTime = performance.now();
    let rafId = null;
    let finished = false;
    let currentRatio = 1;

    function updateTimer(now) {
      if (finished) return;

      const elapsed = (now - startTime) / 1000;
      const remaining = Math.max(0, DURATION - elapsed);
      const ratio = remaining / DURATION;
      currentRatio = ratio;

      fillEl.style.width = `${ratio * 100}%`;

      labelEl.textContent = String(Math.ceil(remaining));

      fillEl.classList.toggle("timer-warning", ratio <= 0.4 && ratio > 0.15);
      fillEl.classList.toggle("timer-danger", ratio <= 0.15);

      if (remaining <= 0) {
        finished = true;
        onTimerExpired();
        return;
      }

      rafId = requestAnimationFrame(updateTimer);
    }

    function stopTimer() {
      finished = true;
      if (rafId) cancelAnimationFrame(rafId);
    }

    function applyPenalty(penaltySeconds) {
      if (finished) return;

      startTime -= penaltySeconds * 1000;

      fillEl.classList.remove("timer-penalty");
      void fillEl.offsetWidth;
      fillEl.classList.add("timer-penalty");
      setTimeout(() => fillEl.classList.remove("timer-penalty"), 700);

      const timerWrapper = fillEl.closest(".quiz-timer-wrapper");
      if (timerWrapper) {
        timerWrapper.classList.remove("timer-shake");
        void timerWrapper.offsetWidth;
        timerWrapper.classList.add("timer-shake");
        setTimeout(() => timerWrapper.classList.remove("timer-shake"), 500);
      }

      const now = performance.now();
      const elapsed = (now - startTime) / 1000;
      const remaining = DURATION - elapsed;

      if (remaining <= 0 && !finished) {
        finished = true;
        if (rafId) cancelAnimationFrame(rafId);
        fillEl.style.width = "0%";
        labelEl.textContent = "0";
        onTimerExpired();
      }
    }

    window.__quizDuration = DURATION;
    window.__quizStopTimer = stopTimer;
    window.__quizGetTimerRatio = () => currentRatio;
    window.__quizApplyPenalty = applyPenalty;

    function onTimerExpired() {
      markQuestionTimedOut(activity.id);
      playSound("timeout");

      const submitBtn = document.getElementById("submit-answer");
      if (submitBtn) submitBtn.disabled = true;
      document.querySelectorAll("input[name='quiz-option']").forEach((i) => {
        i.disabled = true;
      });

      const group = getGroupBySection(activity.sectionId, currentGroupIndex);
      const groupItems = group ? group.items : [];
      const currentIndexInGroup = groupItems.findIndex(
        (i) => i.id === activity.id,
      );
      const nextItem =
        currentIndexInGroup >= 0 ? groupItems[currentIndexInGroup + 1] : null;

      const listSectionId = activity.sectionId;

      if (nextItem) {
        const feedback = document.getElementById("feedback");
        if (feedback) {
          feedback.className = "quiz-feedback visible error";
          feedback.textContent =
            "⏰ Tempo esgotado! Passando para a próxima questão...";
        }
        setTimeout(() => {
          window.location.href = `activity.html?id=${nextItem.id}&section=${listSectionId}&group=${currentGroupIndex}`;
        }, 1800);
      } else {
        markGroupCompleted(activity.sectionId, currentGroupIndex, groupItems);
        showGroupCompletionModal(
          groupItems,
          activity.sectionId,
          currentGroupIndex,
        );
      }
    }

    rafId = requestAnimationFrame(updateTimer);
  })();

  function handleOptionChange() {
    submitButton.disabled = false;

    root.querySelectorAll(".quiz-option").forEach((opt) => {
      opt.classList.remove("selected");
      opt.classList.remove("wrong");
    });

    const checked = root.querySelector("input[name='quiz-option']:checked");
    if (checked) {
      checked.closest(".quiz-option").classList.add("selected");
    }
  }

  function setHintButtonState(index, unlocked) {
    const button = root.querySelector(
      `.quiz-hint-btn[data-hint-index="${index}"]`,
    );
    if (!button) return;
    button.classList.toggle("locked", !unlocked);
    button.classList.toggle("unlocked", unlocked);
    button.querySelector(".quiz-hint-btn-icon").textContent = unlocked
      ? "🔓"
      : "🔒";
  }

  function showHintContent(index) {
    const hintState = activityState.hints[index];
    if (!hintState) return;
    hintModal.textContent = hintState.text;
    hintModal.classList.add("visible");
    hintButtons.forEach((button) => {
      const buttonIndex = Number(button.dataset.hintIndex);
      button.classList.toggle("selected", buttonIndex === index);
    });
  }

  function hideHintContent() {
    hintModal.classList.remove("visible");
    hintModal.textContent = "";
  }

  const HINT_HOLD_DURATION = 2000;
  const activeHintTimers = new Map();

  function setKeyGlow(progress) {
    if (!keyBadgeContainer) return;
    keyBadgeContainer.style.setProperty("--key-glow", String(progress));
  }

  function resetKeyGlow() {
    if (!keyBadgeContainer) return;
    keyBadgeContainer.style.setProperty("--key-glow", "0");
  }

  function triggerKeyWarning() {
    if (!keyBadgeContainer || keyWarningState.active) return;
    keyWarningState.active = true;
    keyBadgeContainer.classList.add("key-warning");
    if (keyWarningState.timeoutId) clearTimeout(keyWarningState.timeoutId);
    keyWarningState.timeoutId = window.setTimeout(() => {
      keyBadgeContainer.classList.remove("key-warning");
      keyWarningState.active = false;
      keyWarningState.timeoutId = null;
    }, 700);
  }

  function completeHintHold(button, index) {
    stopChargeSound();
    const hintState = activityState.hints[index];
    if (!hintState || hintState.unlocked) return;
    if (activityState.keyBalance <= 0) {
      button.classList.remove("hint-holding");
      button.style.setProperty("--hint-progress", "0%");
      resetKeyGlow();
      return;
    }

    hintState.unlocked = true;
    activityState.keyBalance -= 1;
    setHintCurrency(activityState.keyBalance);
    playSound("keyuse");
    setHintButtonState(index, true);
    updateKeyDisplay();
    showHintContent(index);
    button.classList.remove("hint-holding");
    button.classList.add("hint-success");
    button.style.setProperty("--hint-progress", "100%");
    setKeyGlow(1);
    window.setTimeout(() => {
      button.classList.remove("hint-success");
      button.style.setProperty("--hint-progress", "0%");
      resetKeyGlow();
    }, 300);
  }

  function cancelHintHold(button) {
    if (!button) return;
    const hintTimer = activeHintTimers.get(button);
    if (!hintTimer) return;
    cancelAnimationFrame(hintTimer.rafId);
    clearTimeout(hintTimer.timeoutId);
    activeHintTimers.delete(button);
    button.classList.remove("hint-holding");
    button.style.setProperty("--hint-progress", "0%");
    stopChargeSound();
  }

  // Segurar para confirmar a saída, assim como se segura para comprar uma
  // dica, evita que o jogador saia da atividade sem querer com um toque.
  let backHoldTimer = null;

  function cancelBackHold(button) {
    if (!backHoldTimer) return;
    cancelAnimationFrame(backHoldTimer.rafId);
    clearTimeout(backHoldTimer.timeoutId);
    backHoldTimer = null;
    button.classList.remove("back-holding");
    button.style.setProperty("--back-progress", "0%");
  }

  function startBackHold(button, event) {
    if (backHoldTimer) return;
    button.classList.add("back-holding");
    const startTime = performance.now();
    const timer = { rafId: null, timeoutId: null };

    function animate(progressTime) {
      const elapsed = progressTime - startTime;
      const progress = Math.min(elapsed / HINT_HOLD_DURATION, 1);
      button.style.setProperty("--back-progress", `${progress * 100}%`);
      if (progress < 1) timer.rafId = requestAnimationFrame(animate);
    }

    timer.rafId = requestAnimationFrame(animate);
    timer.timeoutId = window.setTimeout(() => {
      backHoldTimer = null;
      window.location.href = "home.html";
    }, HINT_HOLD_DURATION);

    backHoldTimer = timer;
    if (event && event.pointerId !== undefined) {
      button.setPointerCapture(event.pointerId);
    }
  }

  function handleBackPointerDown(event) {
    event.preventDefault();
    startBackHold(event.currentTarget, event);
  }

  function handleBackPointerUp(event) {
    cancelBackHold(event.currentTarget);
  }

  function startHintHold(button, index, event) {
    const hintState = activityState.hints[index];
    if (!hintState || hintState.unlocked) return;
    if (activityState.keyBalance <= 0) return;

    button.classList.add("hint-holding");
    startChargeSound();
    const startTime = performance.now();
    const timer = { rafId: null, timeoutId: null };

    function animate(progressTime) {
      const elapsed = progressTime - startTime;
      const progress = Math.min(elapsed / HINT_HOLD_DURATION, 1);
      button.style.setProperty("--hint-progress", `${progress * 100}%`);
      setKeyGlow(progress);
      if (progress < 1) timer.rafId = requestAnimationFrame(animate);
    }

    timer.rafId = requestAnimationFrame(animate);
    timer.timeoutId = window.setTimeout(() => {
      activeHintTimers.delete(button);
      completeHintHold(button, index);
    }, HINT_HOLD_DURATION);

    activeHintTimers.set(button, timer);
    if (event && event.pointerId !== undefined) {
      button.setPointerCapture(event.pointerId);
    }
  }

  function handleHintPointerDown(event) {
    const button = event.currentTarget;
    const index = Number(button.dataset.hintIndex);
    if (!button || Number.isNaN(index)) return;
    const hintState = activityState.hints[index];
    if (!hintState || hintState.unlocked) return;
    if (activityState.keyBalance <= 0) {
      event.preventDefault();
      triggerKeyWarning();
      return;
    }
    event.preventDefault();
    startHintHold(button, index, event);
  }

  function handleHintPointerUp(event) {
    const button = event.currentTarget;
    const index = Number(button.dataset.hintIndex);
    const hintState = activityState.hints[index];
    if (!button || Number.isNaN(index) || !hintState || hintState.unlocked)
      return;
    cancelHintHold(button);
    resetKeyGlow();
  }

  function handleHintClick(event) {
    const button = event.target.closest(".quiz-hint-btn");
    if (!button) return;
    const index = Number(button.dataset.hintIndex);
    const hintState = activityState.hints[index];
    if (!hintState) return;

    if (hintState.unlocked) {
      showHintContent(index);
    }
  }

  function calculateReward() {
    const unlockedCount = activityState.hints.filter(
      (hint) => hint.unlocked,
    ).length;
    const usedHints = Math.max(0, unlockedCount - 1);
    return Math.max(0, 3 - usedHints);
  }

  // function showFeedback(isCorrect, reward = 0) {
  //   if (!feedback) return;
  //   feedback.className = `quiz-feedback visible ${isCorrect ? "success" : "error"}`;
  //   if (isCorrect) {
  //     feedback.textContent = `✓ Resposta correta!`;
  //   } else {
  //     feedback.textContent =
  //       "✗ Resposta incorreta. Tente novamente ou reveja as dicas.";
  //   }
  // }

  function handleSubmit() {
    const selected = root.querySelector("input[name='quiz-option']:checked");
    if (!selected) {
      showInfoModal(
        "Escolha uma alternativa",
        "Selecione uma resposta antes de enviar.",
      );
      return;
    }

    const answer = selected.value;
    const correct = answer === activity.answer;

    if (correct) {
      playSound("right");
      if (window.__quizStopTimer) window.__quizStopTimer();

      if (!activityState.solved) {
        markQuestionSolved(activity.id);
        activityState.solved = true;
      }

      const timerRatio =
        typeof window.__quizGetTimerRatio === "function"
          ? window.__quizGetTimerRatio()
          : 0;
      const { points, multiplier } = calculateScore(timerRatio);
      addToSessionScore(sectionId, currentGroupIndex, points);
      addSessionMultiplier(sectionId, currentGroupIndex, multiplier);
      const sessionTotal = getSessionScore(sectionId, currentGroupIndex);

      updateScoreDisplay(sessionTotal, points, multiplier);

      // showFeedback(true, 0);
      // submitButton.disabled = true;
      // optionInputs.forEach((input) => {
      //   input.disabled = true;
      // });

      const group = getGroupBySection(sectionId, currentGroupIndex);
      const groupItems = group ? group.items : [];
      const currentIndexInGroup = groupItems.findIndex(
        (item) => item.id === activity.id,
      );
      const nextItem =
        currentIndexInGroup >= 0 ? groupItems[currentIndexInGroup + 1] : null;

      if (nextItem) {
        createModal({
          title: "🎉 Parabéns!",
          message: `Resposta correta! Questão ${currentIndexInGroup + 1} de ${groupItems.length} concluída.`,
          confirmText: "Próxima questão",
          onConfirm: () => {
            window.location.href = `activity.html?id=${nextItem.id}&section=${listSectionId}&group=${currentGroupIndex}`;
          },
        });
      } else {
        markGroupCompleted(sectionId, currentGroupIndex, groupItems);
        showGroupCompletionModal(groupItems, sectionId, currentGroupIndex);
      }
    } else {
      playSound("wrong");
      registerQuestionError(activity.id);

      const wrongLabel = selected.closest(".quiz-option");
      if (wrongLabel) {
        wrongLabel.classList.remove("selected");
        wrongLabel.classList.add("wrong");
      }

      const PENALTY_RATIO = 0.35;
      const totalDuration = window.__quizDuration || 60;
      const penaltySeconds = Math.round(totalDuration * PENALTY_RATIO); // 21s

      if (window.__quizApplyPenalty) {
        window.__quizApplyPenalty(penaltySeconds);
      }

      (function showPenaltyToast() {
        const existing = document.querySelector(".penalty-toast");
        if (existing) existing.remove();

        const toast = document.createElement("div");
        toast.className = "penalty-toast";
        toast.innerHTML = `
          <span class="penalty-toast-icon">⏱</span>
          <span class="penalty-toast-text">−35% de tempo</span>
          <span class="penalty-toast-seconds">−${penaltySeconds}s</span>
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
      })();

      // showFeedback(false, 0);
    }
  }

  optionInputs.forEach((input) => {
    input.addEventListener("change", handleOptionChange);
  });

  root.querySelectorAll(".quiz-option").forEach((label) => {
    label.addEventListener("click", () => {
      const input = label.querySelector("input[type='radio']");
      if (input) {
        input.checked = true;
        handleOptionChange();
      }
    });
  });

  hintButtons.forEach((button) => {
    button.addEventListener("mousedown", (event) => event.preventDefault());
    button.addEventListener("pointerdown", handleHintPointerDown);
    button.addEventListener("pointerup", handleHintPointerUp);
    button.addEventListener("pointercancel", handleHintPointerUp);
    button.addEventListener("pointerleave", handleHintPointerUp);
    button.addEventListener("click", handleHintClick);
  });

  const backHomeButton = root.querySelector("#back-home-button");
  if (backHomeButton) {
    backHomeButton.addEventListener("mousedown", (event) =>
      event.preventDefault(),
    );
    backHomeButton.addEventListener("pointerdown", handleBackPointerDown);
    backHomeButton.addEventListener("pointerup", handleBackPointerUp);
    backHomeButton.addEventListener("pointercancel", handleBackPointerUp);
    backHomeButton.addEventListener("pointerleave", handleBackPointerUp);
  }

  submitButton.addEventListener("click", handleSubmit);
  updateKeyDisplay();

  // A primeira dica já vem desbloqueada; mostra o conteúdo dela
  // selecionado por padrão, sem precisar de um toque extra.
  if (activityState.hints[0] && activityState.hints[0].unlocked) {
    showHintContent(0);
  }
}

function renderGroup(group) {
  const root = document.getElementById("activity-root");
  if (!group) {
    root.innerHTML = `
      <div class="activity-not-found">
        <h2>Grupo não encontrado</h2>
        <p>Verifique se o link está correto e tente novamente.</p>
        <a href="home.html">Voltar para o início</a>
      </div>
    `;
    return;
  }

  let foundFirstUnsolved = false;
  const itemsHtml = group.items
    .map((item, index) => {
      const solved = hasSolvedQuestion(item.id);
      let classes = "activity-card activity-card--group-item";

      if (!solved && !foundFirstUnsolved) {
        classes += " current-question";
        foundFirstUnsolved = true;
      } else if (!solved && foundFirstUnsolved) {
        classes += " locked";
      }

      const unlocked = solved || !classes.includes("locked");
      const linkHtml = unlocked
        ? `<a class="activity-question-link" href="activity.html?id=${item.id}&section=${group.sectionId}&group=${group.groupIndex}">Ver detalhe da questão</a>`
        : `<a class="activity-question-link" style="opacity: 0.5; pointer-events: none;">Bloqueada</a>`;

      return `
      <article class="${classes}">
        <h3>${index + 1}. Questão</h3>
        <p>${item.description}</p>
        ${linkHtml}
      </article>
    `;
    })
    .join("");

  root.innerHTML = `
    <div class="activity-card">
      <p class="activity-level">${group.level}</p>
      <h2 class="activity-title">${group.moduleTitle} — Grupo ${group.groupIndex}</h2>
      <p class="activity-description">${group.description}</p>
      <p class="activity-group-count">${group.itemCount} identificação de termos neste grupo</p>
      <div class="activity-group-list">
        ${itemsHtml}
      </div>
      <a class="activity-back-link" href="home.html">Voltar</a>
    </div>
  `;
}

window.addEventListener("keydown", handleKonamiCode);

window.addEventListener("DOMContentLoaded", async () => {
  await cardDataReady;

  const activityId = getQueryParam("id");
  const sectionId = getQueryParam("section");
  const groupIndex = getQueryParam("group");

  if (activityId) {
    const activity = getActivityById(activityId);
    if (activity && !isLevelUnlocked(activity.sectionId)) {
      window.location.href = "home.html";
      return;
    }
    if (activity) {
      const activityGroupIndex = groupIndex || getActivityGroupIndex(activity);
      if (
        activityGroupIndex &&
        !isGroupUnlocked(activity.sectionId, activityGroupIndex)
      ) {
        window.location.href = "home.html";
        return;
      }
    }
    playBackgroundMusic("activity");
    renderActivity(activity);
  } else if (sectionId && groupIndex) {
    if (!isLevelUnlocked(sectionId)) {
      window.location.href = "home.html";
      return;
    }
    if (!isGroupUnlocked(sectionId, groupIndex)) {
      window.location.href = "home.html";
      return;
    }
    playBackgroundMusic("activity");
    const group = getGroupBySection(sectionId, groupIndex);
    renderGroup(group);
  } else {
    const root = document.getElementById("activity-root");
    if (root) {
      root.innerHTML = `
        <div class="activity-not-found">
          <h2>Atividade não encontrada</h2>
          <p>Escolha um grupo no início para ver as questões.</p>
          <a href="home.html">Voltar para o início</a>
        </div>
      `;
    }
  }
});
