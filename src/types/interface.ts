// types.ts
export type ChapterData = {
  title: string;
  content: string[];
};

export type CategoryData = {
  [key: string]: {
    [key: string]: ChapterData; // e.g., { phase1: { title: string; content: string[]; }; }
  };
};

export type DataStructure = {
  [key: string]: CategoryData; // e.g., { academics: {}, peer: {} }
};
