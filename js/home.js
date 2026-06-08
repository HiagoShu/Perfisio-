function splitIntoNGroups(items, n) {
  const groups = Array.from({ length: n }, () => []);
  for (let i = 0; i < items.length; i++) {
    const groupIndex = Math.floor((i * n) / items.length);
    groups[groupIndex].push(items[i]);
  }
  return groups;
}

function buildLessonSection(section) {
  const groups = splitIntoNGroups(section.items, 4);

  return `
    <div class="container-lessons__lesson__content">
      <h5 class="container-lessons__lesson__content__difficult">-${section.level}-</h5>
      <h3 class="container-lessons__lesson__content__title">${section.moduleTitle}</h3>
      <p class="container-lessons__lesson__content__description">${section.description}</p>
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
        ${groups
          .map((group, index) => {
            const buttonLabel = index + 1;
            const itemClass = `container-lessons__buttons__item--${(index % 4) + 1}`;
            const questionCount = group.length;
            return `
              <a href="activity.html?section=${section.sectionId}&group=${index + 1}" class="container-lessons__buttons__item ${itemClass}">
                <button class="container-lessons__buttons__button">${buttonLabel}</button>
                <span class="container-lessons__buttons__subtitle">${questionCount} perguntas</span>
              </a>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderHome() {
  const lessonList = document.getElementById("lesson-list");
  if (!lessonList) return;
  lessonList.innerHTML = getLessonSections().map(buildLessonSection).join("");
}

window.addEventListener("DOMContentLoaded", renderHome);