import React from "react";
import Content from "./Content";

import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";

interface PostProps {
  title: string;
  date: number | Date;
  summary: string;
  content: string;
}

function Post({
  title,
  date,
  summary,
  content
}: PostProps): JSX.Element {
  return (
    <article>
      <header>
        <Title text={title} />
        <PublicationDate date={date} />
      </header>

      <div className="my-4">
        <Summary text={summary} />
      </div>

      <Content text={content} />

      <footer>

      </footer>
    </article>
  );
}

export default Post;
