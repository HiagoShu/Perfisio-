
const CHALLENGE_SECTION_ID = "doutor";
const CHALLENGE_GROUP_INDEX = "1";
// O Último Challenge reúne todas as questões dos níveis anteriores
// (Calouro, Veterano e PerFisio), não um subconjunto aleatório.
const CHALLENGE_TOTAL_QUESTIONS = activityData.reduce(
  (total, section) => total + section.items.length,
  0,
);
const CHALLENGE_TIMER_SECONDS = 45;
// Toda atividade (incluindo o Último Challenge) começa com 20 chaves.
const CHALLENGE_TOTAL_HINTS = 20;
const CHALLENGE_BONUS_KEYS_INTERVAL = 10;
const CHALLENGE_BONUS_KEYS_AMOUNT = 10;

const CHALLENGE_HINTS_KEY = `perfisio-challenge-hints-remaining`;
const CHALLENGE_PROGRESS_KEY = `perfisio-challenge-progress`;
const CHALLENGE_VICTORY_GLOW_KEY = `perfisio-challenge-victory-glow`;

function getChallengeQuestions() {
  // Guardamos apenas a ORDEM sorteada (id + sectionId) na sessionStorage, não
  // as perguntas inteiras. Assim, cada carta é sempre reidratada a partir de
  // activityData/cards_2.json na hora, e uma sessão de Challenge já em
  // andamento nunca fica presa a dicas antigas/incompletas caso os dados
  // sejam corrigidos entre uma resposta e outra.
  const stored = sessionStorage.getItem(CHALLENGE_PROGRESS_KEY);
  if (stored) {
    try {
      const storedOrder = JSON.parse(stored);
      if (
        Array.isArray(storedOrder) &&
        storedOrder.length === CHALLENGE_TOTAL_QUESTIONS
      ) {
        const rehydrated = storedOrder
          .map((entry) => getActivityById(entry.id))
          .filter(Boolean);
        if (rehydrated.length === CHALLENGE_TOTAL_QUESTIONS) return rehydrated;
      }
    } catch (_) {}
  }

  const allItems = activityData.flatMap((section) =>
    section.items.map((item) => ({ ...item, sectionId: section.sectionId })),
  );

  const shuffled = allItems
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

  const order = shuffled.map((item) => ({ id: item.id }));
  sessionStorage.setItem(CHALLENGE_PROGRESS_KEY, JSON.stringify(order));
  return shuffled;
}

function getChallengeHintsRemaining() {
  const stored = localStorage.getItem(CHALLENGE_HINTS_KEY);
  if (stored !== null) return Math.max(0, Number(stored));
  localStorage.setItem(CHALLENGE_HINTS_KEY, String(CHALLENGE_TOTAL_HINTS));
  return CHALLENGE_TOTAL_HINTS;
}

function setChallengeHintsRemaining(n) {
  localStorage.setItem(CHALLENGE_HINTS_KEY, String(Math.max(0, n)));
}

function consumeChallengeHint() {
  const current = getChallengeHintsRemaining();
  if (current <= 0) return false;
  setChallengeHintsRemaining(current - 1);
  return true;
}

/**
 * A cada CHALLENGE_BONUS_KEYS_INTERVAL respostas corretas, concede
 * CHALLENGE_BONUS_KEYS_AMOUNT chaves extras. Retorna true se o bônus foi
 * concedido nesta chamada.
 */
function maybeAwardChallengeBonusKeys(correctAnswerCount) {
  if (
    correctAnswerCount <= 0 ||
    correctAnswerCount % CHALLENGE_BONUS_KEYS_INTERVAL !== 0
  ) {
    return false;
  }
  setChallengeHintsRemaining(
    getChallengeHintsRemaining() + CHALLENGE_BONUS_KEYS_AMOUNT,
  );
  return true;
}

