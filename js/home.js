function splitIntoNGroups(items, n) {
  const groups = Array.from({ length: n }, () => []);
  for (let i = 0; i < items.length; i++) {
    const groupIndex = Math.floor((i * n) / items.length);
    groups[groupIndex].push(items[i]);
  }
  return groups;
}


const LEVEL_BTN_CLASS = {
  calouro:  "btn-calouro",
  veterano: "btn-veterano",
  perfisio: "btn-perfisio",
  doutor:   "btn-doutor",
};

const LEVEL_ICONS = {
  calouro:  "📚",
  veterano: "💪",
  perfisio: "🦴",
  doutor:   "👑",
};

const ROW_CLASSES = [
  "row-offset-right",
  "row-center",
  "row-offset-left",
  "row-center",
];


const CONNECTORS = [
  `<div class="connector-angled-right" style="align-self:center; margin-left:80px;"></div>`,
  `<div class="connector-angled-left"  style="align-self:center; margin-right:80px;"></div>`,
  `<div class="connector-angled-right" style="align-self:center; margin-left:80px;"></div>`,
];

function getLevelKey(level) {
   const value = (level || "").toLowerCase();

  if (value.includes("calouro")) return "calouro";
  if (value.includes("veterano")) return "veterano";
  if (value.includes("perfisio")) return "perfisio";
  if (value.includes("doutor")) return "doutor";

  return "calouro";
}

function isGroupCompleted(sectionId, groupIndex) {
  return localStorage.getItem(`perfisio-group-completed-${sectionId}-${groupIndex}`) === "true";
}

function buildActivityButton(section, groupIndex, groupItems, levelUnlockStatus) {
  const buttonIndex   = groupIndex + 1;
  const activityTitle = `Atividade ${buttonIndex} — ${section.moduleTitle}`;
  const levelKey      = getLevelKey(section.level);

  const completed = isGroupCompleted(section.sectionId, buttonIndex);
  const unlocked  = levelUnlockStatus.unlocked;
  const scoreMet  = levelUnlockStatus.currentScore >= levelUnlockStatus.requiredScore;

  const icon  = completed ? "✅" : !unlocked ? "🔒" : (LEVEL_ICONS[levelKey] || "📚");
  const label = completed
    ? "Concluída"
    : !unlocked
    ? (scoreMet && !levelUnlockStatus.previousCompleted
        ? "Complete o nível anterior"
        : `${levelUnlockStatus.currentScore} / ${levelUnlockStatus.requiredScore}`)
    : `${groupItems.length} perguntas`;

  const colorClass = completed
    ? "btn-completed"
    : !unlocked
    ? "btn-locked"
    : (LEVEL_BTN_CLASS[levelKey] || "btn-calouro");

  const rowClass       = ROW_CLASSES[groupIndex] || "row-center";
  const connectorHtml  = CONNECTORS[groupIndex] || "";

  const href = unlocked
    ? `activity.html?id=${groupItems[0].id}&section=${encodeURIComponent(section.sectionId)}&group=${buttonIndex}`
    : null;

  const btnInner = `
    <div class="shadow"></div>
    <div class="face">
      <span class="icon" aria-hidden="true">${icon}</span>
      <span class="btn-label">${label}</span>
    </div>
  `;

  
  let scoreLabelHtml = "";
  if (completed && typeof getBestScore === "function") {
    const best = getBestScore(section.sectionId, buttonIndex);
    scoreLabelHtml = best > 0
      ? `<div class="btn-score-label">⭐ ${best} pts</div>`
      : `<div class="btn-score-label btn-score-label--empty">Ainda não jogado</div>`;
  }

  const btn = href
    ? `<div class="btn-col">
        <a href="${href}" onclick="return handleBtnClick(event, this)" aria-label="${activityTitle}">
  <button class="duo-btn ${colorClass}">
            ${btnInner}
          </button>
        </a>
        ${scoreLabelHtml}
      </div>`
    : `<div class="btn-col">
        <button class="duo-btn ${colorClass}" disabled aria-label="${activityTitle} (bloqueada)">
          ${btnInner}
        </button>
      </div>`;

  return `
    <div class="row ${rowClass}">${btn}</div>
    ${connectorHtml}
  `;
}

function buildLessonSection(section) {
  const levelKey = getLevelKey(section.level);

  const levelUnlockStatus = typeof getLevelUnlockStatus === "function"
    ? getLevelUnlockStatus(section.sectionId)
    : { unlocked: true, currentScore: 0, requiredScore: 0 };

  const groups  = splitIntoNGroups(section.items, 4);
  const buttons = groups
    .map((g, i) => buildActivityButton(section, i, g, levelUnlockStatus))
    .join("");

  return `
    <div class="container-lessons__lesson__content level-${levelKey}">
      <h5 class="container-lessons__lesson__content__difficult">-${section.level}-</h5>
      <h3 class="container-lessons__lesson__content__title">${section.moduleTitle}</h3>
    </div>
    
    <div class="trail-wrap">
      <svg class="trail-svg" viewBox="0 0 200 520" id="trail-svg">
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>
    <!-- Gray base path (always visible) -->
    <path id="path-gray"
      d="M 100 60 C 160 100, 160 160, 100 200 C 40 240, 40 300, 100 340 C 160 380, 160 420, 100 460"
      fill="none" stroke="#B4B2A9" stroke-width="3"
      stroke-dasharray="8 7" stroke-linecap="round"/>
    <!-- Green progress path (same coords, clipped) -->
    <path id="path-green"
      d="M 100 60 C 160 100, 160 160, 100 200 C 40 240, 40 300, 100 340 C 160 380, 160 420, 100 460"
      fill="none" stroke="#639922" stroke-width="3"
      stroke-dasharray="8 7" stroke-linecap="round"
      stroke-dashoffset="0"/>
  </svg>

    <div class="trail-buttons">
      ${buttons}
    </div>
  </div>
  `;
}

