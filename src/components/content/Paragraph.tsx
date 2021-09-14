import React, { PropsWithChildren } from "react";

import classNames from "classnames";
import { isUndefined } from "lodash";

import colorSchema from "../../styles/color-schema";

interface ContentParagraphProp {

}

function ContentParagraph({
  children,
  ...props
}: PropsWithChildren<ContentParagraphProp>): JSX.Element {
  const className = classNames(
    'py-2 font-montserrat text-base font-normal text-justify',
    {
      [`w-full h-6 mb-4 ${colorSchema['bg-loading']}`]: isUndefined(children),
    }
  );

  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}

export default ContentParagraph;
