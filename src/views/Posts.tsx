import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import Post from "../components/Post";
import postsService from "../services/posts-service";
import { makeCancelable } from "../utils/cancellable-promise";

interface Post {
  title?: string,
  date?: number | Date,
  summary?: string,
  content?: string
}

interface PostByIdParams {
  id: string;
}

function PostById({
  match
}: RouteComponentProps<PostByIdParams>): JSX.Element {
  const [post, setPost] = React.useState<Post>({});

  const { id } = match.params;

  React.useEffect(() => {
    const postId = parseInt(id);
    const promise = makeCancelable(postsService.read(postId));
    promise.then(response => setPost(response.data));

    return () => promise.cancel();
  }, [id]);

  const { title, date, summary, content } = post;

  return (
    <Post
      title={title ?? ''}
      date={date ?? 0}
      summary={summary ?? ''}
      content={content ?? ''}
    />
  );
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
