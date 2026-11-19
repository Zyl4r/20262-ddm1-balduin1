/**
 * Dados estáticos sobre Overwatch 2 usados pelas telas de Personagens,
 * Mapas, Modos e Competitivo.
 */

export const OW_ORANGE = '#F99E1A';
export const OW_DARK = '#1B2838';

export type Role = 'Tanque' | 'Dano' | 'Suporte';

export type Hero = {
  name: string;
  description: string;
};

export type RoleGroup = {
  role: Role;
  color: string;
  summary: string;
  passive: string;
  heroes: Hero[];
};

export const HEROES: RoleGroup[] = [
  {
    role: 'Tanque',
    color: '#4A90D9',
    summary:
      'Linha de frente do time. Absorvem dano, criam espaço e protegem os aliados. No 5v5 cada equipe tem apenas um tanque.',
    passive: 'Reduz o acúmulo de carga de ultimate gerado nos inimigos e diminui o recuo (knockback) recebido.',
    heroes: [
      { name: 'D.Va', description: 'Pilota um mecha com Matriz de Defesa que anula projéteis.' },
      { name: 'Doomfist', description: 'Mergulhador de combate corpo a corpo com socos explosivos.' },
      { name: 'Hazard', description: 'Tanque agressivo que cria muralhas de espinhos e salta sobre inimigos.' },
      { name: 'Junker Queen', description: 'Causa sangramento com faca e machado e se cura ao ferir inimigos.' },
      { name: 'Mauga', description: 'Usa duas metralhadoras e se mantém vivo enquanto causa dano.' },
      { name: 'Orisa', description: 'Robô resistente que gira sua lança para bloquear projéteis.' },
      { name: 'Ramattra', description: 'Alterna entre forma Ômnica (alcance) e forma Nêmesis (corpo a corpo).' },
      { name: 'Reinhardt', description: 'Cavaleiro com escudo de barreira e martelo-foguete.' },
      { name: 'Roadhog', description: 'Puxa inimigos com seu gancho e se cura com o Respiro.' },
      { name: 'Sigma', description: 'Cientista que controla gravidade, absorve projéteis e ergue barreiras.' },
      { name: 'Winston', description: 'Gorila cientista que salta sobre a defesa inimiga com canhão de tesla.' },
      { name: 'Wrecking Ball', description: 'Hamster em uma bola-mecha que rola pelo mapa desorganizando o time rival.' },
      { name: 'Zarya', description: 'Usa barreiras de partículas que aumentam a energia e o dano do seu canhão.' },
    ],
  },
  {
    role: 'Dano',
    color: '#E0533D',
    summary:
      'Responsáveis por eliminar inimigos. Há heróis de longo alcance, flanqueadores e especialistas em área. Cada equipe tem dois heróis de dano.',
    passive: 'Causar dano reduz a cura recebida pelo alvo por um curto período.',
    heroes: [
      { name: 'Ashe', description: 'Atiradora com rifle de alavanca e o robô B.O.B. como ultimate.' },
      { name: 'Bastion', description: 'Robô que se transforma em modo torre e modo artilharia.' },
      { name: 'Cassidy', description: 'Pistoleiro com granada magnética e o famoso "É meio-dia".' },
      { name: 'Echo', description: 'Robô voador capaz de duplicar o herói inimigo com sua ultimate.' },
      { name: 'Freja', description: 'Caçadora de recompensas com besta e grande mobilidade aérea.' },
      { name: 'Genji', description: 'Ciborgue ninja que lança shurikens e reflete projéteis.' },
      { name: 'Hanzo', description: 'Arqueiro preciso com flechas sônicas e o Dragão.' },
      { name: 'Junkrat', description: 'Especialista em explosivos, minas e armadilhas.' },
      { name: 'Mei', description: 'Cientista que cria paredes de gelo e desacelera inimigos.' },
      { name: 'Pharah', description: 'Soldado com armadura voadora e lança-foguetes.' },
      { name: 'Reaper', description: 'Assassino de curta distância com espingardas gêmeas.' },
      { name: 'Sojourn', description: 'Usa um railgun que carrega disparos de alto dano.' },
      { name: 'Soldado: 76', description: 'Herói versátil com rifle de pulso, corrida e campo de cura.' },
      { name: 'Sombra', description: 'Hacker que fica invisível e desativa habilidades inimigas.' },
      { name: 'Symmetra', description: 'Cria torres e teletransportadores para reposicionar o time.' },
      { name: 'Torbjörn', description: 'Engenheiro que constrói torres automáticas.' },
      { name: 'Tracer', description: 'Extremamente rápida, pisca pelo mapa e volta no tempo.' },
      { name: 'Venture', description: 'Arqueóloga que se enterra no subsolo para surpreender inimigos.' },
      { name: 'Widowmaker', description: 'Franco-atiradora com gancho e visão infravermelha.' },
    ],
  },
  {
    role: 'Suporte',
    color: '#3DBE7A',
    summary:
      'Mantêm o time vivo com cura, proteções e bônus, além de contribuírem com dano e utilidade. Cada equipe tem dois suportes.',
    passive: 'Regeneram vida automaticamente depois de alguns segundos sem sofrer dano.',
    heroes: [
      { name: 'Ana', description: 'Atiradora de dardos curativos e granada que bloqueia cura.' },
      { name: 'Baptiste', description: 'Médico de combate com Campo de Imortalidade.' },
      { name: 'Brigitte', description: 'Suporte corpo a corpo com escudo e kits de reparo.' },
      { name: 'Illari', description: 'Usa energia solar para curar e posiciona um pilar de cura.' },
      { name: 'Juno', description: 'Marciana que flutua e acelera o time com seu anel hiper.' },
      { name: 'Kiriko', description: 'Kunais, talismãs de cura e teleporte até aliados.' },
      { name: 'Lifeweaver', description: 'Puxa aliados para a segurança e cria plataformas.' },
      { name: 'Lúcio', description: 'DJ que alterna entre música de cura e de velocidade.' },
      { name: 'Mercy', description: 'Anjo da guarda que cura, aumenta dano e ressuscita aliados.' },
      { name: 'Moira', description: 'Cientista que drena vida dos inimigos e cura em área.' },
      { name: 'Wuyang', description: 'Controla uma esfera de água para curar aliados e atacar.' },
      { name: 'Zenyatta', description: 'Monge ômnico com orbes de harmonia e discórdia.' },
    ],
  },
];

