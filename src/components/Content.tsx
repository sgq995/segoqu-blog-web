import classNames from "classnames";
import { isUndefined } from "lodash";
import React from "react";
import colorSchema from "../styles/color-schema";

interface ContentParagraphProp {

}

function ContentParagraph() {
  const text: string = '';

  const className = classNames(
    'pb-2 font-montserrat text-base font-normal text-justify',
    {
      [`w-full h-6 mb-4 ${colorSchema['bg-loading']}`]: isUndefined(text),
    }
  );

  const paragraphs = text
    ? text.replace('\r', '').split('\n')
    : new Array(5).fill('');

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={className}>
          {paragraph}
        </p>
      ))}
    </>
  );
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
    return React.createElement(tag, prunedProps, textContent);
  } else {
    return (
      <>
      </>
    );
  }
}

export default Content;
