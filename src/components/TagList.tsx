import React from "react";
import TagChip from "./TagChip";

interface TagListProps {
  tags: string[] | undefined
}

function TagList({
  tags
}: TagListProps): JSX.Element {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {tags?.map(tag => (
        <TagChip key={tag} label={tag} />
      ))}
    </div>
  );
}

export default TagList;