function getChallengeOptions(activity) {
  const allAnswers = activityData
    .flatMap((s) => s.items.map((item) => item.answer))
    .filter((ans) => ans && ans !== activity.answer);

  const unique = [...new Set(allAnswers)];
  const shuffled = unique
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);

  const options = [activity.answer, ...shuffled.slice(0, 3)];

  return options
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function renderChallengeActivity(activity, questionIndex, allQuestions) {
  const root = document.getElementById("activity-root");
  if (!root) return;

  if (!activity) {
    root.innerHTML = `
      <div class="activity-not-found">
        <h2>Questão não encontrada</h2>
        <p>Volte ao início e tente novamente.</p>
        <a href="home.html">Voltar para o início</a>
      </div>
    `;
    return;
  }

  const hints = pickRandomHints(getHintPool(activity), 4);
  const options = getChallengeOptions(activity);
  const hintsRemaining = getChallengeHintsRemaining();
  const sessionScore = getSessionScore(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
  );

  const progressPercent = Math.round(
    (questionIndex / CHALLENGE_TOTAL_QUESTIONS) * 100,
  );

  const activityState = {
    keyBalance: hintsRemaining,
    hints: hints.map((hint, index) => ({
      text: hint,
      unlocked: index === 0,
    })),
    solved: false,
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
      <label class="quiz-option" for="ch-option-${index}">
        <input id="ch-option-${index}" type="radio" name="quiz-option" value="${escapeHtml(option)}" ${index === 0 ? "checked" : ""} />
        <span>${escapeHtml(option)}</span>
      </label>
    `,
    )
    .join("");

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
      <span class="quiz-timer-label" id="timer-label">${CHALLENGE_TIMER_SECONDS}</span>
    </div>


    <div class="quiz-status-bar">

      <div class="quiz-question-counter">
        QUESTÃO  ${questionIndex + 1}/${CHALLENGE_TOTAL_QUESTIONS}
      </div>

      <div class="quiz-score-display" id="score-display">
        <span class="quiz-score-star">⭐</span>
        <span class="quiz-score-value" id="score-value">${sessionScore}</span>
        <span class="quiz-score-label">pts</span>
      </div>
    </div>


    <div class="quiz-keys-container">
      <div class="quiz-badge" id="key-badge-container">
        <span class="quiz-badge-icon">💡</span>
        <span class="quiz-badge-label">Dicas restantes no Challenge:</span>
        <span class="quiz-badge-value" id="key-balance">${hintsRemaining}</span>
      </div>
    </div>

  
    <div class="activity-card">
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

      <a class="activity-back-link" href="home.html">Voltar para o início</a>
    </div>
  `;

  const hintModal = root.querySelector("#hint-modal");
  const feedback = root.querySelector("#feedback");
  const submitButton = root.querySelector("#submit-answer");
  const optionInputs = root.querySelectorAll("input[name='quiz-option']");
  const hintButtons = root.querySelectorAll(".quiz-hint-btn");
  const keyBadgeContainer = root.querySelector("#key-badge-container");
  const keyBalanceEl = root.querySelector("#key-balance");
  const keyWarningState = { active: false, timeoutId: null };

  function updateKeyDisplay() {
    if (keyBalanceEl)
      keyBalanceEl.textContent = String(activityState.keyBalance);
  }

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

  (function setupChallengeTimer() {
    const DURATION = CHALLENGE_TIMER_SECONDS;
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
      playSound("timeout");
      markQuestionTimedOut(activity.id);
      submitButton.disabled = true;
      optionInputs.forEach((i) => {
        i.disabled = true;
      });

      if (feedback) {
        feedback.className = "quiz-feedback visible error";
        feedback.textContent = "⏰ Tempo esgotado! Fim de jogo.";
      }

      setTimeout(() => {
        showChallengeGameOverModal(questionIndex, allQuestions);
      }, 1500);
    }

    rafId = requestAnimationFrame(updateTimer);
  })();

  function handleOptionChange() {
    submitButton.disabled = false;
    root.querySelectorAll(".quiz-option").forEach((opt) => {
      opt.classList.remove("selected", "wrong");
    });
    const checked = root.querySelector("input[name='quiz-option']:checked");
    if (checked) checked.closest(".quiz-option").classList.add("selected");
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

  function showHintContent(index) {
    const hintState = activityState.hints[index];
    if (!hintState) return;
    hintModal.textContent = hintState.text;
    hintModal.classList.add("visible");
  }

  function hideHintContent() {
    hintModal.classList.remove("visible");
    hintModal.textContent = "";
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

    const consumed = consumeChallengeHint();
    if (!consumed) {
      button.classList.remove("hint-holding");
      button.style.setProperty("--hint-progress", "0%");
      resetKeyGlow();
      triggerKeyWarning();
      return;
    }

    hintState.unlocked = true;
    activityState.keyBalance = getChallengeHintsRemaining();
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
    if (hintState.unlocked) showHintContent(index);
  }

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

      const timerRatio =
        typeof window.__quizGetTimerRatio === "function"
          ? window.__quizGetTimerRatio()
          : 0;
      const { points, multiplier } = calculateScore(timerRatio);
      addToSessionScore(CHALLENGE_SECTION_ID, CHALLENGE_GROUP_INDEX, points);
      addSessionMultiplier(
        CHALLENGE_SECTION_ID,
        CHALLENGE_GROUP_INDEX,
        multiplier,
      );
      const sessionTotal = getSessionScore(
        CHALLENGE_SECTION_ID,
        CHALLENGE_GROUP_INDEX,
      );

      updateScoreDisplay(sessionTotal, points, multiplier);
      // showFeedbackMsg(true);
      submitButton.disabled = true;
      optionInputs.forEach((input) => {
        input.disabled = true;
      });

      const correctAnswerCount = questionIndex + 1;
      const bonusAwarded = maybeAwardChallengeBonusKeys(correctAnswerCount);
      const bonusMessage = bonusAwarded
        ? ` 🔑 Bônus de ${CHALLENGE_BONUS_KEYS_AMOUNT} chaves por ${correctAnswerCount} acertos!`
        : "";

      createModal({
        title: "🎉 Parabéns!",
        message: `Resposta correta! Questão ${questionIndex + 1} de ${CHALLENGE_TOTAL_QUESTIONS}.${bonusMessage}`,
        confirmText: "Próxima questão",
        onConfirm: () => {
          goToNextQuestion(questionIndex, allQuestions);
        },
      });
    } else {
      playSound("wrong");
      registerQuestionError(activity.id);

      const wrongLabel = selected.closest(".quiz-option");
      if (wrongLabel) {
        wrongLabel.classList.remove("selected");
        wrongLabel.classList.add("wrong");
      }

      const PENALTY_RATIO = 0.35;
      const totalDuration = window.__quizDuration || CHALLENGE_TIMER_SECONDS;
      const penaltySeconds = Math.round(totalDuration * PENALTY_RATIO);

      if (window.__quizApplyPenalty) window.__quizApplyPenalty(penaltySeconds);

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

      // showFeedbackMsg(false);
    }
  }

  //   function showFeedbackMsg(isCorrect) {
  //     if (!feedback) return;
  //     feedback.className = `quiz-feedback visible ${isCorrect ? "success" : "error"}`;
  //     feedback.textContent = isCorrect
  //       ? "✓ Resposta correta!"
  //       : "✗ Resposta incorreta. Tente novamente ou reveja as dicas.";
  //   }

  optionInputs.forEach((input) =>
    input.addEventListener("change", handleOptionChange),
  );
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
    button.addEventListener("mousedown", (e) => e.preventDefault());
    button.addEventListener("pointerdown", handleHintPointerDown);
    button.addEventListener("pointerup", handleHintPointerUp);
    button.addEventListener("pointercancel", handleHintPointerUp);
    button.addEventListener("pointerleave", handleHintPointerUp);
    button.addEventListener("click", handleHintClick);
  });
  submitButton.addEventListener("click", handleSubmit);
  updateKeyDisplay();
}