export type MapMode = {
  mode: string;
  maps: string[];
};

export const MAPS: MapMode[] = [
  {
    mode: 'Controle',
    maps: ['Antarctic Peninsula', 'Busan', 'Ilios', 'Lijiang Tower', 'Nepal', 'Oasis', 'Samoa'],
  },
  {
    mode: 'Escolta',
    maps: [
      'Circuit Royal',
      'Dorado',
      'Havana',
      'Junkertown',
      'Rialto',
      'Route 66',
      'Shambali Monastery',
      'Watchpoint: Gibraltar',
    ],
  },
  {
    mode: 'Híbrido',
    maps: ['Blizzard World', 'Eichenwalde', 'Hollywood', "King's Row", 'Midtown', 'Numbani', 'Paraíso'],
  },
  {
    mode: 'Avanço (Push)',
    maps: ['Colosseo', 'Esperança', 'New Queen Street', 'Runasapi'],
  },
  {
    mode: 'Ponto Crítico (Flashpoint)',
    maps: ['Aatlis', 'New Junk City', 'Suravasa'],
  },
  {
    mode: 'Confronto (Clash)',
    maps: ['Hanaoka', 'Throne of Anubis'],
  },
];

export type MapHighlight = {
  name: string;
  location: string;
  description: string;
};

export const MAP_HIGHLIGHTS: MapHighlight[] = [
  {
    name: "King's Row",
    location: 'Londres, Inglaterra',
    description:
      'Mapa híbrido clássico: o ataque captura um ponto nas ruas da cidade e depois escolta a carga até as instalações subterrâneas.',
  },
  {
    name: 'Ilios',
    location: 'Grécia',
    description:
      'Vilarejo litorâneo com três submapas (Ruínas, Farol e Poço). Famoso pelos abismos que permitem eliminar inimigos com empurrões.',
  },
  {
    name: 'Esperança',
    location: 'Portugal',
    description:
      'Mapa de Avanço lançado com Overwatch 2, com ruas estreitas e rotas alternativas ao redor do robô.',
  },
  {
    name: 'Route 66',
    location: 'Estados Unidos',
    description:
      'Escolta pelo deserto americano, com longas linhas de visão que favorecem atiradores.',
  },
];

export type GameMode = {
  name: string;
  objective: string;
  howToWin: string;
};

