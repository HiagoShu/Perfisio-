const activityData = [
  {
    sectionId: "calouro",
    level: "Nível Calouro",
    moduleTitle: "Os Conceitos da Fisioterapia",
    description: "Fundamentos básicos e definições essenciais da profissão.",
    items: [
      {
        id: "calouro-70",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SIGO NA MESMA DIREÇÃO;",
          "UM EXEMPLO DESSE MOVIMENTO É O DE QUANDO ESTAMOS",
          "ESSE TIPO DE MOVIMENTO É UNIFORME;",
          "SOU UM TIPO DE MOVIMENTO;",
          "POSSO TAMBÉM SER DEFINIDO COMO MOVIMENTO AO",
          "OUTRO EXEMPLO DESSE MOVIMENTO É QUANDO ESTAMOS",
          "ESSE TIPO DE MOVIMENTO TEM 6 LETRAS;",
          "PASSE SUA VEZ;",
          "NESSE TIPO DE MOVIMENTO A LINHA PODE SER RETA",
          "SIGO NA MESMA VELOCIDADE.",
        ],
        answer: "Movimento Linear",
      },
      {
        id: "calouro-71",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "QUASE TODOS OS MOVIMENTOS HUMANOS SÃO DESSE TIPO;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "UM EXEMPLO DESSE MOVIMENTO É QUANDO UMA GINASTA",
          "QUANDO OCORRO, PARTES DO CORPO EM MOVIMENTO ESTÃO SE",
          "TENHO 7 LETRAS;",
          "PONTO FIXO OU EIXO DE ROTAÇÃO É UMA LINHA IMAGINÁRIA",
          "SOU UM TIPO DE MOVIMENTO;",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "ESSE MOVIMENTO OCORRE DURANTE UMA CAMBALHOTA DO",
          "ESSE MOVIMENTO OCORRE AO REDOR DE UM PONTO FIXO.",
        ],
        answer: "Movimento Angular",
      },
      {
        id: "calouro-72",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PODE SER CONSIDERADO COMO UMA FORÇA ROTATÓRIA;",
          "A DEISTÂNCIA PERPENDICLAR QUE VAI DA LINHA DE AÇÃO DA",
          "É A QUANTIDADE DE FORÇA CAPAZ DE GERAR MOVIMENTO;",
          "PODE SER DEFINIDO COMO O EFEITO ROTATÓRIO DE UMA FORÇA;",
          "TEM 6 LETRAS;",
          "É SINÔNIMO DE MOMENTO DE FORÇA;",
          "SOU IMPORTANTE PARA O MOVIMENTO MUSCULAR;",
          "É O EQUIVALENTE ANGULAR DE FORÇA LINEAR;",
          "SUA UNIDADE DE MEDIDA É O NEWTON-METRO (N-M);",
          "T= F X D.",
        ],
        answer: "Torque",
      },
      {
        id: "calouro-73",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTÁ CONDICIONADA AO FORMATO DAS SUPERFÍCIES ÓSSEAS",
          "REPRESENTA A ADM RELATIVA DE MOVIMENTO PERMITIDA EM",
          "QUANDO REDUZIDO PODE CAUSAR DESEQUILÍBRIOS, DORES E",
          "A MIM ESTÁ ATRELADO O TERMO FLEXIBILIDADE ESTÁTICA;",
          "A MIM ESTÁ ATRELADO O TERMO FLEXIBILIDADE DINÂMICA;",
          "PODSE SER CALCULADA COM O USO DE UMA GONIÔMETRO;",
          "ESTOU PRESENTE NOS CONTORCIONISTAS;",
          "SÃO DUAS PALAVRAS;",
          "ESTOU PRESENTE EM TODAS AS ARTICULAÇÕES DO CORPO;",
          "SINÔNIMO DE AMPLITUDE DE MOVIMENTO (ADM).",
        ],
        answer: "Flexibilidade Articular",
      },
      {
        id: "calouro-74",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU RELACIONADA COM O ALONGAMENTO MUSCULAR;",
          "TENHO 15 LETRAS;",
          "SOU UMA PROPRIEDADE MUSCULAR;",
          "SOU ESSENCIAL PARA O GANHO DE AMPLITUDE DE MOVIMENTO",
          "SOU UMA PROPRIEDADE REALCIONADA AO COMPRIMENTO",
          "PARA QUE A ELASTICIDADE OCORRA, EU TENHO QUE AGIR",
          "SOU IMPORTANTE PARA O TREINO DE FLEXIBILIDADE;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "ESTOU RELACIONADA COM A VISCOELASTICIDADE;",
          "PASSE SUA VEZ.",
        ],
        answer: "Extensibilidade",
      },
      {
        id: "calouro-75",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA PROPRIEDADE MUSCULAR;",
          "FICO EVIDENTE QUANDO SE INTERROMPE UM TREINO DE",
          "TENHO 12 LETRAS;",
          "SÓ ACONTEÇO APÓS A PPROPRIEDADE DA EXTENSIBILIDADE;",
          "CAPACDADE DE O MÚSUCULO DE APÓS SER ESTIRADO,",
          "DEPENDO DE DOIS COMPONENTES PRINCIPAIS;",
          "O COMPONENTE ELÁSTICO EM PARALELO (MEMBRANBS",
          "O COMPONENTE ELÁSTICO EM SÉRIE (TENDÕES) ARMAZENA",
          "SOU UMA PROPRIEDADE DE AÇÃO GRADUAL;",
          "ESTOU RELACIONADA COM A VISCOELASTICIDADE.",
        ],
        answer: "Elasticidade",
      },
      {
        id: "calouro-76",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "UM DOS TERMOS É DEFINIDO COMO A CAPACIDADE DE",
          "UM DOS TERMOS É UMA CARACTERÍSITCA COMPORTAMENTAL",
          "UM DOS TERMOS RESPONDE A ESTÍMULOS QUÍMICOS,",
          "SÃO PROPRIEDADES DO MÚSCULO;",
          "SÃO DOIS TERMOS DIFERENTES, MAS RELACIONADOS;",
          "UM DOS TERMOS ESTÁ RELACIONADO À INTERAÇÃO NEURÔNIO u0002FIBRA MUSCULAR;",
          "O 1° TERMO TEM 14 LETRAS;",
          "UM DOS TERMOS PODE SER DEFINIDO COMO CONTRAÇÃO;",
          "O SEGUNDO TERMO TEM 32 LETRAS, POIS SÃO 4 PALAVRAS;",
          "UM DOS TERMOS SE REFARE A RESPOSTA A UM ESTÍMULO.",
        ],
        answer: "Irritabilidade e Capacidade de Desenvolver Tensão",
      },
      {
        id: "calouro-77",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "DEPENDO DE MUITOS FATORES, INCLUINDO UNIDADES MOTORAS",
          "SÃO DUAS PALAVRAS;",
          "EXISTEM VÁRIOS TIPOS DE MIM;",
          "ESSE COMPONENTE PODE SER ESTABILIZADOR OU MOBILIZADOR,",
          "PARA QUE UM TRABALHO SEJA EXECUTADO EU SOU ESSENCIAL;",
          "MEU SEGUNDO TERMO DESCREVE O COMPONENTE AO QUAL",
          "SOU DEFINIDO COMO A CAPACIDADE DE DETRMINADO GRUPO",
          "MINHA UNIDADE DE MEDIDA É O N- NEWTON;",
          "UM DOS MEUS TIPOS É RESISTENTE, O OUTRO É POTENTE, OUTRO",
          "ESTOU RALACIONADO COM A GERAÇÃO DE TORQUE.",
        ],
        answer: "Força Muscular",
      },
      {
        id: "calouro-78",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "GRAÇAS A ESSE CICLO A CONTRAÇÃO RESULTANTE SERÁ MAIS",
          "É MUITO IMPORTANTE EM PRÁTCAS ESPORTIVAS;",
          "SOU UM CICLO;",
          "O REFLEXO DE ESTIRAMENTO CONTRIBUI PARA A FORMAÇÃO",
          "O TRABALHO GERADO POR UM MÚSCULO É MAIOR GRAÇAS A",
          "SOU UMA COMTRAÇÃO EXCÊNTRICA SEGUIDA DE UMA",
          "SÃO TRÊS PALAVRAS;",
          "GRAÇAS A MIM SÃO PRESCRITOS OS EXERCÍCIOS PLIOMÉTRICOS;",
          "SALTADORES FAZEM USO DE MIM;",
          "SÃO DOIS TERMOS.",
        ],
        answer: "Ciclo Alongamento-Encurtamento",
      },
      {
        id: "calouro-79",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "APAREÇO NOS MOVIMENTOS DE ABDUÇÃO E EXTENSÃO OU",
          "FICO EVIDENTE AO SE OBSERVAR A POSIÇÃO DO POLEGAR;",
          "ACONTEÇO NOS PLANOS SAGITAL E FRONTAL;",
          "ESTOU RELACIONADA À ARTICULAÇÃO GLENOUMERAL;",
          "MAC CONAILL NOMEOU-ME DE ROTAÇÃO ADJUNTA;",
          "SINÔNIMO DE ROTAÇÕES AUTOMÁTICAS;",
          "DESCREVO UMA ROTAÇÃO INTERNA DE 180°;",
          "SÃO DOIS NOMES;",
          "SE EU NÃO ACONTECESE HAVERIAM BLOQUEIOS ARTICULARES",
          "SOU UM PARADOXO.",
        ],
        answer: "Paradoxo de Codman",
      },
      {
        id: "calouro-80",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MÁQUINA SIMPLES;",
          "CONSTITUI-SE DE UMA BARRA SUSPENSA E UM PONTO DE APOIO;",
          "CONVERTE FORÇA EM TORQUE;",
          "SÃO DE TRÊS TIPOS;",
          "A INTERPONTENTE É O TIPO MAIS COMUM NO CORPO HUMANO;",
          "POSSUI EIXO DE ROTAÇÃO E BRAÇO DE ALAVANCA;",
          "INTERFIXA E INTERRESISTENTE SÃO OUTROS DOIS TIPOS",
          "ANDE 2 (DUAS) CASAS;",
          "TENHO 8 LETRAS;",
          "ESTOU PRESENTE EM TODAS AS ARTICULAÇÕES.",
        ],
        answer: "Bioalavanca",
      },
      {
        id: "calouro-81",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ATRAÇÃO PARA O CENTRO DA TERRA;",
          "A MASSA DE UM CORPO SIMÉTRICO FICA IGUALMENTE",
          "O PESO INTERFERE;",
          "DIVIDE A MASSA DE UM CORPO EM DUAS PARTES IGUAIS;",
          "DEPENDE DA POSIÇÃO DOS MEMBROS QUE COMPÕEM O CORPO",
          "ENCONTRA-SE ANTERIOR A SEGUNDA VÉRTEBRA SACRAL;",
          "TIPO DE FORÇA;",
          "É INFLUENCIADO PELA GRAVIDADE;",
          "ESTOU RELACIONADA COM O EQUILÍBRIO;",
          "FICO A NÍVEL DE L5 E S1.",
        ],
        answer: "Centro de Gravidade",
      },
      {
        id: "calouro-82",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTUDA O MOVIMENTO DO CORPO NO ESPAÇO;",
          "É UM RAMO DA DINÂMICA;",
          "NÃO LEVA EM CONSIDERAÇÃO AS FORÇAS QUE PRODUZEM O",
          "VELOCIDADE E ACELERAÇÃO ESTÃO LIGADAS A MIM;",
          "O ESTUDO DE PLANOS E EIXOS ESTÁ INSERIDO NELE;",
          "O ESTUDO DA CINÉTICA BASEIA-SE NELE;",
          "DIFERE DA CINÉTICA;",
          "OS ESTUDOS DA TRAJETÓRIA E DO SENTIDO ESTÃO INSERIDOS",
          "SOU UMA SUBDIVISÃO ADICIONAL DO ESTUDO DA",
          "TENHO 10 LETRAS.",
        ],
        answer: "Cinemática",
      },
      {
        id: "calouro-83",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "COMBINO MECÂNICA COM ANATOMIA, FISIOLOGIA E HISTOLOGIA;",
          "ESTUDA O MOVIMENTO DO CORPO;",
          "UTILIZA MÉTODOS DA MECÂNICA;",
          "ESTUDA FORÇAS INTERNAS E EXTERNAS QUE ATUAM NO CORPO",
          "ESTUDO DA ESTRUTURA E FUNÇÃO DO SISTEMA BIOLÓGICO;",
          "ESTUDO DO SISTEMA GESTUAL;",
          "INTERAÇÃO DO CORPO QUE REALIZA A AÇÃO COM O MEIO",
          "TEM COMO OBJETIVO AUMENTAR A EFICIÊNCIA TÉCNICA DOS",
          "PODE DIMINUIR O RISCO DE LESÕES;",
          "TENHO 11 LETRAS.",
        ],
        answer: "Biomecânica",
      },
      {
        id: "calouro-84",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PODE SER UNIAXIAL, BIAXIAL OU TRIAXIAL;",
          "PERMITE GRAUS DE LIBERDADE AO MOVIMENTO;",
          "TENHO 11 LETRAS;",
          "A ARTROCINEMÁTICA ESTUDA SEUS MOVIMENTOS;",
          "AS MAIS COMUNS SÃO AS SINOVIAIS;",
          "SUSCEPTÍVEL A LESÕES;",
          "PODEM SER ANATÔMICAS OU FUNCIONAIS;",
          "PRESENÇA DE LÍQUIDO SINOVIAL;",
          "COMPOSTA POR DOIS OU MAIS OSSOS;",
          "PODE REALIZAR MOVIMENTOS DE ROLAMENTO, DESLIZAMENTO",
        ],
        answer: "E ROTAÇÃO. Articulação",
      },
      {
        id: "calouro-85",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "VELOCIDADE CONSTANTE;",
          "OFERECE RESISTÊNCIA MÁXIMA EM TODO O ARCO DE",
          "USADO TANTO PARA AVALIAR QUANTO PARA TRATAR;",
          "NECESSITA-SE DE ESTÍMULO VERBAL;",
          "VELOCIDADE PODE VARIAR DE 60° ATÉ 300°/S;",
          "REALIZA CONTRAÇÃO CONCÊNTRICA E EXCÊNTRICA;",
          "REPRODUZ MOVIMENTOS NÃO FUNCIONAIS;",
          "SEU DISPOSITIVO É BASEADO EM SISTEMAS DE PRESSÃO",
          "ALTO CUSTO;",
          "APRESENTA VARIÁVEIS COMO PICO DE TORQUE E RELAÇÃO",
        ],
        answer: "AGONISTA/ANTAGONISTA. Dinamometria Isocinética",
      },
      {
        id: "calouro-86",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "OCORRE NOS MÚSCULOS;",
          "PODE SER ACOMPANHADA DE DOR;",
          "OCASIONADA POR ESFORÇO EXCESSIVO;",
          "AS FIBRAS MUSCULARES DO TIPO I SÃO MAIS RESISTENTES A ELA;",
          "DECLÍNIO DA TENSÃO MUSCULAR;",
          "OCORRE NA AUSÊNCIA DE GLICOGÊNIO E GLICOSE;",
          "OCORRE POR DIMINUIÇÃO NOS NÍVEIS DE O2;",
          "EXISTE A PRESENÇA DO ÁCIDO LÁTICO;",
          "PODEMOS PREVENIR COM REEDUCAÇÃO ALIMENTAR;",
          "EVITA-SE COM O REPOUSO.",
        ],
        answer: "Fadiga Muscular",
      },
      {
        id: "calouro-87",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SUPERFÍCIE ÓSSEA PRATICAMENTE EM CONTATO DIRETO;",
          "TENHO 10 LETRAS;",
          "SUBDIVIDEM-SE EM TRÊS TIPOS PRINCIPAIS;",
          "AS SUTURAS DOS OSSOS DO CRÂNIO SÃO EXEMPLOS;",
          "SUPERFÍCIES ÓSSEAS EM CONTINUIDADE;",
          "ARTICULAÇÃO IMÓVEL;",
          "UNIDOS POR TECIDO FIBROSO;",
          "É UM TIPO DE ARTICULAÇÃO;",
          "A GONFOSE É UM DOS SEUS TIPOS;",
          "CLASSIFICADOS EM CONCORDANTES E DISCORDANTES.",
        ],
        answer: "Sinartrose",
      },
      {
        id: "calouro-88",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PERMITE MOVIMENTO;",
          "PRESENÇA DE BURSAS SINOVIAIS;",
          "É UM TIPO DE ARTICULAÇÃO;",
          "COMPOSTA DE TECIDO CARTILAGINOSO;",
          "POSSUI MOVIMENTOS LIMITADOS;",
          "DIVIDE-SE EM DOIS TIPOS;",
          "A SINCONDROSE É UM DOS SEUS TIPOS;",
          "A SÍNFISE PÚBICA É UM EXEMPLO DELA;",
          "PERMITO POUCO MOVIMENTO;",
          "SOU SUBDIVIDIDA EM SINCONDROSES E SÍNFISES.",
        ],
        answer: "Anfiartrose",
      },
      {
        id: "calouro-89",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PERMITE MOVIMENTO;",
          "PODE SER CLASSIFICADA EM TRÊS TIPOS;",
          "PRESENÇA DE BURSAS SINOVIAIS;",
          "AS SINOVIAIS SÃO AS MAIS COMUNS;",
          "PODE APRESENTAR INTERPOSIÇÃO DE TECIDO FIBROSO EM UM",
          "COMO EXEMPLOS TEMOS AS CARTILAGINOSAS;",
          "É UM TIPO DE ARTICULAÇÃO;",
          "TAMBÉM CONHECIDA COMO SINOVIAL;",
          "COMPOSTA POR CÁPSULA ARTICULAR, LIGAMENTAR, CAVIDADE",
          "TAMBÉM POSSUO CARTILAGEM ARTICULAR E LÍQUIDO",
        ],
        answer: "SINOVIAL. Diartrose Anatomia Palpatória",
      },
      {
        id: "calouro-90",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O PACIENTE FICA SENTADO DE FRENTE;",
          "O TERAPEUTA FICA AO LADO DO PACIENTE;",
          "SEU INDICADOR TOCARÁ NA PORÇÃO DISTAL E LATERAL DO",
          "ESSA ESTRUTURA SE ARTICULA COM A FÓVEA DO RÁDIO;",
          "VOLTE UMA CASA;",
          "FIQUE SEM DICA;",
          "AO FLEXIONAR O COTOVELO PODE-SE PERCEBER SOB OS",
          "PASSE SUA VEZ;",
          "ELA PARECERÁ LISA SOB OS SEUS DEDOS;",
          "É UMA ESTRUTURA DO ÚMERO.",
        ],
        answer: "Capítulo do Úmero Anatomia Palpatória",
      },
      {
        id: "calouro-91",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PACIENTE SENTADO;",
          "O TERAPEUTA FICA AO LADO DO PACIENTE;",
          "É UMA ESTRUTURA DO ÚMERO;",
          "COM O INDICADOR PALPA A REGIÃO PROXIMAL E LATERAL",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "COM O INDICADOR PALPA TAMBÉM A REGIÃO ABAIXO DA",
          "É UMA ESTRUTURA ÓSSEA;",
          "SOB OS DEDOS A ESTRUTURA SE MOSTRARÁ RUGOSA;",
          "ESSA É A REGIÃO AFETADA EM CASOS DE EPICONDILITE;",
          "VOLTE DUAS CASAS.",
        ],
        answer: "Epicôndilo Lateral do Úmero Anatomia Palpatória",
      },
      {
        id: "calouro-92",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "É MUITO MAIS MARCADA QUE A CRISTA SUPRA-CONDILAR",
          "É UMA CRISTA;",
          "PERTENÇO AO ÚMERO;",
          "POSIÇÃO DO PACIENTE: SENTADO DE FRENTE COM O OMBRO",
          "ESSA ESTRUTURA É DIRETAMENTE ACESSÍVEL SOB A PELE ACIMA",
          "POSIÇÃO DO TERAPEUTA: AO LADO DO PACIENTE;",
          "COM O INDICADOR DEVE-SE PALPAR A REGIÃO QUE SERÁ SENTIDA",
          "ELA É CONTINUADA PROXIMALMENTE PELA MARGEM LATERAL DO",
          "ESTOU SITUADA INFERIORMENTE;",
          "SOU UMA ESTRUTURA POSICIONADA LATERALMENTE.",
        ],
        answer: "Crista Supra-epicondilar Lateral Anatomia Palpatória",
      },
      {
        id: "calouro-93",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PACIENTE SENTADO;",
          "O COTOVELO DO PACIENTE DEVE SER FLETIDO A 130°-140°;",
          "O TERAPEUTA FICA AO LADO DO PACIENTE;",
          "INICIALMENTE SE TOCA NA EXTREMIDADE DISTAL DA FACE",
          "A PALPAÇÃO É FEITA COM A POSIÇÃO PULPAR BIDIGITAL;",
          "NA PALPAÇÃO APÓS PALPAR O CAPÍTULO DO ÚMERO BASTA",
          "PARA ME SENTIR É NECESSÁRIO EMPURRAR O TENDÃO DO M.",
          "SOU UMA FOSSA;",
          "AO ME PALPAR ME APRESENTAREI SOB OS SEUS DEDOS ACIMA",
          "AVANCE UMA CASA.",
        ],
        answer: "Fossa do Olécrano Anatomia Palpatória",
      },
      {
        id: "calouro-94",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU PRESENTE NOS DOIS LADOS DO ÚMERO;",
          "PALPE-ME NA EXTREMIDADE DISTAL DA MARGEM MEDIAL DO",
          "MINHA FACE POSTERIOR É LISA;",
          "SOU CORTADA POR UM SULCO VERTICAL POR ONDE PASSA O",
          "MINHA MARGEM INFERIOR DÁ PASSAGEM AO LIGAMENTO",
          "SOU UMA ESTRUTURA DO ÚMERO;",
          "COM O INDICADOR DEVE-SE PALPAR A REGIÃO SITUADA ACIMA",
          "O TERAPEUTA FICA AO LADO DO PACIENTE;",
          "PACIENTE SENTADO DE FRENTE;",
          "VOLTE DUAS CASAS.",
        ],
        answer: "Epicôndilo Medial do Úmero Anatomia Palpatória",
      },
      {
        id: "calouro-95",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA CRISTA",
          "SOU UMA MARGEM MACIA DE FÁCIL ACESSO;",
          "ESTENDO-ME PROXIMALMENTE PELA MARGEM MEDIAL DO",
          "PALPE-ME NA REGIÃO ACIMA DO EPICÔNDILO MEDIAL;",
          "O PACIENTE DEVE ESTAR COM O OMBRO ABDUZIDO A CERCA",
          "O TERAPEUTA FICA AO LADO DO PACIENTE;",
          "A PALPAÇÃO É FEITA COM A POLA DOS DEDOS;",
          "PACIENTE SENTADO DE FRENTE;",
          "AVANCE UMA CASA;",
          "VOCÊ TEM DIREITO ÀS 5 PRIMEIRAS DICAS.",
        ],
        answer: "Crista Supra-epicondilar Medial Anatomia Palpatória",
      },
      {
        id: "calouro-96",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UM SULCO;",
          "SOU VERTICAL E CORTADO NA FACE POSTERIOR DO ÚMERO;",
          "LOCALIZO-ME NO EPICÔNDILO MEDIAL;",
          "NA MINHA PALPAÇÃO O SEU INDICADOR FICARÁ POSICIONADO",
          "PACIENTE SENTADO OU DE PÉ;",
          "O PROFISSIONAL NÃO TEM UMA POSIÇÃO ESPECÍFICA;",
          "OS DEDOS SÃO EM PINÇA;",
          "PARA CONFIRMAR QUE ME ACHOU PODEM SER DADAS",
          "NA MINHA PALPAÇÃO SEU POLEGAR FICARÁ COLOCADO",
          "AO SE REALIZAR O TESTE DE CONFIRMAÇÃO O PACIENTE PODE",
        ],
        answer:
          "SENTIR DORMÊNCIA OU “CHOQUES”. Sulco do Nervo Ulnar Anatomia Palpatória",
      },
      {
        id: "calouro-97",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "EM CASO DE DÚVIDA, OS MOVIMENTOS DE PRONO E SUPINO",
          "O BRAÇO DO PACIENTE DEVE ESTAR EM ABDUÇÃO A CERCA DE",
          "OS DEDOS DO FISIOTERAPEUTA ESTARÃO EM PINÇA “POLEGAR u0002INDICADOR”;",
          "PERCA A VEZ;",
          "PACIENTE SENTADO OU EM PÉ;",
          "O FISIOTERAPEUTA NÃO TEM POSIÇÃO ESPECÍFICA;",
          "O FISIOTERAPEUTA DEVE PALPAR NO NÍVEL DO CAPÍTULO DO",
          "ANDE UMA CASA;",
          "AO ME PALPAR DEVE-SE PERCEBER SOB OS DEDOS A INTERLINHA",
          "PARA PALPAÇÃO O COTOVELO DO PACIENTE DEVE ESTAR EM",
        ],
        answer: "FLEXÃO DE 90°. Cabeça do Rádio Anatomia Palpatória",
      },
      {
        id: "calouro-98",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "POSIÇÃO DO PACIENTE: SENTADO OU EM PÉ;",
          "O BRAÇO DO PACIENTE DEVE ESTAR EM ABDUÇÃO A CERCA DE",
          "O COTOVELO DO PACIENTE DEVE ESTAR TAMBÉM EM FLEXÃO DE",
          "A PARTIR DA POSIÇÃO DE PINÇA “POLEGAR-INDICADOR” QUE",
          "PRIMEIRAMENTE O FISIOTERAPEUTA DEVE ACHAR A CABEÇA DO",
          "PARA CHEGAR ATÉ MIM, O FISIOTERAPEUTA DESCERÁ A MÃO",
          "AO ME ACHAR, ENCONTRARÁ UM “ESTRANGULAMENTO”;",
          "SOU UMA ESTRUTURA DO RÁDIO;",
          "SOU UMA ESTRUTURA QUE TAMBÉM ESTOU PRESENTE NO",
          "POSIÇÃO DO FISIOTERAPEUTA: EM FRENTE AO PACIENTE.",
        ],
        answer: "Colo do Rádio Anatomia Palpatória",
      },
      {
        id: "calouro-99",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PARA ME ENCONTRAR O FISIOTERAPEUTA PALPARÁ A REGIÃO",
          "PACIENTE COM UMA LEVE ABDUÇÃO DE BRAÇO;",
          "É IMPORTANTE NOTAR QUE A SUPINAÇÃO ME APROXIMA DOS",
          "A PALPAÇÃO É COM O POLEGAR;",
          "PERTENÇO AO RÁDIO;",
          "A PRONAÇÃO ME AFASTA DOS DEDOS DO FISIOTERAPEUTA;",
          "O FISIOTERAPEUTA SE POSICIONARÁ EM FRENTE AO PACIENTE;",
          "SÃO 3 (TRÊS) PALAVRAS;",
          "LOCALIZO-ME PROXIMALMENTE;",
          "PERCA A VEZ.",
        ],
        answer: "Tuberosidade do Rádio Anatomia Palpatória",
      },
      {
        id: "calouro-100",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O FISIOTERAPEUTA SE LOCALIZA EM FRENTE AO PACIENTE;",
          "INICIALMENTE O COTOVELO DO PACIENTE DEVE ESTAR EM LEVE",
          "O FISIOTERAPEUTA PÕE O POLEGAR MEDIALMENTE AO TENDÃO",
          "PACIENTE DEVE, DEPOIS, LEVAR SEU COTOVELO A EXTENSÃO;",
          "OS OUTROS DEDOS DO FISIOTERAPEUTA FICAM ESPALMADOS NA",
          "A OUTRA MÃO DO FISIOTERAPEUTA POSICIONA-SE NA MARGEM",
          "O FISIOTERAPEUTA PORÁ UMA DAS MÃOS SOBRE A FACE",
          "O POLEGAR DO FISIOTERAPEUTA FICARÁ DIANTE DE MIM;",
          "SOU UMA ESTRUTURA QUE SÓ PODE SER ABORDADA",
          "SOU UMA ESTRUTURA DA ULNA.",
        ],
        answer: "Processo Coronoide da Ulna Anatomia Palpatória",
      },
      {
        id: "calouro-101",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O PACIENTE DEVE ESTAR COM O MEMBRO SUPERIOR EM",
          "ATUO NO COMPLEXO DO OMBRO;",
          "O FISIOTERAPEUTA FICARÁ DE FRENTE PARA O PACIENTE;",
          "O PACIENTE DEVE ESTAR AINDA COM O ANTEBRAÇO VOLTADO",
          "O FISIOTERAPEUTA SOLICITARÁ AO PACIENTE PARA FAZER",
          "O PACIENTE PODE ESTAR SENTADO OU EM PÉ;",
          "O PACIENTE DEVE ESTAR TAMBÉM COM O COTOVELO",
          "DEVE-SE COLOCAR RESISTÊNCIA NA PARTE MEDIAL DO BRAÇO;",
          "VOCÊ RECEBERÁ AS CINCO PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA.",
        ],
        answer: "Peitoral Maior Anatomia Palpatória",
      },
      {
        id: "calouro-102",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PACIENTE SENTADO OU EM PÉ;",
          "O PACIENTE DEVE ESTAR COM O MEMBRO SUPERIOR EM",
          "O FISIOTERAPEUTA PEDE PARA QUE O PACIENTE FAÇA",
          "POSSO SER VISTO ENTRE O PEITORAL MAIOR E O GRANDE",
          "NA MINHA VISUALIZAÇÃO SERÃO PERCEBIDAS AS MINHAS",
          "O FISIOTERAPEUTA SE POSICIONARÁ DE FRENTE PARA O",
          "PERTENÇO AO COMPLEXO ARTICULAR DO OMBRO;",
          "SOU VISUALIZADA NO PLANO SAGITAL;",
          "VOCÊ RECEBERÁ AS CINCO PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "SOU RESPONSÁVEL POR MANTER A ESCÁPULA SOB O GRADIL",
        ],
        answer: "COSTAL. Serrátil Anterior Anatomia Palpatória",
      },
      {
        id: "calouro-103",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PACIENTE SENTADO EM CADEIRA SEM ENCOSTO OU EM PÉ;",
          "O OMBRO DO PACIENTE DEVE SER ABDUZIDO A 90º E O",
          "O FISIOTERAPEUTA SE POSICIONA POSTERIORMENTE AO",
          "O FISIOTERAPEUTA SEGURA O MS DO PACIENTE COM UMA DE",
          "O FISIOTERAPEUTA COM SUA OUTRA MÃO DEVE PALPAR A",
          "LOGO ABAIXO DO MENOR DELES SE PALPA O MAIOR.",
          "SÃO DOIS MÚSCULOS;",
          "UMA DAS RESPOSTAS É GRANDE E A OUTRA PEQUENA;",
          "O FISIOTERAPEUTA SE POSICIONARÁ POSTERIORMENTE AO",
          "QUEM ESTÁ LENDO ANDA UMA CASA.",
        ],
        answer: "Redondo Menor e Maior Anatomia Palpatória",
      },
      {
        id: "calouro-104",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "EM MINHA PARTE POSTERIOR INSEREM-SE OS MÚSCULOS LATÍSSIMO",
          "POSIÇÃO DO FISIOTERAPEUTA: EM PÉ EM FRENTE AO PACIENTE",
          "SOU UMA CRISTA;",
          "MINHA PALPAÇÃO DEVE SER REALIZADA COM OS DEDOS BIDIGITAIS;",
          "POSIÇÃO DO PACIENTE: DEITADO EM DECÚBITO DORSAL;",
          "AS MINHAS VARIAÇÕES DE ESPESSURA SÃO PERCEPTÍVEIS,",
          "PARA ME PALAPAR DESLIZE OS SEUS DEDOS DA FRENTE PARA TRÁS",
          "POSSUO TRÊS CURVATURAS: ANTERIOR CÔNCAVA, POSTERIOR",
          "EM MINHA PARTE ANTERIOR DOU INSERÇÃO AOS MÚSUCULOS",
          "TAMBÉM SE PODE PALPAR-ME COM O INDICADOR E O POLEGAR.",
        ],
        answer: "Crista Ilíaca Anatomia Palpatória",
      },
      {
        id: "calouro-105",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "A MÃO PROXIMAL DO FISIOTERAPEUTA POSICIONA-SE NA PARTE",
          "O FISIOTERAPEIUTA SE POSICIONA ATRÁS DO PACIENTE E",
          "A PALPAÇÃO SERÁ REALIZADA NO PLANO ÂNTERO-POSTEROR;",
          "PASSA SUA VEZ;",
          "DURANTE ESSA PALPAÇÃO PODE-SE SENTIR A PULSAÇÃO DA",
          "A MÃO DISTAL DO FISIOTERAPEUTA SE POSICIONA NA PARTE",
          "O PACIENTE FICA EM DECÚBITO LATERAL;",
          "A PERNA AVALIADA É LEVADA EM EXTENSÃO PELO",
          "A PERNA DO PACIENTE FICA EM ABDUÇÃO, SUSTENTADA PELA MÃO",
          "MINHA PALPAÇÃO PODE SER RELAIZADA NUMA ABORDAGME",
        ],
        answer:
          "POSTERIOR, COM O PACIENTE EM DECÚBITO VENTRAL. Cabeça do Fêmur Anatomia Palpatória",
      },
      {
        id: "calouro-106",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "COM O INDICADOR E O DEDO MÉDIO SERÁ REALIZADA MINHA",
          "PACIENTE DEVE ESTAR EM DECÚBITO DORSAL;",
          "A MÃO DISTAL DO FISIOTERAPEUTA FICA POSICIONADA NA REGIÃO",
          "É SOLICITADO QUE O PACIENTE REALIZE UMA CONTRAÇÃO",
          "PODE-SE SOLICITAR QUE O PACIENTE SIMULE UM CHUTE;",
          "PODE-SE PERCEBER O MEU CONTORNO COM A SOLICITAÇÃO DA",
          "EM ALGUNS INDIVÍDUOS ESTOU POSICIONADO MAIS",
          "O QUADRIL DO PACIENTE DEVE ESTAR EM LEVE FLEXÃO;",
          "O JOELHO DO PACIENTE DEVE ESTAR EM EXTENSÃO INCOMPLETA;",
          "O FISIOTERAPEUTA DEVE ESTAR AO LADO DO MEMBRO",
        ],
        answer: "AVALIADO. Reto Femoral Anatomia Palpatória",
      },
      {
        id: "calouro-107",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O TENDÃO DO M. SEMITENDINOO É O MAIS BAIXO E É BEM",
          "OS DEDOS DO FISIOTERAPEUTA SÃO POSTOS NA EXTREMIDADE",
          "O PACIENTE FICA EM DECÚBITO DORSAL;",
          "O JOELHO DO PACIENTE DEVE ESTAR EM FLEXÃO COM O",
          "SOU UAM REUNIÃO DE TENDÕES;",
          "O FISIOTERAPEUTA SOLICITA E RESISTE À FLEXÃO E ROTAÇÃO",
          "O FISIOTERAPEUTA SE POSICIONA AO LADO DO MEMBRO",
          "A MÃO DISTAL DO FISIOTERAPEUTA SE POSICIONA NA FACE",
          "A MINHA PALPAÇÃO É REALIZADA COM OS DEDOS INDICADOR E",
          "O QUADRIL DO PACIENTE FICA SEMIFLETIDO.",
        ],
        answer: "“Pata de Ganso” Anatomia Palpatória",
      },
      {
        id: "calouro-108",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "A PALPAÇÃO DO MEU TENDÃO SE DARÁ ANTERIORMENTE AO",
          "AVANCE UMA CASA;",
          "O PACIENTE ESTARÁ DEITADO EM DECÚBIO DORSAL SOBRE A MACA;",
          "COM UM DEDO INDICADOR, PALPARÁ A REGIÃO LATERAL DO PÉ;",
          "FIQUE UMA RODADA SEM JOGAR;",
          "UMA DAS MÃOS DO FISIOTERAPEUTA DEVERÁ TOCAR TODAS AS",
          "MEU CORPO MUSUCULAR SEGUE AO TENDÃO, POSICIONA-SE SOBRE",
          "O COMANDO PARA MINHA PERCEPÇÃO SERÁ: “LEVANTE OS DEDOS”;",
          "PARA UMA MELHOR VISUALIZAÇÃO PODE-SE SOLICITAR AO PACIENTE",
          "COM A FACE DIGITAL DA MÃO O FISIOTERAPEUTA RESISTIRÁ NA",
        ],
        answer:
          "REGIÃO ANTERIOR DO PÉ AVALIADO. Músculo Extensor Longo dos Dedos Anatomia Palpatória",
      },
      {
        id: "calouro-109",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Conceitos",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O DEDO ANELAR DO FISIOTERAPEUTA DEVERÁ REALIZAR A",
          "NA PALPAÇÃO DEVERÁ SER PERCEPTÍVEL UMA REGIÃO RÍGIDA",
          "O FISIOTERAPEUTA SE POSICIONARÁ AO LADO DO MEMBRO",
          "AVANCE UMA CASA;",
          "QUEM ESTÁ LENDO ANDA UMA CASA;",
          "O PACIENTE DEVE ESTAR COM O PÉ RELAXADO SOBRE UMA",
          "PARA A PALPAÇÃO O FISIOTERAPEUTA DEVE SUSTENTAR O PÉ DO",
          "AO ME ALCANÇAR, PARTINDO DO CALCANHAR, PERCEBERÁ A",
          "PERCA SUA VEZ;",
          "O PÉ DO PACIENTE PODE TAMBÉM ESTAR SOBRE O JOELHO DO",
        ],
        answer: "FISIOTERAPEUTA. Base do Quinto Metatarso",
      },
    ],
  },
  {
    sectionId: "veterano",
    level: "Nível Veterano",
    moduleTitle: "Os Mistérios do Sistema Muscular",
    description: "Aprenda sobre músculos e como eles influenciam o movimento.",
    items: [
      {
        id: "veterano-1",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MEU NOME FAZ REFERÊNCIA A UM SÍMBOLO MATEMÁTICO;",
          "SOU UMA DAS PORÇÕES DE UM MÚSCULO;",
          "INSERÇÃO PROXIMAL: TERÇO EXTERNO DA CLAVÍCULA, PARTE",
          "MINHA AÇÃO PRINCIPAL É FLEXÃO;",
          "PASSE SUA VEZ;",
          "A ARTICULAÇÃO ONDE ESTOU INSERIDO É MUITO INSTÁVEL;",
          "O NERVO AXILAR É O RESPONSÁVEL POR MINHA INERVAÇÃO;",
          "INSERÇÃO DISTAL: TUBEROSIDADE DELTOIDE DO ÚMERO;",
          "ATUO NO EIXO SAGITAL;",
          "MINHAS FIBRAS ESTÃO NA REGIÃO ANTERIOR.",
        ],
        answer: "Músculo Deltóide Anterior",
      },
      {
        id: "veterano-2",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "FAÇO ABDUÇÃO;",
          "FIQUE UMA RODADA SEM JOGAR;",
          "INSERÇÃO DISTAL: TUBEROSIDADE DELTOIDE DO ÚMERO;",
          "MEU NOME FAZ REFERÊNCIA A UM SÍMBOLO MATEMÁTICO;",
          "SOU UMA DAS PORÇÕES DE UM MÚSCULO;",
          "INSERÇÃO PROXIMAL: TERÇO EXTERNO DA CLAVÍCULA, PARTE",
          "ATUO NOS EIXOS SAGITAL E TRANSVERSAL;",
          "A ARTICULAÇÃO ONDE ESTOU INSERIDO É MUITO INSTÁVEL;",
          "OS RAMOS C5 E C6 SÃO RESPONSÁVEIS POR MINHA INERVAÇÃO;",
          "FAÇO TAMBÉM ADUÇÃO HORIZONTAL.",
        ],
        answer: "Músculo Deltóide Médio",
      },
      {
        id: "veterano-3",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PAREÇO UM TRIÂNGULO INVERTIDO;",
          "INSERÇÃO DISTAL: TUBEROSIDADE DELTOIDE DO ÚMERO;",
          "INSERÇÃO PROXIMAL: TERÇO EXTERNO DA CLAVÍCULA, PARTE",
          "MINHA PRINCIPAL AÇÃO É A EXTENÇÃO;",
          "TAMBÉM REALIZO ABDUÇÃO HORIZONTAL;",
          "MINHA INERVAÇÃO PROVÉM DE RAMOS CERVICAIS;",
          "A ARTICULAÇÃO ONDE ESTOU INSERIDO É DO TIPO SINOVIAL;",
          "MINHAS FIBRAS ESTÃO NA REGIÃOPOSTERIOR;",
          "ATUO NOS EIXOS SAGITAL E TRANSVERSAL;",
          "TENHO OUTRAS PORÇÕES, UMA DELAS NA REGIÃO ANTERIOR.",
        ],
        answer: "Músculo Deltóide Posterior",
      },
      {
        id: "veterano-4",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "A PORÇÃO ONDE ESTOU INSERIDO FAZ PARTE DO CÍNGULO",
          "O NERVO PEITORAL LATERAL É QUEM ME INVERVA;",
          "INSERÇÃO DISTAL: TUBÉRCULO MAIOR DO ÚMERO;",
          "ESSA MINHA PORÇÃO FAZ FLEXÃO DO OMBRO;",
          "SOU UM MÚSCULO EM FORMATO DE LEQUE;",
          "INSERÇÃO PROXIMAL: DOIS TERÇOS MEDIAIS DA CLAVÍCULA;",
          "TAMBÉM REALIZO ADUÇÃO HORIZONTAL;",
          "POSSO ATUAR NO PLANO TRANSVERSAL;",
          "TAMBÉM FAÇO ROTAÇÃO INTERNA.",
        ],
        answer: "Músculo Peitoral Maior Porção Clavicular",
      },
      {
        id: "veterano-5",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "FAÇO TAMBÉM ADUÇÃO;",
          "A PORÇÃO ONDE ESTOU INSERIDO FAZ PARTE DO ESQUELETO",
          "O NERVO PEITORAL MEDIAL É QUEM ME INVERVA;",
          "INSERÇÃO DISTAL: TUBÉRCULO MAIOR DO ÚMERO;",
          "ESSA MINHA PORÇÃO FAZ EXTENÇÃO DO OMBRO;",
          "OS RAMOS DE C5 A T1 SÃO OS RESPONSÁVEIS PELA MINHA",
          "TAMBÉM FAÇO ROTAÇÃO INTERNA;",
          "TAMBÉM REALIZO ADUÇÃO HORIZONTAL;",
          "POSSO ATUAR NO PLANO TRANSVERSAL;",
          "INSERÇÃO PROXIMAL: ESTERNO ANTERIOR E CARTILAGEM",
        ],
        answer:
          "DAS 6 PRIMEIRAS COSTELAS. Músculo Peitoral Maior Porção Esternal",
      },
      {
        id: "veterano-6",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "INSERÇÃO PROXIMAL: FOSSA SUPRAESPINHAL;",
          "MEU NERVO PARTE DOS RAMOS C5, C6;",
          "REALIZO ABDUÇÃO DO OMBRO;",
          "INSERÇÃO DISTAL: TUBEROSIDADE MAIOR DO ÚMERO;",
          "FICO SOBRE UMA ESPINHA;",
          "É MUITO COMUM MEU TENDÃO SOFRER IMPACTOS EM",
          "AJUDO NA ROTAÇÃO LATERAL;",
          "TAMBÉM SOU RESPONSÁVEL PELA ESTABILIZAÇÃO DO OMBRO",
          "MINHAS FIBRAS ESTÃO EM PARALELO.",
        ],
        answer: "Músculo Supraespinhal",
      },
      {
        id: "veterano-7",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "LOCALIZO-ME ANTERIORMENTE NO CORPO HUMANO;",
          "O NERVO MUSCULOCUTÂNEO TAMBÉM ME INERVA;",
          "TENHO UMA INSERÇÃO NA ESCÁPULA;",
          "SOU RESPONSÁVEL PELA FLEXÃO DO OMBRO;",
          "INSERÇÃO DISTAL: FACE ÂNTERO-MEDIAL DO ÚMERO;",
          "TAMBÉM POSSO REALIZAR ADUÇÃO DO OMBRO;",
          "INSERÇÃO PROXIMAL: PROCESSO CORACÓIDE DA ESCÁPULA;",
          "MEU NOME FAZ REFERÊNCIA ÀS MINHAS INSERÇÕES;",
          "PASSE SUA VEZ;",
          "AGORA, VOCÊ PODERÁ DAR ATÉ DOIS PALPITES.",
        ],
        answer: "Músculo Coracobraquial",
      },
      {
        id: "veterano-8",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UM MÚSCULO DE TOPOGRAFIA GRANDE;",
          "MEU NERVO É O TORACODORSAL (C6-C8);",
          "COMO SOU GRANDE TAMBÉM TENHO MUITAS AÇÕES NO",
          "INSERÇÃO PROXIMAL: T6-T12, L1-L5, ÚLTIMAS COSTELAS,",
          "ESTOU LOCALIZADO POSTERIORMENTE;",
          "MINHA AÇÃO PRINCIPAL É EXTENSÃO DO OMBRO;",
          "REALIZO TAMBÉM A ROTAÇÃO INTERNA DO OMBRO;",
          "TENHO UM COMPONENTE ADUTOR DENTRE AS MINHAS AÇÕES;",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "INSIRO-ME DISTALMENTE NO ÚMERO, NA FOSSA",
        ],
        answer: "INTERTUBERCULAR. Músculo Latíssimo do Dorso ou Grande Dorsal",
      },
      {
        id: "veterano-9",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO UMA INSERÇÃO NA ESCÁPULA;",
          "SOU UM MÚSCULO DE TOPOGRAFIA PEQUENA;",
          "MINHA PRINCIPAL AÇÃO É ADUÇÃO;",
          "O MEU NERVO PARTE DAS VÉRTEBRAS CERVICAIS;",
          "INSERÇÃO DISTAL: ÚMERO ANTERIOR;",
          "INSERÇÃO PROXIMAL: ESCÁPULA INFERIOR, LATERAL E",
          "MEU NERVO TAMBÉM É O SUBSCAPULAR;",
          "POSSO ATUAR FAZENDO UMA EXTENSÃO DO OMBRO;",
          "POR TER O NOME DE “MAIOR”, REALIZO A ROTAÇÃO INTERNA;",
          "PARA MELHOR ME VISUALIZAR, ME VEJA NA REGIÃO",
        ],
        answer: "POSTERIOR DO CORPO. Músculo Redondo Maior",
      },
      {
        id: "veterano-10",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "INSERÇÃO DISTAL: TUBÉRCULO MAIOR DO ÚMERO;",
          "TENHO UMA INSERÇÃO NA ESCÁPULA;",
          "REALIZO ROTAÇÃO EXTERNA E ABDUÇÃO HORIZONTAL;",
          "NERVO: SUPRAESCAPULAR (C5, C6);",
          "INSERÇÃO PROXIMAL: FOSSA INFRAESPINHAL;",
          "SÓ REALIZO A ROTAÇÃO EXTERNA JUNTO DE MAIS OUTROS 3",
          "SOU IMPORTANTE PARA A ESTABILIZAÇÃO DO ÚMERO SOBRE O",
          "TENHO UM IRMÃO DE NOME PARECIDO SOBRE A ESCÁPULA;",
          "PASSE SUA VEZ;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA.",
        ],
        answer: "Músculo Infraespinhal",
      },
      {
        id: "veterano-11",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "REALIZO A ROTAÇÃO EXTERNA;",
          "INSERÇÃO DISTAL: TUBÉRCULO MAIOR DO ÚMERO;",
          "INSERÇÃO PROXIMAL: BORDA POSTERIOR E LATERAL DA",
          "PASSE SUA VEZ;",
          "A ABDUÇÃO HORIOZNTAL TAMBÉM É DESCRITA COMO MINHA",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "MINHA AÇÃO É SOBRE O OMBRO;",
          "MEU NERVO É O AXILAR;",
          "MINHA AÇÃO É IDÊNTICA AO DO INFRAESPINHAL.",
        ],
        answer: "Músculo Redondo Menor",
      },
      {
        id: "veterano-12",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TOPOGRAFICAMENTE ME ENCONTRO ABAIXO DE UM OSSO;",
          "MEU NERVO É O SUBESCAPULAR;",
          "REALIZO DUAS AÇÕES OPOSTAS;",
          "ESTOU INSERIDO NUM OSSO TIPO PLANO;",
          "INSIRO-ME NO TUBÉRCULO MENOR DO ÚMERO;",
          "PASSE SUA VEZ;",
          "MINHA PRINCIPAL AÇÃO É A ROTAÇÃO INTERNA;",
          "PROXIMALMENTE ME INSIRO EM TODA A SUPERFÍCIE ANTERIOR",
          "AGORA, VOCÊ PODERÁ DAR ATÉ DOIS PALPITES;",
          "FAÇO PARTE DO CHAMADO MANGUITO ROTADOR.",
        ],
        answer: "Músculo Subescapular",
      },
      {
        id: "veterano-13",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO DUAS CABEÇAS;",
          "INSERÇÃO DISTAL: TUBEROSIDADE DO RÁDIO;",
          "SOU MUITO HIPERTROFIADO NAS ACADEMIAS;",
          "COMIGO AS PESSOAS CONSEGUEM BEBER ÁGUA, SE SEGURAR",
          "SOU BIARTICULAR;",
          "FAÇO FLEXÃO;",
          "NO COTOVELO TENHO O PAPEL DE FAZER SUPINAÇÃO;",
          "INSERÇÃO PROXIMAL CABEÇA LONGA: BORDA SUPERIOR DA",
          "INSERÇÃO PROXIMAL CABEÇA CURTA: PROCESSO CORACÓIDE",
          "SOU UM MÚSCULO DE FIBRAS ARRANJADAS EM PARALELO.",
        ],
        answer: "Músculo Bíceps Braquial",
      },
      {
        id: "veterano-14",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O NERVO RADIAL É QUEM MANDA POTENCIAIS DE AÇÃO PARA",
          "INSERÇÃO PROXIMAL PORÇÃO LATERAL: METADE SUPERIOR DO",
          "SOU RESPONSÁVEL PELA EXTENSÃO;",
          "AGORA, VOCÊ PODERÁ DAR ATÉ DOIS PALPITES;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "INSERÇÃO PROXIMAL DA PORÇÃO LONGA: ABAIXO DA",
          "QUANDO FLÁCIDO, SOU BALANÇADO AO SER DADO TCHAU;",
          "INSERÇÃO DISTAL: PROCESSO OLECRIANO DA ULNA;",
          "INSERÇÃO PROXIMAL DA PORÇÃO MEDIAL: DOIS TERÇOS",
          "TENHO TRÊS PORÇÕES.",
        ],
        answer: "Músculo Tríceps Braquial",
      },
      {
        id: "veterano-15",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "DE C5 E C6 PARTE O NERVO QUE ME INERVA;",
          "MEU NOME FAZ REFERÊNCIA ÀS MINHAS INSERÇÕES;",
          "EM POSIÇÃO NEUTRA SOU CAPAZ DE FAZER SUPINAÇÃO;",
          "NÃO TENHO AÇÃO NO OMBRO;",
          "TOPOGRAFICAMENTE ME ENCONTRO NA PAREDE LATERAL DO",
          "INSERÇÃO PROXIMAL: DOIS TERÇOS SUPERIORES DA CRISTA",
          "MINHA AÇÃO PRINCIPAL É A FLEXÃO DO COTOVELO;",
          "EM POSIÇÃO NEUTRA SOUCAPAZ DE FAZER PRONAÇÃO;",
          "INSERÇÃO DISTAL: PROCESSO ESTILÓIDE DO RÁDIO;",
          "MINHA INERVAÇÃO É A MESMA DO TRÍCEPS BRAQUIAL.",
        ],
        answer: "Músculo Braquiorradial",
      },
      {
        id: "veterano-16",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "INSERÇÃO PROXIMAL: METADE ANTERIOR E INFERIOR DO",
          "O NERVO MUSCULOCUTÂNEO É O RESPONSÁVEL PELA MINHA",
          "MINHA FUNÇÃO É DE FLEXÃO;",
          "MEU NOME TEM 8 LETRAS;",
          "NÃO TENHO FUNÇÃO SOBRE A ARTICULAÇÃO GLENOUMERAL;",
          "A ARTICULAÇÃO SOBRE A QUAL SOU ATUANTE É DO TIPO",
          "PASSE SUA VEZ;",
          "INSERÇÃO DISTAL: PROCESSO CORONÓIDE ANTERIOR DA ULNA;",
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "MINHAS FIBRAS ESTÃO DISPOSTAS EM PARALELO.",
        ],
        answer: "Músculo Braquial",
      },
      {
        id: "veterano-17",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO DUAS PORÇÕES;",
          "UMA DAS MINHAS PORÇÕES ESTÁ NO ÚMERO E OUTRA NA",
          "INSIRO-ME NO PONTO MÉDIO LATERAL DO RÁDIO;",
          "MEU SOBRENOME É “REDONDO”;",
          "MINHA FUNÇÃO PRINCIPAL É A PRONAÇÃO;",
          "INTEGRO OS MÚSUCULOS INERVADOS PELO N. MEDIANO;",
          "AUXILIO NA FLEXÃO;",
          "MINHA PORÇÃO UMERAL SE INSERE NO EPICÔNDILO MEDIAL;",
          "CUIDADO PARA NÃO ME CONFUNDIR COM O MÚSCULO DE",
          "PASSE SUA VEZ.",
        ],
        answer: "Músculo Pronador Redondo",
      },
      {
        id: "veterano-18",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PASSE SUA VEZ;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "INSERÇÃO PROXIMAL: QUARTA PARTE INFERIOR DA ULNA",
          "TENHO O FARMATO DE UM SÍMBOLO GEOMÉTRICO;",
          "MINHA AÇÃO DESCREVE MEU NOME;",
          "INERVAÇÃO: INTERÓSSEO ANTERIOR (C8, T1);",
          "MINHA AÇÃO PRINCIPAL É CONTRÁRIA A AÇÃO DO BÍCEPS",
          "SOU UM MÚSCULO PROFUNDO;",
          "AUMENTO A ESTABILIDADE DA ARTICULAÇÃO RADIOULNAR",
          "NSERÇÃO DISTAL: QUARTA PARTE INFERIOR DO RÁDIO",
        ],
        answer: "ANTERIOR. Músculo Pronador Quadrado",
      },
      {
        id: "veterano-19",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "AUXILIO O TRÍCEPS;",
          "MINHA INERVAÇÃO É FEITA PELO RADIAL (C7, C8);",
          "TENHO UMA TOPOGRAFIA PEQUENA;",
          "TENHO O FORMATO TRIANGULAR;",
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "INSERÇÃO DISTAL: OLÉCRANO LATERAL E ULNA POSTERIOR;",
          "A ARTICULAÇÃO ONDE ESTOU INSERIDO É DO TIPO GÍNGLIMO;",
          "SOZINHO EU SERIA INCAPAZ DE MOVIMENTAR MINHA",
          "INSERÇÃO PROXIMAL: EPICÔNDILO POSTEROLATERAL DO",
        ],
        answer: "ÚMERO. Músculo Ancôneo",
      },
      {
        id: "veterano-20",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MEU NOME FAZ REFERÊNCIA AO GESTO DE PEDIR, SUPLICAR;",
          "MINHA INERVAÇÃO É FEITA PELO INTERÓSSEO POSTERIOR (C5,",
          "MINHA AÇÃO É CONTRÁRIA A DOS MÚSCULOS BÍCEPS",
          "MINHA FUNÇÃO É IMPORTANTE NO MOVIMENTO DE",
          "INSERÇÃO PROXIMAL: EPICÔNDILO LATERAL DO ÚMERO E",
          "INSERÇÃO DISTAL: TERÇO SUPERIOR LATERAL DO RÁDIO;",
          "MEU NOME FAZ REFERÊNCIA A MINHA ÇÃO PRINCIPAL;",
          "TENHO INFLUÊNCIA NA ARTICULAÇÃO RADIOULNAR PROXIMAL;",
          "SOU CAPAZ DE DEIXAR O RÁDIO E A ULNA PARALELOS;",
          "MEU NOME TEM 9 (NOVE) LETRAS.",
        ],
        answer: "Músculo Supinador",
      },
      {
        id: "veterano-21",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UM MÚSCULO EXTRÍNSECO;",
          "INSERÇÃO DISTAL: FACE DISTAL DA FALANGE DISTAL DO",
          "TENHO AÇÃO APENAS SOBRE O POLEGAR;",
          "SOU INERVADO PELO NERVO RADIAL (C7, C8);",
          "SOU LONGO;",
          "INSERÇÃO PROXIMAL: METADE DA FACE DORSAL DA ULNA;",
          "POSSUO AÇÃO SOBRE A EXTENSÃO DO PUNHO, QUANDO OS",
          "LOCALIZO-ME NO COMPARTIMENTO POSTERIOR DO",
          "MEU ANTAGONISTA RECEBE UM NOME PARECIDO, SENDO ESTE",
          "MEU SINERGISTA É CHAMADO DE EXTENSOR CURTO.",
        ],
        answer: "Músculo Extensor Longo do Polegar",
      },
      {
        id: "veterano-22",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "EU CRUZO OBLIQUAMENTE NO SENTIDO LATEROMEDIAL DA",
          "SOU INERVADO PELO NERVO FEMORAL;",
          "TENHO ORIGEM NA ESPINHA ILÍACA ÂNTERO-SUPERIOR;",
          "TENHO INSERÇÃO NA BORDA MEDIAL DA TUBEROSIDADE DA",
          "SOU UM FLEXOR DO QUADRIL;",
          "REALIZO ABDUÇÃO DO QUADRIL;",
          "VOLTE 1 (UMA) CASA;",
          "PARTICIPO DA ROTAÇÃO EXTERNA DO QUADRIL;",
          "ESTOU SITUADO NA REGIÃO ANTEROLATERAL DA COXA;",
          "PARTICIPO DA FLEXÃO DE JOELHO.",
        ],
        answer: "Músculo Sartório",
      },
      {
        id: "veterano-23",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UM MÚSCULO DE DUAS PORÇÕES;",
          "POSSO ATUAR TANTO NO MEMBRO INFERIOR COMO NO",
          "SOU INERVADO POR RAMOS DO PLEXO LOMBAR;",
          "VOLTE 2 (DUAS) CASAS;",
          "QUANDO O QUADRIL ESTÁ EM CADEIA CINÉTICA FECHADA, EU",
          "UMA DAS MINHAS PORÇÕES TEM ORIGEM NOS PROCESSOS",
          "UMA DAS MINHAS PORÇÕES TEM ORIGEM NA FOSSA ILÍACA;",
          "TENHO INSERÇÃO NO TROCÂNTER MENOR;",
          "ANDE 1 (UMA CASA);",
          "SOU UM IMPORTANTE FLEXOR DO QUADRIL.",
        ],
        answer: "Músculo Íliopsoas",
      },
      {
        id: "veterano-24",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU COMPOSTO POR 4 MÚSCULOS/VENTRES MUSCULARES;",
          "UM DOS MEUS COMPONENTES TEM AÇÃO NO QUADRIL E NO",
          "SOU UM MÚSCULO BIARTICULAR;",
          "SOU UM POTENTE E VOLUMOSO MÚSCULO SITUADO NOS",
          "COMO UM TODO NÃO ATUO NA FLEXÃO DO QUADRIL;",
          "VOLTE 2 (DUAS);",
          "FAÇO EXTENSÃO DO JOELHO;",
          "SOU INERVADO PELO NERVO FEMORAL;",
          "TENHO INSERÇÃO NA TUBEROSIDADE DA TÍBIA;",
          "ANDE 1 (UMA) CASA.",
        ],
        answer: "Músculo Quadríceps",
      },
      {
        id: "veterano-25",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO ORIGEM NO CORPO DO PÚBIS;",
          "TENHO INSERÇÃO NA REGIÃO MEDIAL DA LINHA ÁSPERA DO",
          "ANDE 1 (UMA) CASA;",
          "SOU INERVADO PELO RAMO ANTERIOR DO NERVO OBTURATÓRIO;",
          "ESTOU SITUADO NA REGIÃO MEDIAL DA COXA;",
          "VOLTE 1 (UMA) CASA;",
          "SOU INERVADO POR RAMOS QUE SAEM DE L2 – L4;",
          "PASSE SUA VEZ;",
          "SOU UM MÚSCULO MONOARTICULAR;",
          "SOU UM IMPORTANTE ADUTOR DO QUADRIL.",
        ],
        answer: "Músculo Adutor Longo",
      },
      {
        id: "veterano-26",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO ORIGEM NO CORPO E RAMO INFERIOR DO PÚBIS;",
          "TENHO INSERÇÃO NA FACE MEDIAL DA PORÇÃO PROXIMAL DO",
          "ATUO NA ADUÇÃO DO QUADRIL;",
          "POSSO PARTICIPAR NA FLEXÃO DO QUADRIL;",
          "TENHO INERVAÇÃO RAMO ANTERIOR DO NERVO OBTURATÓRIO;",
          "TENHA 2 (DOIS) PALPITES;",
          "SOU INERVADO POR RAMOS QUE SAEM DE L2 – L3;",
          "PARTICIPO DA ROTAÇÃO INTERNA DO JOELHO;",
          "ANDE 2 (DUAS);",
          "ESTOU SITUADO NA REGIÃO POSTEROMEDIAL DA COXA.",
        ],
        answer: "Músculo Grácil",
      },
      {
        id: "veterano-27",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU SITUADO NA REGIÃO POSTERIOR DOS MEMBROS",
          "SOU UM MÚSCULO VOLUMOSO;",
          "TENHO ORIGEM NA LINHA GLÚTEA, POSTERIORMENTE AO ÍLIO;",
          "TENHO INSERÇÃO NA TUBEROSIDADE GLÚTEA DO FÊMUR;",
          "SOU INERVADO PELO NERVO GLÚTEO INFERIOR;",
          "VOLTE 1 (UMA) CASA;",
          "SOU UM PODEROSO EXTENSOR DO QUADRIL;",
          "REALIZO ROTAÇÃO EXTERNA DO QUADRIL;",
          "PASSE SUA VEZ;",
          "COM OS MEMBROS INFERIORES EM CADEIA CINÉTICA",
        ],
        answer:
          "FECHADA, EU PARTICIPO NA EXTENSÃO DO TRONCO. Músculo Glúteo Máximo",
      },
      {
        id: "veterano-28",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU COBERTO PELO M. GLÚTEO MÁXIMO;",
          "PASSE SUA VEZ;",
          "SOU INERVADO PELO NERVO GLÚTEO SUPERIOR;",
          "REALIZO ABDUÇÃO DO QUADRIL;",
          "VOLTE 1 (UMA) CASA;",
          "TENHO INSERÇÃO NO TROCÂNTER MAIOR;",
          "REALIZO ROTAÇÃO MEDIAL DO QUADRIL;",
          "SOU UM IMPORTANTE MÚSCULO NA DEAMBULAÇÃO E NA",
          "ANDE 1 (UMA) CASA;",
          "TENHO ORIGEM NO ÍLIO, ENTRE AS LINHAS GLÚTEAS POSTERIOR E",
        ],
        answer: "ANTERIOR. Músculo Glúteo Médio",
      },
      {
        id: "veterano-29",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O M. GLÚTEO MÁXIMO ESTÁ ME COBRINDO;",
          "SOU INERVADO PELO NERVO GLÚTEO SUPERIOR;",
          "ESTOU SITUADO NA REGIÃO GLÚTEA;",
          "REALIZO ABDUÇÃO DO QUADRIL;",
          "VOLTE 1 (UMA) CASA;",
          "TENHO INSERÇÃO NO TROCÂNTER MAIOR;",
          "REALIZO ROTAÇÃO INTERNA DO QUADRIL;",
          "SOU UM IMPORTANTE MÚSCULO NA DEAMBULAÇÃO;",
          "ANDE 1 (UMA) CASA;",
          "TENHO ORIGEM NO ÍLIO, ENTRE AS LINHAS GLÚTEAS ANTERIOR",
        ],
        answer: "E INFERIOR. Músculo Glúteo Mínimo",
      },
      {
        id: "veterano-30",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO ORIGEM NA FACE PÉLVICA DO SACRO (2ª À 4ª",
          "REALIZO ROTAÇÃO EXTERNA DO QUADRIL;",
          "SE ERRAR, TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "ESTOU SITUADO NA REGIÃO GLÚTEA;",
          "ANDE 1 (UMA) CASA;",
          "COMPONHO UM CONJUNTO DE MÚSCULOS CURTOS DA REGIÃO",
          "POR CIMA DE MIM ESTÁ O M. GLÚTEO MÁXIMO;",
          "PASSE SUA VEZ;",
          "TENHO COMO INSERÇÃO O TROCÂNTER MAIOR DO FÊMUR;",
          "MINHA INERVAÇÃO VEM DA 2ª VERTEBRA SACRAL.",
        ],
        answer: "Músculo Piriforme",
      },
      {
        id: "veterano-31",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU SITUADO NA PARTE ÂNTERO-LATERAL E PROXIMAL DA",
          "SOU INERVADO PELO NERVO GLÚTEO SUPERIOR;",
          "TENHO PAPEL SINÉRGICO JUNTAMENTE COM O M. ÍLIOPSOAS;",
          "ANDE 1 (UMA) CASA;",
          "TENHO INSERÇÃO NO TRATO ÍLIO- TIBIAL;",
          "PRINCIPALMENTE, SOU UM FLEXOR DO QUADRIL;",
          "ATUO NA ROTAÇÃO INTERNA DO QUADRIL;",
          "TENHO ORIGEM NA ESPINHA ILÍACA ÂNTERO-SUPERIOR E LÁBIO",
          "TENHO INERVAÇÃO DE L4 – S1;",
          "VOLTE 2 (DUAS) CASAS.",
        ],
        answer: "Músculo Tensor da Fáscia Lata",
      },
      {
        id: "veterano-32",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU COMPOSTO POR DUAS PORÇÕES (PORÇÃO LONGA E",
          "MINHA PORÇÃO LONGA TEM ORIGEM NA TUBEROSIDADE",
          "TENHO INSERÇÃO NA CABEÇA DA FÍBULA;",
          "ANDE 2 (DUAS) CASAS;",
          "MINHA PORÇÃO CURTA TEM ORIGEM NA LINHA ÁSPERA DO",
          "SOU INERVADO PELO NERVO ISQUIÁTICO;",
          "QUANDO ATUO NA ARTICULAÇÃO DO QUADRIL EU FAÇO A SUA",
          "QUANDO ATUO NA ARTICULAÇÃO DO JOELHO EU FAÇO A SUA",
          "VOLTE 3 (TRÊS) CASAS;",
          "AJUDO O M. GLÚTEO MÁXIMO NA EXTENSÃO DO TRONCO",
        ],
        answer:
          "QUANDO O JOELHO E O QUADRIL ESTÃO FIXADOS. Músculo Bíceps Femoral",
      },
      {
        id: "veterano-33",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOMOS DOIS MÚSCULOS QUE ATUAMOS JUNTOS;",
          "MINHAS ORIGENS ESTÃO NA TUBEROSIDADE ISQUIÁTICA;",
          "UMA DAS MINHAS INSERÇÕES ESTÁ NA FACE MEDIAL E",
          "ANDE 1 (UMA) CASA;",
          "POSSUO A MESMA INERVAÇÃO DO M. BÍCEPS FEMORAL;",
          "SOU UM MÚSCULO BIARTICULAR;",
          "VOLTE 2 (DUAS) CASAS;",
          "ESTOU SITUADO NA REGIÃO POSTERIOR DA COXA;",
          "QUANDO ATUO NA ARTICULAÇÃO DO QUADRIL EU FAÇO A SUA",
          "QUANDO ATUO NA ARTICULAÇÃO DO JOELHO EU FAÇO A SUA",
        ],
        answer:
          "POSTEROMEDIAL DA TÍBIA. Músculos Semitendinoso e Semimembranoso",
      },
      {
        id: "veterano-34",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "EU OCUPO UMA POSIÇÃO LATERAL E PARALELA À TÍBIA;",
          "ATUO NO TORNOZELO, MAS QUANDO ESTE ESTÁ FIXO, EU",
          "TENHO ORIGEM NO CÔNDILO LATERAL E PROXIMAL DA TÍBIA;",
          "ANDE 1 (UMA) CASA;",
          "MINHA INSERÇÃO ESTÁ NA BASE DO 1ª METATÁRSICO E FACE",
          "SOU INERVADO PELO NERVO FIBULAR PROFUNDO;",
          "REALIZO A DORSOFLEXÃO PLANTAR;",
          "QUEM ESTÁ LENDO ANDA AGORA 1 (UMA) CASA;",
          "REALIZO A INVERSÃO DO PÉ;",
          "MEU TENDÃO DE INSERÇÃO, AO NÍVEL DO TORNOZELO,",
        ],
        answer: "DESVIA-SE MEDIALMENTE. Músculo Tibial Anterior",
      },
      {
        id: "veterano-35",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU SITUADO NA REGIÃO POSTERIOR DA PERNA;",
          "POSSUO 2 (DOIS) VENTRES, UM LATERAL E UM MEDIAL;",
          "A ORIGEM DO MEU VENTRE LATERAL ESTÁ NO CÔNDILO LATERAL",
          "A ORIGEM NO MEU VENTRE MEDIAL ESTÁ LOGO ACIMA DO",
          "SOU INERVADO PELO NERVO TIBIAL;",
          "SOU UM PODEROSO FLEXOR PLANTAR;",
          "CRUZO, POSTERIORMENTE, A ARTICULAÇÃO DO JOELHO;",
          "POSSO ATUAR NA ARTICULAÇÃO DO JOELHO REALIZANDO A SUA",
          "MINHA INSERÇÃO É NO TENDÃO CALCANEAR QUE SE FIXA NA",
          "JUNTAMENTE COM O M. SÓLEO EU COMPONHO O TRÍCEPS",
        ],
        answer: "SURAL. Músculo Gastrocnêmio",
      },
      {
        id: "veterano-36",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "ESTOU NA REGIÃO POSTERIOR DA PERNA;",
          "REALIZO A FLEXÃO PLANTAR;",
          "MINHA INERVAÇÃO É A MESMA DO M. GASTROCNÊMIO;",
          "MINHA ORIGEM É NA PARTE PROXIMAL E POSTERIOR DA",
          "SOU INERVADO PELO NERVO TIBIAL;",
          "ANDE 2 (DUAS) CASAS;",
          "MINHA INSERÇÃO É NO TENDÃO DO CALCÂNEO, QUE SE",
          "COMPONHO O TRÍCEPS SURAL;",
          "ATUO NA ARTICULAÇÃO DO TORNOZELO.",
        ],
        answer: "Músculo Sóleo",
      },
      {
        id: "veterano-37",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO ORIGEM NO 2/3 PROXIMAIS DA FACE POSTERIOR DA",
          "VOLTE 3 (TRÊS) CASAS;",
          "ESTOU SITUADO NA CAMADA PROFUNDA DOS MÚSCULOS DA",
          "MEU TENDÃO DE INSERÇÃO PASSA POR UM ESPESSAMENTO",
          "SOU INERVADO PELO NERVO TIBIAL;",
          "VOLTE 2 (DUAS) CASAS;",
          "MINHA INSERÇÃO É NA TUBEROSIDADE DO NAVICULAR, TODOS",
          "REALIZO A FLEXÃO PLANTAR;",
          "SOU O MAIS IMPORTANTE MÚSCULO DA INVERSÃO DO PÉ;",
          "TERÁ A CHANCE DE DAR 2 PALPITES.",
        ],
        answer: "Músculo Tibial Posterior",
      },
      {
        id: "veterano-38",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MINHA ORIGEM ESTÁ NA REGIÃO PROXIMAL DA FÍBULA,",
          "ANDE 2 (DUAS) CASAS;",
          "REALIZO A EXTENSÃO DOS DEDOS;",
          "PARTICIPO DA EVERSÃO DO PÉ;",
          "VOLTE 1 (UMA) CASA;",
          "MINHAS MESMAS AÇÕES SÃO REALIZADAS PELO M. FIBULAR",
          "SOU INERVADO PELO NERVO PROFUNDO;",
          "ESTOU NA REGIÃO DORSAL DO PÉ;",
          "POSSUO 4 TENDÕES , UM PARA CADA UM DOS 4 DEDOS",
          "ESCOLHA ALGUÉM PARA NÃO PARTICIPAR DESSA RODADA.",
        ],
        answer: "Músculo Extensor Longo dos Dedos",
      },
      {
        id: "veterano-39",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOMOS DOIS MÚSCULOS DE MESMA AÇÃO;",
          "TENHO ORIGEM NA CABEÇA DA FÍBULA E NOS 2/3 PROXIMAIS DA",
          "AGORA, VOCÊ PODERÁ DAR ATÉ DOIS PALPITES;",
          "NOSSOS TENDÕES DE INSERÇÃO SÃO MANTIDOS EM POSIÇÃO POR",
          "REALIZAMOS A EVERSÃO DO PÉ;",
          "AUXILIAMOS NA FLEXÃO PLANTAR;",
          "UMA DAS MINHAS ORIGENS É NOS 2/3 DISTAIS DA FÍBULA;",
          "UMA DAS MINHAS INSERÇÕES É NA BASE DO 5ª METATÁRSICO;",
          "MINHA INERVAÇÃO É REALIZADA PELO NERVO FIBULAR",
          "ANDE 2 (DUAS) CASAS.",
        ],
        answer: "Músculos Fibular Longo e Curto",
      },
      {
        id: "veterano-40",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ANDE 1 (UMA) CASA;",
          "ESTOU SITUADO NA CAMADA PROFUNDA DOS MÚSCULOS DA",
          "SOU INERVADO PELO NERVO TIBIAL;",
          "VOLTE 2 (DUAS) CASAS;",
          "MINHA ORIGEM ESTÁ NOS 2/3 INFERIORES, POSTERIORMENTE,",
          "REALIZO A FLEXÃO DA FALANGE DISTAL DO HÁLUX;",
          "MINHA INSERÇÃO ESTÁ LOCALIZADA NA BASE DA FALANGE",
          "TERÁ A CHANCE DE DAR 2 PALPITES;",
          "ESTOU SITUADO NA REGIÃO DORSAL DO PÉ;",
          "TENHO A MESMA INERVAÇÃO DO M. TIBIAL POSTERIOR.",
        ],
        answer: "Músculo Flexor Longo do Hálux",
      },
      {
        id: "veterano-41",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Muscular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ESTOU SITUADO ENTRE OS MÚSCULOS TIBIAL ANTERIOR E",
          "MEU TENDÃO DE INSERÇÃO CRUZA MEDIALMENTE O DORSO",
          "SOU INERVADO PELO NERVO FIBULAR PROFUNDO;",
          "SOU UM MÚSCULO QUE REALIZA A EXTENSÃO DO HÁLUX;",
          "AUXILIO NA DORSOFLEXÃO DO PÉ;",
          "MINHA ORIGEM ESTÁ NO TERÇO MÉDIO DA FÍBULA E",
          "TENHO COMO PONTO DE INSERÇÃO A BASE DA FALANGE",
          "ANDE 2 (DUAS) CASAS;",
          "ESTOU SITUADO NA REGIÃO DORSAL DO PÉ;",
          "VOLTE UMA (1) CASA.",
        ],
        answer: "Músculo Extensor Longo do Hálux",
      },
    ],
  },
  {
    sectionId: "perfisio",
    level: "Nível PerFisio",
    moduleTitle: "Os Reinos do Sistema Articular",
    description:
      "Estude articulações e como elas influenciam estabilidade e mobilidade.",
    items: [
      {
        id: "perfisio-42",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO DO TIPO ESFERÓIDE;",
          "SOU UMA DAS MAIORES E MAIS COMPLEXAS ARTICULAÇÕES",
          "POSSUO MOVIMENTOS NOS TRÊS PLANOS ANATÔMICOS:",
          "POSSUO DIFERENTES MOVIMENTOS EM TODOS OS TRÊS",
          "POSSO REALIZAR MOVIMENTO DE CIRCUNDAÇÃO;",
          "QUATRO OSSOS FAZEM PARTE DA MINHA ESTRUTURA;",
          "DEZESSEIS MÚSCULOS ESTÃO ENVOLVIDOS NO COMPLEXO",
          "VOLTE 1 (UMA) CASA;",
          "CINCO OUTRAS ARTICULAÇÕES ESTÃO ENVOLVIDAS NO",
          "REALIZO ROTAÇÕES INTERNA E EXTERNA UTILIZANDO",
        ],
        answer: "“MÚSCULOS REDONDOS”. Articulação do Ombro",
      },
      {
        id: "perfisio-43",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU FUNDAMENTAL NA LIGAÇÃO DO MEMBRO SUPERIOR AO",
          "SOU UMA ARTICULAÇÃO DO TIPO SELAR;",
          "FAÇO PARTE DO COMPLEXO DO OMBRO E MEU NOME NÃO FAZ",
          "EXISTE UM DISCO ENTRE OS DOIS OSSOS QUE ME COMPÕEM;",
          "A CÁPSULA QUE ME REVESTE É MAIS ESPESSA ANTERIORMENTE",
          "CONSIGO REALIZAR CINCO MOVIMENTOS DIFERENTES COM TRÊS",
          "REALIZO OS MOVIMENTOS DE ELEVAÇÃO, DEPRESSÃO,",
          "SOU SUSTENTADA POR QUATRO LIGAMENTOS;",
          "PASSE SUA VEZ;",
          "VOLTE 1 (UMA) CASA.",
        ],
        answer: "Articulação Esternoclavicular",
      },
      {
        id: "perfisio-44",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO ARTRODIAL, “DESLIZANTE”;",
          "ESTOU ENVOLVIDA NA MAIOR PARTE DE MOVIMENTOS",
          "ANDE 1 (UMA) CASA;",
          "POSSO REALIZAR MOVIMENTOS DE ELEVAÇÃO, DEPRESSÃO,",
          "3 (TRÊS) LIGAMENTOS FAZEM PARTE DA MINHA ESTABILIZAÇÃO; 2",
          "FIQUE 1 (UMA) RODADA SEM JOGAR;",
          "ATUO MAIS EM MOVIMENTOS DE BAIXA AMPLITUDE;",
          "VOLTE 2 (DUAS) CASAS;",
          "FAÇO PARTE DA ARTICULAÇÃO DO OMBRO E MEU NOME NÃO",
          "PASSE SUA VEZ.",
        ],
        answer: "Articulação Acromioclavicular",
      },
      {
        id: "perfisio-45",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "FAÇO PARTE DO COMPLEXO ARTICULAR DO OMBRO E MEU NOME",
          "SOU FORMADA POR UM SÓ OSSO E UM CONJUNTO DE",
          "SOU CONSIDERADA UMA ARTICULAÇÃO FALSA;",
          "SOU CONSIDERADA UMA ARTICULAÇÃO PURAMENTE",
          "NÃO APRESENTO CARACTERÍSTICAS COMUNS ÀS DEMAIS",
          "NÃO SOU UNIDA POR TECIDOS CARTILAGINOSOS OU SINOVIAIS;",
          "PASSE SUA VEZ;",
          "FACILITO A REALIZAÇÃO DE MOVIMENTOS POR MEIO DO",
          "VOLTE 1 (UMA) CASA;",
          "PARTICIPO DA ESTABILIZAÇÃO DO OMBRO E NO",
        ],
        answer:
          "POSICIONAMENTO DE UMA DE SUAS OUTRAS ARTICULAÇÕES. Articulação Escapulotorácica",
      },
      {
        id: "perfisio-46",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO ESFEROIDE;",
          "SOU A ARTICULAÇÃO COM MAIOR MOBILIDADE DO CORPO",
          "POSSUO POUCA ESTABILIZAÇÃO ÓSSEA;",
          "GRANDE PARTE DA MINHA ESTABILIZAÇÃO VEM POR PARTE DE",
          "A REGIÃO CÔNCAVA DA MINHA ARTICULAÇÃO CONSISTE DE",
          "PASSE SUA VEZ;",
          "O TAMANHO DAS REGIÕES CÔNCAVA E CONVEXA DA MINHA",
          "A DESPROPORÇÃO ENTRE REGIÕES CÔNCAVA E CONVEXA DA",
          "VOLTE 2 (DUAS) CASAS;",
          "A SUPERFÍCIE ARTICULAR É OTIMIZADA POR UMA ESTRUTURA",
        ],
        answer: "QUE PODE SER CHAMADA DE “LABRUM”. Articulação Glenoumeral",
      },
      {
        id: "perfisio-47",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO FORMADA POR TRÊS OSSOS LONGOS;",
          "SOU UMA ARTICULAÇÃO DO TIPO GÍNGLIMO COM 1 (UM) GRAU",
          "SOU UMA ARTICULAÇÃO ESTÁVEL;",
          "PASSE A SUA VEZ;",
          "MINHA ESTRUTURA POSSUI 2 (DOIS) LIGAMENTOS COLATERAIS;",
          "ANDE 2 (DUAS) CASAS;",
          "APRESENTO UM ÂNGULO DE CARREGAMENTO;",
          "2 (DOIS) DOS 3 (TRÊS) OSSOS ENVOLVIDOS NA ARTICULAÇÃO SÃO",
          "O MOVIMENTO DE FLEXÃO DE UMA DAS MINHAS ARTICULAÇÕES",
          "TENISTAS COSTUMAM SOFRER COM UM ACOMETIMENTO",
        ],
        answer:
          "DENTRO DA MINHA ESTRUTURA CHAMADO DE “EPICONDILITE LATERAL.” Articulação do Cotovelo",
      },
      {
        id: "perfisio-48",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO CONDILÓIDE/BIAXIAL;",
          "POSSUO DUAS ARTICULAÇÕES NO MEU COMPLEXO;",
          "APRESENTO DOIS GRAUS DE LIBERDADE, COM MOVIMENTOS DE",
          "OS MOVIMENTOS DE ABDUÇÃO E ADUÇÃO QUE REALIZO PODEM",
          "AS ARTICULAÇÕES DO MEU COMPLEXO SÃO FORMADAS POR",
          "PASSE A SUA VEZ;",
          "VOLTE 2 (DUAS) CASAS;",
          "TEM GRANDE PROXIMIDADE A UM RETINÁCULO DE MÚSCULOS",
          "SOLICITE MAIS 1 (UMA) DICA;",
          "POSSUO UM DOS MENORES OSSOS DO CORPO HUMANO, QUE",
        ],
        answer:
          "FLEXORES. SE ARTICULA SOMENTE COM OUTRO, TAMBÉM PEQUENO. Articulação do Punho",
      },
      {
        id: "perfisio-49",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "POSSUO ESTRUTURAS CHAMADAS DE QUIRODÁCTILOS;",
          "POSSUO TRÊS PEQUENAS ARTICULAÇÕES DISTINTAS;",
          "UMA DAS MINHAS PEQUENAS ARTICULAÇÕES É DO TIPO",
          "AS ARTICULAÇÕES MAIS DISTAIS DO MEU COMPLEXO PODEM",
          "ALGUNS DOS MÚSCULOS ENVOLVIDOS NOS MEUS",
          "VOLTE 2 (DUAS) CASAS;",
          "SOLICITE MAIS 2 (DUAS) DICAS;",
          "UMA DAS MINHAS ARTICULAÇÕES SE DIVIDE EM PROXIMAL E",
          "SOU LEMBRADA QUANDO MENCIONAM O PEIXE “CARPA”;",
          "DEIXE UM COLEGA SEM JOGAR POR 1 (UMA) RODADA.",
        ],
        answer: "Articulação da Mão",
      },
      {
        id: "perfisio-50",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "TENHO BOA COAPTAÇÃO ARTICULAR;",
          "SOU SINOVIAL DO TIPO ESFERÓIDE;",
          "ENTRE AS DUAS ESTRUTURAS DO QUAL SOU FORMADO, HÁ",
          "POSTERIORMENTE A MIM HÁ O LIGAMENTO ISQUIOFEMORAL;",
          "O LIGAMENTO DA CABEÇA DO FÊMUR UNE AS DUAS",
          "UM DOS MEUS COMPONENTES TEM UM ÂNGULO DE TORÇÃO;",
          "SOU UMA ARTICULAÇÃO TRIAXIAL;",
          "VOLTE 1 (UMA) CASA;",
          "SOU UMA ARTICULAÇÃO PROXIMAL DO MEMBRO INFERIOR;",
          "OS LIGAMENTOS QUE ESTÃO ANTERIORMENTE A MIM ESTÃO",
        ],
        answer: "DISPOSTOS EM “Z”. Articulação Femoroacetabular",
      },
      {
        id: "perfisio-51",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU UMA ARTICULAÇÃO MÓVEL, MAS COM RESTRIÇÕES;",
          "FAÇO FLEXÃO E EXTENSÃO, PRIMARIAMENTE;",
          "QUANDO FLETIDO, TAMBÉM FAÇO ROTAÇÃO MEDIAL E",
          "POSSUO UMA CERTA INCONGRUÊNCIA NAS SUPERFÍCIES",
          "HÁ DUAS ESTRUTURAS, SEMELHANTES A DISCOS SEPARANDO",
          "PASSE A VEZ;",
          "DOIS LIGAMENTOS ME “CRUZAM” (ANTERIOR E POSTERIOR);",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO CONDILAR;",
          "DOIS LIGAMENTOS COLATERAIS PASSAM AO MEU LADO;",
          "UM DOS MEUS COMPONENTES PODE SER CONSIDERADO",
        ],
        answer: "COMO UM “TRONCO DE CONE DEITADO”. Articulação Femorotibial",
      },
      {
        id: "perfisio-52",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "UM DOS MEUS COMPONENTES É UM OSSO SESAMOÍDE;",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO PLANA;",
          "UM DOS MEUS COMPONENTES PROTEGE UM TENDÃO;",
          "DICA: “COMO UMA CORDA EM UM POLIA”, ESSA É A",
          "UM COMPONENTE POSSUI ÁPICE E BASE;",
          "SOU MUITO ACOMETIDO POR UMA SÍNDROME,",
          "POSSUO O “MECANISMO DE TRAVAMENTO”;",
          "ACIMA DE MIM HÁ UMA BURSA, CONHECIDA COMO “FUNDO",
          "O NOME DE UM DOS MEUS COMPONENTES É SEMELHANTE",
          "PASSA SUA VEZ.",
        ],
        answer: "Articulação Patelofemoral",
      },
      {
        id: "perfisio-53",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PEÇA MAIS DUAS DICAS;",
          "TENHO UMA ARTICULAÇÃO PROXIMAL E UMA DISTAL;",
          "A MINHA ARTICULAÇÃO PROXIMAL É DO TIPO PLANA;",
          "SOU CONSTITUÍDO POR DOIS OSSOS LONGOS;",
          "HÁ UMA MEMBRANA INTERÓSSEA INTERLIGANDO OS DOIS",
          "A MINHA ARTICULAÇÃO DISTAL É DO TIPO SINDESMOSE;",
          "PINÇA BIMALEOLAR É O NOME DA ESTRUTURA FORMADA POR",
          "PASSE SUA VEZ;",
          "OS DOIS COMPONENTES ÓSSEOS DESSA ARTICULAÇÃO",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA.",
        ],
        answer: "Articulação Tibiofibular",
      },
      {
        id: "perfisio-54",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU A ARTICULAÇÃO DO TORNOZELO, PROPRIAMENTE DITA;",
          "VOLTE 2(DUAS) CASAS;",
          "ASSEMELHO-ME A UMA CHAVE INGLESA;",
          "REALIZO FLEXÃO E EXTENSÃO, DENOMINADOS COMUMENTE",
          "MEDIALMENTE HÁ O LIGAMENTO QUE POSSUI O NOME DE UM",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO GÍNGLIMO;",
          "LATERALMENTE POSSUO OS LIGAMENTOS: TALOFIBULAR",
          "SOU CONSTITUÍDO DE 3(TRÊS) OSSOS DO MEMBRO INFERIOR;",
          "MINHA POSIÇÃO MAIS ESTÁVEL É A DE DORSIFLEXÃO;",
          "SOU UMA ARTICULAÇÃO DISTAL.",
        ],
        answer: "Articulação Talocrural",
      },
      {
        id: "perfisio-55",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU COMPOSTO PELO TÁLUS E O CALCÂNEO;",
          "SOU UNIAXIAL;",
          "TENHO UM ALINHAMENTO OBLÍQUO;",
          "ENTRE A MINHA ARTICULAÇÃO HÁ O SEIO DO TARSO (TÚNEL",
          "POR MIM PASSA O EIXO DE HENKÉ;",
          "FAÇO DOMINANTEMENTE PRONAÇÃO-SUPINAÇÃO;",
          "PASSE SUA VEZ;",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO PLANA;",
          "ANDE 1 (UMA) CASA;",
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR.",
        ],
        answer: "Articulação Subtalar",
      },
      {
        id: "perfisio-56",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU SINOVIAL DO TIPO PLANA;",
          "POSSUO UMA FORMA DENTEADA;",
          "SOU CONSTITUÍDO PELA BASE DOS METATARSAIS E DOIS OSSOS",
          "ESCOLHA UM JOGADOR PARA FICAR UMA RODADA SEM",
          "SOU CONHECIDO TAMBÉM COMO ARTICULAÇÃO DE LISFRANC;",
          "SOU UMA ARTICULAÇÃO DO PÉ;",
          "SOU FORMADA PELA BASE DOS METATARSAIS E PELA",
          "O 1° METATARSAL ARTICULA-SE COM O CUNEIFORME MEDIAL;",
          "TENHO 15 LETRAS;",
          "O 3° METATARSAL ARTICULA-SE COM O CUNEIFORME",
        ],
        answer: "LATERAL. Articulação Tarsometatarsal",
      },
      {
        id: "perfisio-57",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "FIQUE 2 (DUAS) RODADAS SEM JOGAR;",
          "SOU UMA ARTICULAÇÃO SINOVIAL;",
          "PASSE SUA VEZ;",
          "FAÇO FLEXÃO E EXTENSÃO;",
          "FAÇO ABDUÇÃO E ADUÇÃO;",
          "MINHAS SUPERFÍCIES TEM FORMATO ELIPSÓIDE;",
          "ANDE 2 (DUAS) CASAS;",
          "SOU SINOVIAL, MAS DO TIPO CONDILAR;",
          "FAÇO 4 (QUATRO) MOVIMENTOS;",
          "SOU FORMADO PELOS METATARSOS E FALANGES PROXIMAIS.",
        ],
        answer: "Articulação Metatarsofalangeana",
      },
      {
        id: "perfisio-58",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "POSSUO UMA ARTICULAÇÃO DISTAL E OUTRA PROXIMAL;",
          "SOLICITE MAIS 2 (DUAS) DICAS;",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO GÍNGLIMO;",
          "ESTOU PRESENTE DUAS VEZES EM CADA FALANGE;",
          "SOMENTE NO HÁLUX É QUE ESTOU PRESENTE SÓ UMA VEZ;",
          "SOU IMPORTANTE PARA A FUNÇÃO DE PEGAR;",
          "SOU MUITO AFETADA EM DIGITADORES;",
          "SOU DE PEQUENO PORTE;",
          "SOMO 14 LETRAS;",
          "SOU ESSENCIAL EM TRABALHOS MANUAIS.",
        ],
        answer: "Articulação Interfalangeana",
      },
      {
        id: "perfisio-59",
        title: "Responda a pergunta com base nas dicas abaixo!",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PASSE SUA VEZ;",
          "PERMITO OS MOVIMENTOS DE ABAIXAMENTO, ELEVAÇÃO,",
          "ARTICULO A FOSSA MANDIBULAR AO TUBÉRCULO ARTICULAR",
          "O LIGAMENTO TEMPOROMANDIBULAR ESTA ASSOCIADO A",
          "APRESENTO UM DISCO ARTICULAR;",
          "PARTE DO MÚSCULO PTERIGOIDE LATERAL SE INSERE NA",
          "MEU DISCO SE INSERE FIRMEMENTE NO COLO DA MANDÍBULA;",
          "FAÇO PARTE DO ESQUELETO AXIAL;",
          "POSSO SER CONSIDERADA UMA JUNTURA SINOVIAL",
          "MEU NOME É COMUMENTE ABREVIADO EM 3 LETRAS.",
        ],
        answer: "Articulação Temporomandibular",
      },
      {
        id: "perfisio-60",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "OS LIGAMENTOS LONGITUDINAL ANTERIOR E LONGITUDINAL",
          "SOU CLASSIFICADA COMO UMA SÍNFISE DE ANFIARTROSE;",
          "MEU DISCO POSSUI UM NÚCLEO PULPOSO RODEADO POR UM",
          "O MEU MOVIMENTO É PEQUENO, MAS SOMADA A OUTRAS",
          "PERTENÇO AO ESQUELETO AXIAL;",
          "AGORA VOCÊ PODERÁ DAR ATÉ DOIS PALPITES;",
          "POSSUO UM LIGAMENTO CHAMADO FLAVO, OU AMARELO,",
          "MEU DESALINHAMENTO PODE CAUSAR UM PINÇAMENTO DE",
          "EU ATUO PRINCIPALMENTE NA ABSORÇÃO DE IMPACTO E",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ.",
        ],
        answer: "Articulação Intercorpos Vertebrais",
      },
      {
        id: "perfisio-61",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "SOU CLASSIFICADA COMO DIARTRODIAL DO TIPO DESLIZANTE",
          "LIGO DOIS OSSOS SEMELHANTES;",
          "DEVIDO A ANGULAÇÃO DAS MINHAS ESTRUTURAS A NÍVEL",
          "MINHA SUPERFÍCIE ARTICULAR PODE SER 45°, 60° OU 90°;",
          "O CORPO HUMANO POSSUI 24 PARES DE ARTICULAÇÕES",
          "VOCÊ RECEBERÁ AS 5 PRIMEIRAS DICAS DE UMA SÓ VEZ;",
          "PASSE SUA VEZ;",
          "POSSO LIMITAR A INCLINAÇÃO LATERAL SE ESTIVER AO NÍVEL",
          "PERTENÇO AO ESQUELETO AXIAL;",
          "ALGUMAS DE MIM BLOQUEIAM A ROTAÇÃO AXIAL A NÍVEL",
        ],
        answer: "LOMBAR. Articulação Zigoapofisária ou Interfacetária",
      },
      {
        id: "perfisio-62",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "OS MÚSCULOS RETO ANTERIOR DA CABEÇA E RETO LATERAL DA",
          "UMA DE MINHAS MEMBRANAS É PERFURADA PELO NERVO",
          "ARTICULO A PRIMEIRA VÉRTEBRA CERVIAL AO CRÂNIO;",
          "O MÚSCULO SUBOCCIPITAL RETO POSTERIOR DA CABEÇA SE",
          "SOU DELIMITADA PELAS MEMBRANAS ATLANTO-OCCIPITAL",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO TIPO CONDILAR",
          "TENHO VÁRIOS LIGAMENTOS SUBOCCIPITAIS QUE ME",
          "SOU BIAXIAL;",
          "O MÚSCULO SUBOCCIPITAL OBLÍQUO SUPERIOR DA CABEÇA SE",
          "PERMITO OS MOVIMENTOS NO PLANO SAGITAL E FRONTAL.",
        ],
        answer: "Articulação Atlanto-occipital",
      },
      {
        id: "perfisio-63",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "PERMITO UMA CONSIDERÁVEL AMPLITUDE DE MOVIMENTO",
          "SOU FAMOSA POR CONTER UM DENTE;",
          "O LIGAMENTO TRANSVERSO DO ATLAS ME PERTENCE;",
          "NO MOVIMENTO DE PROTRAÇÃO DA CABEÇA, ME ENCONTRO",
          "NÃO PERMITO O MOVIMENTO DE INCLINAÇÃO;",
          "SOU SINOVIAL;",
          "O MÚSCULO SUBOCCIPITAL OBLÍQUO INFERIOR DA CABEÇA SE",
          "A FORMA MAIS COMUM DE FRATURA QUE UM DE MEUS",
          "NO MOVIMENTO DE RETRAÇÃO DA CABEÇA, ME ENCONTRO",
          "OS LIGAMENTOS ATLANTOAXIAL POSTERIOR E ATLANTOAXIAL",
        ],
        answer: "ANTERIOS ME ESTABILIZAM. Articulação Atlanto-axial Mediana",
      },
      {
        id: "perfisio-64",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "A UNIÃO DE MINHAS ESTRUTURAS É REFORÇADA PELOS",
          "TENHO POUCA MOBILIDADE;",
          "MINHA PRINCIPAL FUNÇÃO É ABSORVER CHOQUES DURANTE A",
          "NA GRAVIDEZ, HORMÔNIOS AMOLECEM MEU DISCO, PARA",
          "POSSUO UM DISCO FIBROCARTILAGINOSO;",
          "FAÇO PARTE DA PELVIS;",
          "OS ADUTORES DO QUADRIL SE INSEREM PRÓXIMO A MIM;",
          "LIGO DOIS OSSOS IDÊNTICOS;",
          "ESTOU ANTERIORMENTE À BEXIGA URINÁRIA;",
          "O MÚSCULO RETO ABDOMINAL TEM EM MIM UMA DE SUAS",
        ],
        answer: "INSERÇÕES. Articulação Sínfise Púbica",
      },
      {
        id: "perfisio-65",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MINHA MOBILIDADE AUMENTA E É FUNDAMENTAL DURANTE",
          "REALIZO OS MOVIMENTOS DE NUTAÇÃO E CONTRANUTAÇÃO;",
          "MEU OBJETIVO PRINCIPAL É PROMOVER PONTOS FIXOS PARA",
          "MEUS LIGAMENTOS SÃO: SACROILIACOS POSTERIORES,",
          "ARTICULO DUAS FACES AURICULARES",
          "UMA DIFERENÇA DE MEMBROS INFERIORES ME ESTRESSA;",
          "SOU DO TIPO SINOVIAL PLANA, MAS TENHO POUCA",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "NÃO TENHO MÚSCULOS ESPECÍFICOS QUE ATUEM EM MIM;",
          "FAÇO PARTE DA CINTURA PÉLVICA.",
        ],
        answer: "Articulação Sacroilíaca",
      },
      {
        id: "perfisio-66",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "ARTICULO UM OSSO E UMA CARTILAGEM;",
          "O CORPO HUMANO POSSUI 14 PARES DE MIM;",
          "POSSO SER SINARTROSE OU SINOVIAL;",
          "POSSO CONTER DISCOS FIBROCARTILAGINOSOS SE SOU MAIS",
          "SOU UMA ARTICULAÇÃO DO ESQUELETO AXIAL;",
          "DA 2° A 7° COSTELA, SOUCLASSIFICADA COMO SINOVIAL DO",
          "DURANTE A RESPIRAÇÃO APRESENTO DESLIZAMENTOS;",
          "ESTOU PRESENTE NO TÓRAX;",
          "APENAS NA 1° COSTELA TENHO CARTILAGEM HIALINA;",
          "TENHO 14 LETRAS.",
        ],
        answer: "Articulação Condroesternal",
      },
      {
        id: "perfisio-67",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "NÃO POSSUO CÁPSULA ARTICULAR;",
          "O CORPO HUMANO POSSUI 20 DE MIM;",
          "ARTICULO UM OSSO A UMA CARTILAGEM;",
          "SOU UMA ARTICULAÇÃO DO ESQUELETO AXIAL;",
          "NÃO POSSUO LIGAMENTOS;",
          "ESTOU PRESENTE NO TÓRAX;",
          "PASSE SUA VEZ;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "TENHO 12 LETRAS.",
        ],
        answer: "Articulação Costocondral",
      },
      {
        id: "perfisio-68",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "O MÚSCULO LONGUÍSSIMO DO TÓRAX SE INSERE NOS MESMOS",
          "MEUS LIGAMENTOS SÃO: COSTOTRANSVERSO,",
          "PASSE SUA VEZ;",
          "PARTICIPO DOS MECANISMOS ALÇA DE BALDE E BRAÇO DE",
          "ASSOCIADA A OUTRA ARTICULAÇÃO, POSSUO UM EIXO QUASE",
          "O CORPO HUMANO POSSUI 10 PARES DE ARTICULAÇÕES IGUAIS A",
          "AGORA VOCÊ PODERÁ DAR ATÉ DOIS PALPITES;",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO ESQUELETO AXIAL;",
          "QUEM ESTÁ LENDO ANDA AGORA UMA CASA;",
          "ARTICULO DOIS OSSOS, SENDO UM DELES LIMITADOR DOS",
        ],
        answer: "MOVIMENTOS DO TRONCO. Articulação Costotransversal",
      },
      {
        id: "perfisio-69",
        title:  "Responda a pergunta com base nas dicas abaixo! ",
        description: "Categoria: Sistema Articular",
        content: "Use as dicas abaixo para adivinhar a resposta.",
        hints: [
          "MEU LIGAMENTO INTRA-ARTICULAR SE INSERE EM UM DISCO",
          "O CORPO HUMANO POSSUI 24 ARTICULAÇÕES IGUAIS A MIM;",
          "POSSO ARTICULAR 2 OU 3 OSSOS, SENDO NO ÚLTIMO CASO DOIS",
          "MINHA CÁPSULA É REFORÇADA PELO LIGAMENTO RADIADO;",
          "SE ERRAR TERÁ MAIS UMA CHANCE DE ACERTAR;",
          "ARTICULO 3 OSSOS DO 2º AO 9º PAR DE COSTELAS;",
          "ASSOCIADA A OUTRA ARTICULAÇÃO, POSSUO UM EIXO QUASE",
          "UM DE MEUS COMPONENTES LIMITA OS MOVIMENTOS DO",
          "SOU UMA ARTICULAÇÃO SINOVIAL DO ESQUELETO AXIAL;",
          "PARTICIPO DOS MECANISMOS DE ALÇA DE BALDE E BRAÇO DE",
        ],
        answer: "BOMBA. Articulação Costovertebral",
      },
    ],
  },
];

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

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
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

