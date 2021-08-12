import classNames from "classnames";
import { isUndefined } from "lodash";
import React from "react";
import colorSchema from "../styles/color-schema";

interface SummaryProps {
  text?: string;
}

function Summary({
  text
}: SummaryProps): JSX.Element {
  const className = classNames(
    'font-montserrat text-2xl font-normal',
    {
      [`w-full h-8 ${colorSchema['bg-loading']}`]: isUndefined(text),      
    }
  )

  return (
    <p className={className}>
      {text}
    </p>
  );
}

export default Summary;
