import React from "react";

import Content from "./Content";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";
import classNames from "classnames";

interface DefaultPostProps {
  loading?: false;
  title: string;
  date: number | Date;
  summary: string;
  content: string;
}

interface LoadingPostProps {
  loading: true;
  title?: string;
  date?: number | Date;
  summary?: string;
  content?: string;
}

type PostProps = DefaultPostProps | LoadingPostProps;

function Post({
  loading,
  title,
  date,
  summary,
  content
}: PostProps): JSX.Element {
  const className = classNames(
    {
      'animate-pulse': loading
    }
  )

  return (
    <article className={className}>
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
