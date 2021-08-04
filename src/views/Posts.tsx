import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import Post from "../components/Post";

interface PostByIdParams {
  id: string;
}

function PostById({
  match
}: RouteComponentProps<PostByIdParams>): JSX.Element {
  const { id } = match.params;

  return (
    <Post
      title="Title"
      date={16161561651}
      summary="Summary"
      content="Lorem ipsum dolor sit amet"
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

        {/* <Redirect to="/" /> */}
      </Switch>
    </section>
  );
}

export default Posts;
