export type ProjectInfo = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
}

export type AdventCSSChallenge = {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
}

export type CodeChallenge = {
  id: number;
  title: string;
  image: string;
  link: string;
}

export type CookbookField = {
  id: number;
  title: string;
  description: string;
  link: string;
  chips: Array<{ name: string; }>;
}
