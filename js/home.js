function splitIntoNGroups(items, n) {
  const groups = Array.from({ length: n }, () => []);
  for (let i = 0; i < items.length; i++) {
    const groupIndex = Math.floor((i * n) / items.length);
    groups[groupIndex].push(items[i]);
  }
  return groups;
}

function formatActivityLabel(section, groupIndex) {
  return `Atividade ${groupIndex} — ${section.moduleTitle}`;
}

// ─── Progresso (leitura do localStorage) ─────────────────────────────────────

function isGroupCompleted(sectionId, groupIndex) {
  return (
    localStorage.getItem(
      `perfisio-group-completed-${sectionId}-${groupIndex}`
    ) === "true"
  );
}

function isGroupUnlocked(sectionId, groupIndex) {
  return true
  
}

// ─────────────────────────────────────────────────────────────────────────────

function buildActivityButton(section, groupIndex, groupItems) {
  const buttonIndex = groupIndex + 1;
  const itemClass = `container-lessons__buttons__item--${(buttonIndex % 4) + 1}`;
  const sectionTitle = section.moduleTitle;
  const activityTitle = `Atividade ${buttonIndex} do ${sectionTitle}`;

  const completed = isGroupCompleted(section.sectionId, buttonIndex);
  const unlocked = isGroupUnlocked(section.sectionId, buttonIndex);

  const buttonIcon = buttonIndex === 3 ? "Titan.png" : "Play.png";
  const buttonIconAlt = completed
    ? "Concluído"
    : !unlocked
    ? "Bloqueado"
    : buttonIndex === 3
    ? "Titan"
    : "Play";

  const statusLabel = completed
    ? "✓ Concluída"
    : !unlocked
    ? "🔒 Bloqueada"
    : `${groupItems.length} perguntas`;

  const href = unlocked
    ? `activity.html?id=${groupItems[0].id}&section=${encodeURIComponent(
        section.sectionId
      )}&group=${buttonIndex}`
    : null;

  const completedClass = completed ? " group--completed" : "";
  const lockedClass = !unlocked ? " group--locked" : "";

  if (href) {
    return `
    <a
      href="${href}"
      class="container-lessons__buttons__item ${itemClass}${completedClass}"
      aria-label="${activityTitle}"
      title="${activityTitle}"
      data-section="${section.sectionId}"
      data-group="${buttonIndex}"
    >
      <button class="container-lessons__buttons__button${completed ? " button--completed" : ""}" aria-label="${buttonIconAlt} button">
        <img
          class="container-lessons__buttons__icon"
          src="../assets/images/${buttonIcon}"
          alt="${buttonIconAlt}"
        />
      </button>
      <span class="container-lessons__buttons__subtitle">${statusLabel}</span>
    </a>`;
  }

  return `
    <span
      class="container-lessons__buttons__item ${itemClass}${lockedClass}"
      aria-disabled="true"
      aria-label="${activityTitle} (bloqueada)"
      data-section="${section.sectionId}"
      data-group="${buttonIndex}"
    >
      <button class="container-lessons__buttons__button button--locked" aria-label="Bloqueado" disabled>
        <img
          class="container-lessons__buttons__icon"
          src="../assets/images/${buttonIcon}"
          alt="${buttonIconAlt}"
        />
      </button>
      <span class="container-lessons__buttons__subtitle">${statusLabel}</span>
    </span>`;
}

function buildLessonSection(section) {
  const groups = splitIntoNGroups(section.items, 4);

  return `
    <div class="container-lessons__lesson__content">
      <h5 class="container-lessons__lesson__content__difficult">-${section.level}-</h5>
      <h3 class="container-lessons__lesson__content__title">${section.moduleTitle}</h3>
    </div>
    <div class="container-lessons__trail-wrapper">
      <div class="container-lessons__trail">
        <svg class="trail-svg" viewBox="0 0 200 520" id="trail-svg">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </marker>
          </defs>
          <path id="path-gray" d="M 100 60 C 160 100, 160 160, 100 200 C 40 240, 40 300, 100 340 C 160 380, 160 420, 100 460" fill="none" stroke="#B4B2A9" stroke-width="3" stroke-dasharray="8 7" stroke-linecap="round" />
          <path id="path-green" d="M 100 60 C 160 100, 160 160, 100 200 C 40 240, 40 300, 100 340 C 160 380, 160 420, 100 460" fill="none" stroke="#639922" stroke-width="3" stroke-dasharray="8 7" stroke-linecap="round" stroke-dashoffset="0" />
        </svg>
      </div>
      <div class="container-lessons__buttons">
        ${groups.map((group, index) => buildActivityButton(section, index, group)).join("")}
      </div>
    </div>
  `;
}

function buildChallengeSection() {
  return `
    <div class="container-lessons__lesson__content__challenge">
      <h5 class="container-lessons__lesson__content__difficult__challenge">
        -Nível Doutor-
      </h5>
      <h3 class="container-lessons__lesson__content__title__challenge">
        O Último<br />Challenge
      </h3>
    </div>

    <div class="container-lessons__challenge__trail">
      <a href="/">
        <button class="container-lessons__challenge__trail__button">
          IR
        </button>
      </a>
      <p class="container-lessons__challenge__trail__paragraph">
        Desafie-se no Último Challenge<br />respondendo perguntas<br />de todos os assuntos vistos,<br />
        porém, com menos tempo<br />para as resposta e menos dicas.
      </p>
    </div>
  `;
}

function renderHome() {
  const lessonList = document.getElementById("lesson-list");
  if (!lessonList) return;

  const sections =
    typeof getLessonSections === "function" ? getLessonSections() : [];
  if (!sections.length) {
    lessonList.innerHTML = `
      <div class="container-lessons__empty">
        <p>Não foi possível carregar as atividades no momento.</p>
      </div>
    `;
    return;
  }

  lessonList.innerHTML =
    sections.map(buildLessonSection).join("") + buildChallengeSection();
}

window.addEventListener("DOMContentLoaded", renderHome);