import React from "react";
import ContentAnchor from "./content/Anchor";
import ContentParagraph from "./content/Paragraph";

const TAG_TO_COMPONENT: { [key: string]: React.FunctionComponent } = {
  "p": ContentParagraph,
  "a": ContentAnchor,
}

function pruneProps(props: { [key: string]: string }): [{ [key: string]: string }, string | null] {
  let prunedProps: { [key: string]: string } = {};
  let textContent: string | null = null;

  for (let key in props) {
    if (key === '#text') {
      textContent = props[key];
    } else if (key.startsWith('@')) {
      prunedProps[key.substring(1)] = props[key];
    }
  }
  return [prunedProps, textContent];
}

interface ContentProps {
  tag?: string;
  props?: {
    [key: string]: string
  };
}

function Content({
  tag,
  props
}: ContentProps): JSX.Element {
  const [prunedProps, textContent] = props
    ? pruneProps(props)
    : [{}, null];

  if (tag) {
    const component = TAG_TO_COMPONENT[tag]
      ? TAG_TO_COMPONENT[tag]
      : tag;

    return React.createElement(component, prunedProps, textContent);
  } else {
    return (
      <>
      </>
    );
  }
}

export default Content;
