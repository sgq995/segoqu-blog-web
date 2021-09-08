import React from "react";

import Content from "./Content";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";
import classNames from "classnames";
import { PostModel } from "../services/posts-service";

interface DefaultPostProps extends Omit<PostModel, "id"> {
  loading?: false;
  title: string;
}

interface LoadingPostProps extends Partial<Omit<PostModel, "id">> {
  loading: true;
}

type PostProps = DefaultPostProps | LoadingPostProps;

function Post({
  loading,
  title,
  category,
  tags,
  date,
  summary,
  contents
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

      {contents?.map((content, key) => (
        <Content
          key={key}
          tag={content.tag}
          props={content.props}
        />
      ))}

      <footer>

      </footer>
    </article>
  );
}

export default Post;
