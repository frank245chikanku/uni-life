// types.ts
export type ChapterData = {
  title: string;
  content: string[];
};

export type CategoryData = {
  [key: string]: {
    [key: string]: ChapterData; 
    
  };
};

export type DataStructure = {
  [key: string]: CategoryData; 
};
