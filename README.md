# Perfisio 🩺🎮

> **Perfisio** é uma aplicação web gamificada desenvolvida para o **Laboratório de Pilates Clínico da Universidade Federal do Ceará (UFC)**. O projeto nasceu no âmbito do **Projeto Integrado de Extensão (PIE)** do curso de **Sistemas e Mídias Digitais** (Instituto UFC Virtual), com o objetivo de transformar o aprendizado de terminologias técnicas de Fisioterapia em uma experiência ativa, dinâmica e engajadora.

📱 **Acesse a aplicação online:** [perfisio-app.netlify.app](https://perfisio-app.netlify.app/)

💻 **Repositório do projeto:** [github.com/HiagoShu/Perfisio](https://github.com/HiagoShu/Perfisio)

---

## 🎯 O Problema & A Solução

* **O Problema:** Alunos de Fisioterapia costumam apresentar dificuldades para fixar conceitos e terminologias técnicas complexas por meio da leitura passiva de materiais teóricos, o que costuma resultar em um baixo engajamento em revisões tradicionais de conteúdo.
* **A Solução:** O **Perfisio** é um *quiz* gamificado de identificação de termos técnicos. O usuário é desafiado de forma ativa a adivinhar as palavras corretas utilizando dicas estratégicas e enfrentando um limite de tempo, tornando o processo de memorização e estudo focado e divertido.

---

## 🕹️ Funcionalidades e Mecânicas de Jogo

Inspirado em plataformas consagradas de microaprendizado, como o Duolingo, o Perfisio traz as seguintes mecânicas:

* **Trilha de Progressão Acadêmica:** Os desafios são organizados em uma trilha com quatro níveis de dificuldade progressivos: **Calouro**, **Veterano**, **PerFisio** e **Doutor**. Os três primeiros níveis abordam os grandes temas do curso: *Fundamentos*, *Sistema Muscular* e *Sistema Articular*.
* **Desafio contra o Tempo:** O jogador deve identificar corretamente a palavra antes que o tempo se esgote. Acertar garante pontos e avanço de fase; errar reduz o tempo disponível no cronômetro.
* **Sistema de Dicas Dinâmicas (Prompts):** O usuário recebe uma dica inicial gratuita e pode adquirir até três adicionais por nível.
* **Desafio Final (Nível Doutor):** Uma revisão que reúne todas as perguntas anteriores de forma aleatória, com menos tempo e menos dicas disponíveis.
* **Resumo de Desempenho:** Ao término de cada atividade, o jogo exibe estatísticas detalhadas com a pontuação obtida, o multiplicador médio de pontos e o percentual de acertos logo na primeira tentativa.
* **Autonomia de Navegação:** Embora a trilha sugira uma ordem lógica, o usuário tem a liberdade de iniciar por qualquer nível ou repetir etapas concluídas para melhorar seu desempenho.

---

## 🧠 Fundamentação Teórica: Cognição e Behaviorismo

O design instrucional do Perfisio foi rigorosamente centrado na **Teoria Behaviorista da Cognição**, aplicando conceitos do **Condicionamento Operante de B. F. Skinner**:

* **Reforço Positivo:** Pontuações, feedbacks instantâneos de acerto e o avanço no jogo atuam como consequências recompensadoras, incentivando a precisão no estudo.
* **Punição Negativa:** A perda de tempo no cronômetro em caso de erro funciona como a remoção de um recurso favorável, coibindo respostas impensadas e estimulando a atenção reflexiva.
* **Estímulo Discriminativo (Prompt):** O sistema de dicas integradas funciona orientando o comportamento do estudante para aumentar as chances de acerto.
* **Esvanecimento (Fading):** À medida que o jogador avança (culminando no nível Doutor), o número de dicas diminui drasticamente, retirando os auxílios graduais para consolidar a autonomia intelectual do estudante.
* **Instrução Programada:** A sequência progressiva de níveis de dificuldade permite uma trajetória de aprendizagem controlada e eficaz.

---

## 🎨 Comunicação Visual & Design UX/UI

O projeto visual do Perfisio une a seriedade da área da saúde com a modernidade da tecnologia de jogos:

* **A Marca:** A tela inicial apresenta uma versão estilizada e simplificada (pregnância) do símbolo da Fisioterapia (o bastão e as serpentes), estabelecendo rápido reconhecimento visual.
* **Paleta de Cores e Ritmo de Jogo:** As cores, reaproveitadas da identidade original da marca, dão ritmo ao progresso:
* **Verde Escuro:** Identidade dominante (cor oficial da Fisioterapia).
* **Verde Claro:** Representa o início (Nível Calouro).
* **Bege:** Evoca o amadurecimento (Nível Veterano).
* **Amarelo-Ouro / Dourado:** Remete à experiência avançada (Nível PerFisio).
* **Branco com Detalhes Roxos:** Representa o desafio acadêmico máximo (Nível Doutor).


* **Tipografia:** Uso da fonte **Archivo**, por sua alta legibilidade na tela, expressividade e variedade de pesos.
* **Princípios de Gestalt Aplicados:**
* *Continuidade:* Representada pela linha pontilhada da trilha, conduzindo o olhar do aluno de forma fluida.
* *Proximidade:* Agrupamento dos controles do jogo (tempo, pontos e dicas) no topo da interface.
* *Contraste:* Cards informativos cinza-claros de suporte sobre o fundo escuro, destacando alternativas e reduzindo a fadiga visual.



---

## 🛠️ Tecnologias Utilizadas

O ecossistema do Perfisio foi arquitetado de forma modular, rodando diretamente no navegador sem necessidade de instalação por parte do estudante:

* **HTML5** – Estruturação de conteúdo e acessibilidade.
* **CSS3** – Design responsivo adaptado tanto para dispositivos móveis quanto para computadores.
* **JavaScript (ES6+)** – Programação de toda a lógica do quiz, cronômetro, pontuação e aleatoriedade de questões.
* **Git e GitHub** – Controle de versão e desenvolvimento colaborativo.
* **Netlify** – Hospedagem e deploy contínuo da aplicação.

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/HiagoShu/Perfisio.git

```


2. **Acesse a pasta do projeto:**
```bash
cd Perfisio

```


3. **Execute:**
* Basta abrir o arquivo `index.html` em qualquer navegador web de sua preferência.
* Se preferir usar o *Visual Studio Code*, você pode iniciar o projeto utilizando a extensão **Live Server** para obter um ambiente de testes local ativo.



---

## 👥 Equipe de Desenvolvimento (MOVITECH)

O Perfisio foi construído pelo time **MOVITECH**:

* **Hiago Gabriel Fernandes (582780)** – Desenvolvimento de software e design de interface.
* **João Pedro Gusmão Seabra (579059)** – Game design, desenvolvimento de software e design de interface.
* **José Haniel Pereira dos Santos (580636)** – Gestão do projeto.
* **Luís Henrique Sousa Ribeiro (583173)** – Desenvolvimento de software, design de interface e prototipação.
* **Natanael Lopes Mariano (580686)** – Design visual.
* **Vinicius Borges Oliveira (579247)** – Desenvolvimento de software.

---

## ⚖️ Licença e Referenciais Acadêmicos

Este software foi desenvolvido como produto acadêmico e de extensão.

* **Parceiro Institucional:** Laboratório de Pilates Clínico da UFC.
* **Principais Referências:**
* CASTRO-FILHO, J. A.; FREIRE, R. S. *Cognosis: a incrível jornada pelos reinos da cognição*. UFC, 2026.
* SKINNER, B. F. *Ciência e comportamento humano*. Martins Fontes, 2003.
* SKINNER, B. F. *Tecnologia do ensino*. EPU, 1972.
