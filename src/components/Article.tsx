import React from "react";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";

interface ArticleProps {
  title: string;
  date: number | Date;
  summary: string;
}

function Article({
  title,
  date,
  summary
}: ArticleProps): JSX.Element {
  return (
    <article className="my-4">
      <header className="mb-2">
        <Title text={title} />
        <PublicationDate date={date} />
      </header>
      
      <Summary text={summary} />
    </article>
  );
}

export default Article;
