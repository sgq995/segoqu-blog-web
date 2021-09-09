import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Post from "../components/Post";
import postsService, { PostModel } from "../services/posts-service";
import { makeCancelable } from "../utils/cancellable-promise";
import { route, ROUTE_HOME, ROUTE_POSTS_ID, ROUTE_POSTS_TITLE } from "../utils/sitemap";

interface PostByIdParams {
  id: string;
}

function PostById({
  match
}: RouteComponentProps<PostByIdParams>): JSX.Element {
  const [post, setPost] = React.useState<PostModel | null>(null);

  const { id } = match.params;

  React.useEffect(() => {
    const postId = parseInt(id);
    const promise = makeCancelable(postsService.read(postId));
    promise.then(response => setPost(response));

    return () => promise.cancel();
  }, [id]);

  if (post) {
    const { title, category, tags, date, summary, contents } = post;

    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Post
          category={category}
          tags={tags}
          title={title}
          date={date}
          summary={summary}
          contents={contents}
        />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <title>Loading</title>
        </Helmet>
        <Post loading />
      </>
    );
  }
}

interface PostByTitleParams {
  title: string;
}

function PostByTitle({
  match
}: RouteComponentProps<PostByTitleParams>): JSX.Element {
  const { title } = match.params;

  return (
    <p>PostsByTitle {title}</p>
  );
}

function Posts({
  match
}: RouteComponentProps): JSX.Element {
  return (
    <section>
      <Switch>
        <Route exact path={route(ROUTE_POSTS_ID)} component={PostById} />
        <Route exact path={route(ROUTE_POSTS_TITLE)} component={PostByTitle} />

        <Redirect to={route(ROUTE_HOME)} />
      </Switch>
    </section>
  );
}

export default Posts;