export const CORE_MODES: GameMode[] = [
  {
    name: 'Controle',
    objective: 'Capturar e manter um ponto central no mapa.',
    howToWin:
      'Ao dominar o ponto, a porcentagem do time sobe até 100%. Vence quem ganhar duas rodadas, cada uma em um submapa diferente.',
  },
  {
    name: 'Escolta',
    objective: 'O ataque empurra uma carga até o destino final; a defesa tenta impedir.',
    howToWin:
      'Os times trocam de lado. Vence quem levar a carga mais longe ou completar o percurso mais rápido.',
  },
  {
    name: 'Híbrido',
    objective: 'Mistura de captura de ponto com escolta.',
    howToWin:
      'O ataque primeiro captura um ponto, que libera a carga, e depois a escolta até o fim do mapa.',
  },
  {
    name: 'Avanço (Push)',
    objective: 'Os dois times disputam um robô que empurra uma barricada em direção à base inimiga.',
    howToWin: 'Vence quem empurrar a barricada mais longe ao fim do tempo, ou até o final do percurso.',
  },
  {
    name: 'Ponto Crítico (Flashpoint)',
    objective: 'Cinco pontos de controle espalhados por um mapa grande são ativados um de cada vez.',
    howToWin: 'O primeiro time a capturar três pontos vence a partida.',
  },
  {
    name: 'Confronto (Clash)',
    objective: 'Os times disputam uma linha de cinco pontos, sempre começando pelo centro.',
    howToWin:
      'Capturar um ponto avança a luta em direção à base inimiga. Vence quem acumular pontos suficientes ou capturar o último ponto do rival.',
  },
];

export type ExtraMode = {
  name: string;
  description: string;
};

export const EXTRA_MODES: ExtraMode[] = [
  {
    name: 'Partida Rápida',
    description:
      'Partidas casuais 5v5 nos modos principais, sem impacto no ranque. Ideal para treinar heróis novos.',
  },
  {
    name: 'Competitivo',
    description: 'Partidas ranqueadas com regras mais rígidas e recompensas por temporada.',
  },
  {
    name: 'Estádio (Stadium)',
    description:
      'Modo melhor-de-7 rodadas, em terceira pessoa, no qual os jogadores ganham moedas para comprar poderes e itens que mudam as habilidades dos heróis.',
  },
  {
    name: 'Arcade',
    description:
      'Modos alternativos e rotativos, como Heróis Misteriosos, Mata-mata, Eliminação e eventos sazonais.',
  },
  {
    name: 'Personalizado e Workshop',
    description:
      'Partidas com regras criadas pelos jogadores. O Workshop permite programar modos totalmente novos.',
  },
];

export type Rank = {
  name: string;
  color: string;
};

export const RANKS: Rank[] = [
  { name: 'Bronze', color: '#A0663B' },
  { name: 'Prata', color: '#B8C4CC' },
  { name: 'Ouro', color: '#E6B83A' },
  { name: 'Platina', color: '#5FB4B4' },
  { name: 'Diamante', color: '#6EA8FF' },
  { name: 'Mestre', color: '#3DD9A8' },
  { name: 'Grão-Mestre', color: '#C08CFF' },
  { name: 'Campeão', color: '#FF5C7A' },
];

export type InfoTopic = {
  title: string;
  points: string[];
};

export const COMPETITIVE_TOPICS: InfoTopic[] = [
  {
    title: 'Como desbloquear',
    points: [
      'Contas novas precisam vencer partidas na Partida Rápida antes de liberar o modo Competitivo.',
      'O objetivo é garantir que o jogador conheça os heróis e os mapas antes de jogar valendo ranque.',
    ],
  },
  {
    title: 'Fila por Função x Fila Aberta',
    points: [
      'Fila por Função: você escolhe Tanque, Dano ou Suporte e recebe um ranque separado para cada função.',
      'Fila Aberta: qualquer composição de heróis é permitida e há um único ranque.',
    ],
  },
  {
    title: 'Divisões e progresso',
    points: [
      'Cada ranque (exceto o Top 500) é dividido em cinco divisões, da 5 (mais baixa) até a 1 (mais alta).',
      'O progresso é mostrado em porcentagem e atualizado ao fim de cada partida.',
      'Vitórias aumentam o progresso; derrotas diminuem. Empates não alteram muito o ranque.',
    ],
  },
  {
    title: 'Banimento de heróis e votação de mapa',
    points: [
      'Antes da partida, os jogadores votam para banir heróis, que ficam indisponíveis para ambos os times.',
      'Os jogadores também votam entre opções de mapas para a partida.',
    ],
  },
  {
    title: 'Top 500 e temporadas',
    points: [
      'Os 500 melhores jogadores de cada região e fila aparecem no ranking Top 500.',
      'Cada temporada traz recompensas competitivas, como pontos competitivos para comprar armas douradas.',
    ],
  },
  {
    title: 'Dicas para subir de ranque',
    points: [
      'Domine 2 ou 3 heróis de cada função que você joga.',
      'Comunique-se: avise sobre ultimates, alvos prioritários e reagrupamentos.',
      'Jogue em torno do objetivo, não apenas das eliminações.',
      'Assista replays para identificar erros de posicionamento.',
    ],
  },
];
