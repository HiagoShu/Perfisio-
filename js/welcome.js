const TUTORIAL_SLIDES = [
  {
    image: "../assets/images/tutorial1.png",
    title: "Bem-vindo(a)",
    text: "Bem-vindo(a) ao Perfisio! Aqui você vai testar (e treinar) seus conhecimentos de Fisioterapia respondendo identificação de termos com a ajuda de dicas — como um jogo de adivinhação. Vamos te mostrar rapidinho como jogar.",
  },
  {
    image: "../assets/images/tutorial2.png",
    title: "A trilha de níveis",
    text: "Sua jornada passa por quatro níveis, na ordem: Calouro → Veterano → PerFisio → Doutor. Cada nível tem seu próprio tema e é dividido em 4 atividades menores. Você precisa avançar em ordem — não dá para pular na frente.",
  },
  {
    image: "../assets/images/tutorial3.png",
    title: "Respondendo uma identificação de termos",
    text: "Cada identificação de termos mostra 4 possíveis respostas. Escolha a alternativa que você acha correta e toque em Responder. Se acertar, você ganha pontos e segue para a próxima identificação de termos. Se errar, você perde um pouco do seu tempo e pode tentar de novo.",
  },
  {
    image: "../assets/images/tutorial4.png",
    title: "Toque vs. Segurar: as dicas",
    text: "Existem dois tipos de toque no jogo: um toque rápido numa dica já desbloqueada mostra o texto da dica na tela; já segurar uma dica ainda trancada por alguns segundos gasta 1 chave para desbloqueá-la e revelar seu conteúdo. Você começa cada atividade com 20 chaves — use-as com sabedoria!",
  },
  {
    image: "../assets/images/tutorial5.png",
    title: "Cronômetro e pontuação",
    text: "Cada identificação de termos tem um cronômetro. Quanto mais rápido você acertar, mais pontos você ganha (o multiplicador de pontuação cresce com o tempo restante). Errar uma resposta reduz seu tempo — cuidado para não ficar sem tempo!",
  },
  {
    image: "../assets/images/tutorial6.png",
    title: "Segurar para voltar",
    text: "Quer sair de uma atividade no meio? O botão “Voltar para o início” também precisa ser segurado, não só tocado — isso evita que você saia sem querer no meio de uma resposta.",
  },
  {
    image: "../assets/images/tutorial7.png",
    title: "Completando uma atividade",
    text: "Ao responder toda a identificação de termos de uma atividade, ela fica marcada como Concluída — e a próxima atividade daquele nível é desbloqueada. Complete a Atividade 1 antes de tentar a Atividade 2, e assim por diante.",
  },
  {
    image: "../assets/images/tutorial8.png",
    title: "Desbloqueando o próximo nível",
    text: "Para liberar o próximo nível, você precisa de duas coisas: completar todas as 4 atividades do nível atual e atingir uma pontuação mínima de Score Perfisio. As duas condições valem — não é só uma ou outra.",
  },
  {
    image: "../assets/images/tutorial9.png",
    title: "O Último Challenge",
    text: "O Último Challenge é o desafio final: toda a identificação de termos de todos os níveis, embaralhada, com menos tempo e menos dicas por questão. A cada 10 acertos seguidos, você ganha um bônus de 10 chaves extras. Se o tempo acabar em qualquer questão, é fim de jogo — e você volta para o início.",
  },
  {
    image: "../assets/images/tutorial10.png",
    title: "Vencendo o jogo",
    text: "Complete toda a identificação de termos do Último Challenge sem deixar o tempo acabar, e você vence o Perfisio! Um brilho dourado especial vai aparecer na tela — e vai te seguir até a tela inicial, como um troféu da sua conquista.",
  },
  {
    image: "../assets/images/tutorial11.png",
    title: "Boa sorte!",
    text: "Antes de começar: dá uma olhada no botão de Configurações (⚙️) no canto da tela inicial para ajustar o volume da música e dos efeitos sonoros do seu jeito. Agora é só estudar, adivinhar e progredir. Boa sorte, futuro(a) fisioterapeuta! 🦴",
  },
];

let currentSlideIndex = 0;

function renderTutorialSlide() {
  const slide = TUTORIAL_SLIDES[currentSlideIndex];
  const image = document.getElementById("tutorial-image");
  const title = document.getElementById("tutorial-title");
  const text = document.getElementById("tutorial-text");
  const counter = document.getElementById("tutorial-counter");
  const prevButton = document.getElementById("tutorial-prev-button");
  const nextButton = document.getElementById("tutorial-next-button");
  if (!slide || !image || !title || !text || !counter || !prevButton || !nextButton) {
    return;
  }

  image.style.display = "";
  image.src = slide.image;
  image.alt = slide.title;
  title.textContent = slide.title;
  text.textContent = slide.text;
  counter.textContent = `${currentSlideIndex + 1} / ${TUTORIAL_SLIDES.length}`;

  prevButton.disabled = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === TUTORIAL_SLIDES.length - 1;
  nextButton.textContent = isLastSlide ? "Concluir" : "Próximo ›";
}

function openTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (!overlay) return;
  currentSlideIndex = 0;
  renderTutorialSlide();
  overlay.hidden = false;
}

function closeTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (!overlay) return;
  overlay.hidden = true;
}

function goToNextTutorialSlide() {
  if (currentSlideIndex === TUTORIAL_SLIDES.length - 1) {
    closeTutorial();
    return;
  }
  currentSlideIndex += 1;
  renderTutorialSlide();
}

function goToPreviousTutorialSlide() {
  if (currentSlideIndex === 0) return;
  currentSlideIndex -= 1;
  renderTutorialSlide();
}

window.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("tutorial-open-button");
  const closeButton = document.getElementById("tutorial-close-button");
  const prevButton = document.getElementById("tutorial-prev-button");
  const nextButton = document.getElementById("tutorial-next-button");
  const overlay = document.getElementById("tutorial-overlay");

  if (openButton) openButton.addEventListener("click", openTutorial);
  if (closeButton) closeButton.addEventListener("click", closeTutorial);
  if (prevButton) prevButton.addEventListener("click", goToPreviousTutorialSlide);
  if (nextButton) nextButton.addEventListener("click", goToNextTutorialSlide);
  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeTutorial();
    });
  }
});
