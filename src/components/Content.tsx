import classNames from "classnames";
import { isUndefined } from "lodash";
import React from "react";
import colorSchema from "../styles/color-schema";

interface ContentProps {
  text?: string;
}

function Content({
  text
}: ContentProps): JSX.Element {
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

export default Content;
