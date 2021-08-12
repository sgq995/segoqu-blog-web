import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import Post from "../components/Post";
import postsService, { Post as PostModel } from "../services/posts-service";
import { makeCancelable } from "../utils/cancellable-promise";

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
    const { title, date, summary, content } = post;

    return (
      <Post
        title={title}
        date={date}
        summary={summary}
        content={content}
      />
    );
  } else {
    return (
      <Post loading />
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
  const basepath = match.path;

  return (
    <section>
      <Switch>
        <Route exact path={`${basepath}/:id`} component={PostById} />
        <Route exact path={`${basepath}/t/:title`} component={PostByTitle} />

        <Redirect to="/" />
      </Switch>
    </section>
  );
}

export default Posts;