function goToNextQuestion(currentIndex, allQuestions) {
  const nextIndex = currentIndex + 1;

  if (nextIndex >= CHALLENGE_TOTAL_QUESTIONS) {
    showChallengeCompletionModal(allQuestions);
    return;
  }

  /* Salva o índice atual na sessionStorage e recarrega */
  sessionStorage.setItem("challenge-current-index", String(nextIndex));
  window.location.reload();
}

function showChallengeGameOverModal(questionIndex, allQuestions) {
  const sessionScore = getSessionScore(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
  );

  const { newBest, isRecord } = updateBestScore(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
    sessionScore,
  );

  clearSessionData(CHALLENGE_SECTION_ID, CHALLENGE_GROUP_INDEX);

  sessionStorage.removeItem(CHALLENGE_PROGRESS_KEY);
  sessionStorage.removeItem("challenge-current-index");
  localStorage.setItem(CHALLENGE_HINTS_KEY, String(CHALLENGE_TOTAL_HINTS));

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
      <div class="completion-emoji">⏰</div>
      <h3 class="completion-title">Fim de Jogo!</h3>
      ${newRecordBannerHtml}
      <p class="completion-encouragement">O tempo esgotou e o Último Challenge chegou ao fim. Tente novamente para superar sua pontuação!</p>

      <div class="completion-score-section">
        <div class="completion-total-score ${isRecord ? "completion-total-score--record" : ""}">
          <span class="completion-total-label">🏅 Melhor pontuação do Nível Doutor</span>
          <span class="completion-total-value">${newBest}</span>
        </div>
      </div>

      <div class="completion-stats">
        <div class="completion-stat">
          <span class="completion-stat__value"><strong>${questionIndex + 1}</strong></span>
          <span class="completion-stat__label">Questão alcançada</span>
        </div>
        <div class="completion-stat">
          <span class="completion-stat__value"><strong>+${sessionScore}</strong></span>
          <span class="completion-stat__label">Pontos nesta tentativa</span>
        </div>
      </div>

      <div class="modal-actions">
        <button type="button" class="modal-btn confirm completion-cta" id="challenge-game-over-home">
          Voltar para o início
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay
    .querySelector("#challenge-game-over-home")
    .addEventListener("click", () => {
      overlay.remove();
      window.location.href = "home.html";
    });
}

