const leaderboard = [
  { name: "Você", score: 500 },
  { name: "Lucas Fisio.", score: 200 },
  { name: "Pedro Lima.", score: 190 },
  { name: "Marcos", score: 50 },
];

function createRankingRow(entry, isCurrentUser, isLast) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.alignItems = "center";
  row.style.padding = "14px 0";
  row.style.borderBottom = isLast ? "none" : "1px solid var(--gray_content_difficult)";

  const name = document.createElement("span");
  name.textContent = entry.name;
  name.style.color = isCurrentUser ? "var(--green_dark_background)" : "var(--dark_yellow_text_cards)";
  name.style.fontWeight = isCurrentUser ? "700" : "600";

  const score = document.createElement("span");
  score.textContent = entry.score;
  score.style.color = "var(--green_dark_background)";
  score.style.fontWeight = "700";

  row.appendChild(name);
  row.appendChild(score);
  return row;
}

function renderRanking() {
  const root = document.getElementById("ranking-root");
  if (!root) return;

  const card = document.createElement("div");
  card.className = "activity-card";

  const content = document.createElement("div");
  content.className = "activity-content";

  const title = document.createElement("h2");
  title.className = "activity-title";
  title.textContent = "Ranking";
  title.style.textAlign = "center";

  const listWrapper = document.createElement("div");
  listWrapper.className = "activity-card--group-item";
  listWrapper.style.padding = "24px";
  listWrapper.style.marginTop = "16px";

  leaderboard.forEach((entry, index) => {
    const row = createRankingRow(entry, index === 0, index === leaderboard.length - 1);
    listWrapper.appendChild(row);
  });

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style.marginTop = "24px";
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.justifyContent = "center";

  const anchor = document.createElement("a");
  anchor.href = "home.html";
  anchor.style.width = "100%";
  anchor.style.textDecoration = "none";

  const button = document.createElement("button");
  button.className = "welcome-section__button";
  button.style.width = "100%";
  button.style.maxWidth = "280px";
  button.style.backgroundColor = "var(--lighter_green__buttons)";
  button.style.color = "var(--green_dark_background)";
  button.textContent = "Voltar para o início";

  anchor.appendChild(button);
  buttonWrapper.appendChild(anchor);

  content.appendChild(title);
  content.appendChild(listWrapper);
  content.appendChild(buttonWrapper);
  card.appendChild(content);
  root.appendChild(card);
}

window.addEventListener("DOMContentLoaded", renderRanking);
