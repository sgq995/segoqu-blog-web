import React from "react";
import { PostModel } from "../services/posts-service";
import { route, ROUTE_POSTS_ID } from "../utils/sitemap";
import Category from "./Category";
import LoadingLink from "./LoadingLink";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import TagList from "./TagList";
import Title from "./Title";

interface DefaultArticleProps extends PostModel {
  loading?: false;
}

interface LoadingArticleProps extends Partial<PostModel> {
  loading: true;
}

type ArticleProps = DefaultArticleProps | LoadingArticleProps;

function Article({
  loading,
  id,
  category,
  title,
  date,
  summary,
  tags
}: ArticleProps): JSX.Element {
  const loadingProp = !!loading;

  return (
    <article className="box-border my-2 p-2 md:my-4 md:p-4 bg-white">
      <Category loading={loadingProp} label={category} />

      <LoadingLink
        loading={loadingProp}
        className="visited:text-gray-600"
        to={route(ROUTE_POSTS_ID, { id })}
      >
        <div className="my-2">
          <header>
            <Title text={title} />
            <PublicationDate date={date} />
          </header>

          <div className="mt-4">
            <Summary text={summary} />
          </div>
        </div>
      </LoadingLink>

      <TagList tags={tags} />
    </article>
  );
}

export default Article;
