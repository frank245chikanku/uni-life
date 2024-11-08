// Chapter.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { getCategoryData } from "../categories/Category";

const Chapter: React.FC = () => {
  const { category, chapter } = useParams<{
    category?: string; // Make them optional
    chapter?: string;
  }>();

  // Check if category and chapter are undefined
  if (!category || !chapter) {
    return <div>Invalid URL: Missing category or chapter</div>;
  }

  console.log(category);
  console.log(chapter);

  // Fetch the data for the selected category
  const categoryData = getCategoryData(category);
  const currentChapter = categoryData?.[`chapter${chapter}`];

  if (!currentChapter) {
    return <div>Content not found for this chapter.</div>;
  }

  return (
    <div>
      <h1>{currentChapter.title}</h1>
      <p>{currentChapter.content}</p>
    </div>
  );
};

export default Chapter;
