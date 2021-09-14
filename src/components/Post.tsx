import React from "react";

import Content from "./Content";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";
import classNames from "classnames";
import { PostModel } from "../services/posts-service";
import Category from "./Category";

type PostModelDisplayProps = Omit<PostModel, "id">;

interface DefaultPostProps extends PostModelDisplayProps {
  loading?: false;
}

interface LoadingPostProps extends Partial<PostModelDisplayProps> {
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
        <Category loading={!!loading} label={category} />

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