function buildChallengeSection() {
  const unlockStatus = typeof getLevelUnlockStatus === "function"
    ? getLevelUnlockStatus("doutor")
    : { unlocked: true, currentScore: 0, requiredScore: 0, previousCompleted: true };
  const unlocked = unlockStatus.unlocked;
  const scoreMet = unlockStatus.currentScore >= unlockStatus.requiredScore;

  const icon  = unlocked ? "👑" : "🔒";
  const label = unlocked
    ? "Desafiar"
    : scoreMet && !unlockStatus.previousCompleted
    ? "Complete o nível anterior"
    : `${unlockStatus.currentScore} / ${unlockStatus.requiredScore}`;

  const btnInner = `
    <div class="shadow"></div>
    <div class="face">
      <span class="icon">${icon}</span>
      <span class="btn-label">${label}</span>
    </div>
  `;

  const buttonHtml = unlocked
    ? `<a href="challenge.html">
        <button class="duo-btn btn-doutor" onclick="handleBtnClick(this,'Último Challenge')" aria-label="Ir para o Último Challenge">
          ${btnInner}
        </button>
      </a>`
    : `<button class="duo-btn btn-doutor btn-locked" disabled aria-label="Último Challenge (bloqueado)">
        ${btnInner}
      </button>`;

  return `
    <div class="container-lessons__lesson__content__challenge">
      <h5 class="container-lessons__lesson__content__difficult__challenge">-Nível Doutor-</h5>
      <h3 class="container-lessons__lesson__content__title__challenge">O Último<br/>Challenge</h3>
    </div>
    <div class="container-lessons__challenge__trail">
      ${buttonHtml}
      <p class="container-lessons__challenge__trail__paragraph">
        Desafie-se no Último Challenge<br/>respondendo perguntas<br/>de todos os assuntos vistos,<br/>com menos tempo e menos dicas.
      </p>
    </div>
  `;
}


function handleBtnClick(btn, label) {
  btn.classList.remove("clicked");
  void btn.offsetWidth;
  btn.classList.add("clicked");
}

function renderTotalScore() {
  const valueEl = document.getElementById("total-score-value");
  if (!valueEl) return;
  valueEl.textContent = typeof getTotalScore === "function" ? getTotalScore() : 0;
}

const CHALLENGE_VICTORY_GLOW_KEY = "perfisio-challenge-victory-glow";

function applyChallengeVictoryGlow() {
  if (localStorage.getItem(CHALLENGE_VICTORY_GLOW_KEY) !== "true") return;
  document.body.classList.add("challenge-victory-glow");
  localStorage.removeItem(CHALLENGE_VICTORY_GLOW_KEY);
}

function stopBackgroundMusicContinuity() {
  // A música de atividade/challenge só deve tocar continuamente entre
  // questões; ao voltar para o início, a "corrente" é quebrada.
  sessionStorage.removeItem("perfisio-music-track");
  sessionStorage.removeItem("perfisio-music-time");
  if (typeof stopBackgroundMusic === "function") stopBackgroundMusic();
}

function resetHintCurrency() {
  // A moeda de dicas (das atividades normais e do Último Challenge) sempre
  // volta a 20 ao chegar na tela inicial, não importa como o jogador saiu
  // da atividade/challenge anterior.
  localStorage.setItem("perfisio-hint-currency", "20");
  localStorage.setItem("perfisio-challenge-hints-remaining", "20");
}

function setupSettingsPanel() {
  const button = document.getElementById("settings-button");
  const overlay = document.getElementById("settings-overlay");
  const closeButton = document.getElementById("settings-close");
  const musicSlider = document.getElementById("music-volume-slider");
  const sfxSlider = document.getElementById("sfx-volume-slider");
  if (!button || !overlay || !musicSlider || !sfxSlider) return;

  const toPercent = (volume) => Math.round(volume * 100);

  musicSlider.value = String(
    toPercent(typeof getMusicVolume === "function" ? getMusicVolume() : 0.4),
  );
  sfxSlider.value = String(
    toPercent(typeof getSfxVolume === "function" ? getSfxVolume() : 1),
  );

  const openPanel = () => {
    overlay.hidden = false;
  };
  const closePanel = () => {
    overlay.hidden = true;
  };

  button.addEventListener("click", openPanel);
  closeButton.addEventListener("click", closePanel);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closePanel();
  });

  musicSlider.addEventListener("input", () => {
    if (typeof setMusicVolume === "function") {
      setMusicVolume(Number(musicSlider.value) / 100);
    }
  });

  sfxSlider.addEventListener("input", () => {
    if (typeof setSfxVolume === "function") {
      setSfxVolume(Number(sfxSlider.value) / 100);
    }
  });
}

function renderHome() {
  stopBackgroundMusicContinuity();
  resetHintCurrency();
  applyChallengeVictoryGlow();
  setupSettingsPanel();
  renderTotalScore();

  const lessonList = document.getElementById("lesson-list");
  if (!lessonList) return;

  const sections = typeof getLessonSections === "function" ? getLessonSections() : [];
  if (!sections.length) {
    lessonList.innerHTML = `<p style="color:rgba(255,255,255,0.6);padding:40px 24px;font-size:15px;text-align:center;">Não foi possível carregar as atividades no momento.</p>`;
    return;
  }

  lessonList.innerHTML = sections.map(buildLessonSection).join("") + buildChallengeSection();
}

window.addEventListener("DOMContentLoaded", async () => {
  if (typeof cardDataReady !== "undefined") await cardDataReady;
  renderHome();
});