function getStoredKeyBalance(sectionId) {
  const storageKey = `perfisio-keys-${sectionId}`;
  const stored = Number(localStorage.getItem(storageKey));
  if (Number.isInteger(stored) && stored >= 0) return Math.min(stored, 30);
  return 3;
}

function setStoredKeyBalance(sectionId, balance) {
  const storageKey = `perfisio-keys-${sectionId}`;
  localStorage.setItem(storageKey, String(Math.max(0, Math.min(balance, 30))));
}

function hasSolvedQuestion(activityId) {
  return localStorage.getItem(`perfisio-solved-${activityId}`) === "true";
}

function markQuestionSolved(activityId) {
  localStorage.setItem(`perfisio-solved-${activityId}`, "true");
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

function showConfirmModal(message, onConfirm) {
  createModal({
    title: "Desbloquear dica",
    message,
    confirmText: "Sim, gastar chave",
    cancelText: "Cancelar",
    onConfirm,
  });
}

function renderActivity(activity) {
  // insertActivityStyles();

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

  const hints = (activity.hints || []).slice(0, 4);
  const options = getQuizOptions(activity);
  const sectionId = activity.sectionId;
  const activityState = {
    keyBalance: getStoredKeyBalance(sectionId),
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

  const listSectionId = getQueryParam("section") || activity.sectionId;
  const listGroupIndex =
    getQueryParam("group") || getActivityGroupIndex(activity) || "1";
  const listHref =
    listSectionId && listGroupIndex
      ? `activity.html?section=${listSectionId}&group=${listGroupIndex}`
      : "home.html";
  const currentGroupIndex = getActivityGroupIndex(activity) || listGroupIndex;

  root.innerHTML = `
    <div class="quiz-keys-container">
      <div class="quiz-badge">
        <span class="quiz-badge-icon">🔑</span>
        <span id="key-badge">${activityState.keyBalance}</span>
      </div>
    </div>

    <div class="activity-card">
      <div class="quiz-question-pill">Use as dicas abaixo para adivinhar a resposta.</div>

      <div class="quiz-card">
        <h2 class="quiz-question-title">${escapeHtml(activity.title)}</h2>
        <p class="quiz-question-instruction">${escapeHtml(activity.description)}</p>

        <div class="quiz-options">
          ${optionsHtml}
        </div>

        <div class="quiz-hints-container">
          <div class="quiz-hints-title">Dicas</div>
          <div class="quiz-hint-buttons">
            ${hintButtonsHtml}
          </div>
          <div class="quiz-hint-modal" id="hint-modal"></div>
        </div>

        <button type="button" class="quiz-submit-btn" id="submit-answer" disabled>Responder</button>
        <div class="quiz-feedback" id="feedback"></div>
      </div>

      <a class="activity-back-link" href="home.html">Voltar para o início</a>
    </div>
  `;

  const keyBadge = root.querySelector("#key-badge");
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

  function handleOptionChange() {
    submitButton.disabled = false;
    // Remove selected class from all options
    root.querySelectorAll(".quiz-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    // Add selected class to the checked option's label
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
  }

  function hideHintContent() {
    hintModal.classList.remove("visible");
    hintModal.textContent = "";
  }

  function handleHintClick(event) {
    const button = event.target.closest(".quiz-hint-btn");
    if (!button) return;
    const index = Number(button.dataset.hintIndex);
    const hintState = activityState.hints[index];
    if (!hintState) return;

    if (hintState.unlocked || index === 0) {
      showHintContent(index);
      return;
    }

    showConfirmModal(
      `Deseja gastar 1 chave para desbloquear a dica ${index + 1}?`,
      () => {
        if (activityState.keyBalance <= 0) {
          showInfoModal(
            "Sem chaves",
            "Você não tem chaves suficientes para desbloquear essa dica.",
          );
          return;
        }
        activityState.keyBalance -= 1;
        setStoredKeyBalance(sectionId, activityState.keyBalance);
        hintState.unlocked = true;
        setHintButtonState(index, true);
        updateKeyDisplay();
        showHintContent(index);
      },
    );
  }

  function calculateReward() {
    const unlockedCount = activityState.hints.filter(
      (hint) => hint.unlocked,
    ).length;
    const usedHints = Math.max(0, unlockedCount - 1);
    return Math.max(0, 3 - usedHints);
  }

  function showFeedback(isCorrect, reward = 0) {
    if (!feedback) return;
    feedback.className = `quiz-feedback visible ${isCorrect ? "success" : "error"}`;
    if (isCorrect) {
      feedback.textContent = `✓ Resposta correta! Você ganhou ${reward} ${reward === 1 ? "chave" : "chaves"}.`;
    } else {
      feedback.textContent =
        "✗ Resposta incorreta. Tente novamente ou reveja as dicas.";
    }
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
      const alreadySolved = activityState.solved;
      const reward = calculateReward();
      if (!alreadySolved && reward > 0) {
        activityState.keyBalance = Math.min(
          30,
          activityState.keyBalance + reward,
        );
        setStoredKeyBalance(sectionId, activityState.keyBalance);
      }
      if (!alreadySolved) {
        markQuestionSolved(activity.id);
        activityState.solved = true;
      }
      updateKeyDisplay();
      showFeedback(true, reward);
      submitButton.disabled = true;
      optionInputs.forEach((input) => {
        input.disabled = true;
      });

      // Mostrar modal com próxima questão
      const section = getLessonSection(sectionId);
      const nextActivity = section
        ? section.items[section.items.indexOf(activity) + 1]
        : null;

      if (nextActivity) {
        createModal({
          title: "🎉 Parabéns!",
          message: `Você ganhou ${reward} ${reward === 1 ? "chave" : "chaves"}!`,
          confirmText: "Próxima questão",
          onConfirm: () => {
            window.location.href = `activity.html?id=${nextActivity.id}&section=${listSectionId}&group=${currentGroupIndex}`;
          },
        });
      } else {
        createModal({
          title: "🎉 Parabéns!",
          message: `Você ganhou ${reward} ${reward === 1 ? "chave" : "chaves"}! Todas as questões foram concluídas.`,
          confirmText: "Voltar para o início",
          onConfirm: () => {
            window.location.href = "home.html";
          },
        });
      }
    } else {
      showInfoModal(
        "Resposta incorreta",
        `A resposta correta é: ${activity.answer}`,
      );
      showFeedback(false, 0);
    }
  }

  optionInputs.forEach((input) => {
    input.addEventListener("change", handleOptionChange);
  });

  // Add click listeners to labels for better UX
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
    button.addEventListener("click", handleHintClick);
  });

  submitButton.addEventListener("click", handleSubmit);
  updateKeyDisplay();
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
      <p class="activity-group-count">${group.itemCount} perguntas neste grupo</p>
      <div class="activity-group-list">
        ${itemsHtml}
      </div>
      <a class="activity-back-link" href="home.html">Voltar</a>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  const activityId = getQueryParam("id");
  const sectionId = getQueryParam("section");
  const groupIndex = getQueryParam("group");

  if (activityId) {
    const activity = getActivityById(activityId);
    renderActivity(activity);
  } else if (sectionId && groupIndex) {
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
