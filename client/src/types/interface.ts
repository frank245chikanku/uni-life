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

export interface IIntership {
  id: string;
  contact: string;
  address: string;
  title: string;
  description: string
  link:string
}