function showChallengeCompletionModal(allQuestions) {
  document.body.classList.add("challenge-victory-glow");
  localStorage.setItem(CHALLENGE_VICTORY_GLOW_KEY, "true");

  const total = CHALLENGE_TOTAL_QUESTIONS;
  const firstTryCorrect = allQuestions.filter(
    (item) => getQuestionErrors(item.id) === 0 && !hasTimedOut(item.id),
  ).length;
  const percentual = Math.round((firstTryCorrect / total) * 100);

  const sessionScore = getSessionScore(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
  );
  const sessionMultipliers = getSessionMultipliers(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
  );
  const avgMultiplier =
    sessionMultipliers.length > 0
      ? sessionMultipliers.reduce((a, b) => a + b, 0) /
        sessionMultipliers.length
      : 1;

  const { newBest, isRecord } = updateBestScore(
    CHALLENGE_SECTION_ID,
    CHALLENGE_GROUP_INDEX,
    sessionScore,
  );

  clearSessionData(CHALLENGE_SECTION_ID, CHALLENGE_GROUP_INDEX);

  sessionStorage.removeItem(CHALLENGE_PROGRESS_KEY);
  sessionStorage.removeItem("challenge-current-index");
  localStorage.setItem(CHALLENGE_HINTS_KEY, String(CHALLENGE_TOTAL_HINTS));

  let multiplierClass = "multiplier-low";
  if (avgMultiplier >= 2.5) multiplierClass = "multiplier-high";
  else if (avgMultiplier >= 1.5) multiplierClass = "multiplier-mid";

  const encouragements = [
    "Você completou o Último Challenge! Isso não é pra qualquer um. 👑",
    "Nível Doutor conquistado! O conhecimento é sua melhor arma. 🏆",
    "Impressionante! Você domina a fisioterapia de ponta a ponta. 🚀",
    "Desafio máximo vencido! Continue evoluindo. ⚡",
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
      <div class="completion-emoji">👑</div>
      <h3 class="completion-title">Challenge Concluído!</h3>
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
          <span class="completion-total-label">🏅 Melhor pontuação do Nível Doutor</span>
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
        <button type="button" class="modal-btn confirm completion-cta" id="challenge-continue">
          Voltar ao início
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.querySelector("#challenge-continue").addEventListener("click", () => {
    overlay.remove();
    window.location.href = "home.html";
  });
}


window.addEventListener("DOMContentLoaded", async () => {
  await cardDataReady;

  if (!isLevelUnlocked(CHALLENGE_SECTION_ID)) {
    window.location.href = "home.html";
    return;
  }

  playBackgroundMusic("challenge");

  const allQuestions = getChallengeQuestions();
  const storedIndex = sessionStorage.getItem("challenge-current-index");
  const questionIndex = storedIndex !== null ? Number(storedIndex) : 0;

  if (questionIndex >= CHALLENGE_TOTAL_QUESTIONS) {
    showChallengeCompletionModal(allQuestions);
    return;
  }

  const activity = allQuestions[questionIndex];
  renderChallengeActivity(activity, questionIndex, allQuestions);
});
