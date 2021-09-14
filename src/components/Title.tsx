import classNames from "classnames";
import { isUndefined } from "lodash";
import React from "react";
import colorSchema from "../styles/color-schema";

interface TitleProps {
  text?: string;
}

function Title({
  text
}: TitleProps) : JSX.Element {
  const className = classNames(
    'text-3xl font-medium',
    {
      [`w-full h-9 ${colorSchema['bg-loading']}`]: isUndefined(text),
    }
  )

  return (
    <h2 className={className}>
      {text}
    </h2>
  );
}

export default Title;
