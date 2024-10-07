// 챔피언 디테일 페이지

export interface championDetails {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: championImage;
  tags: string[];
  partype: string;
  stats: championStats;
  info: championInfo;
}

interface championImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface championInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface championStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
