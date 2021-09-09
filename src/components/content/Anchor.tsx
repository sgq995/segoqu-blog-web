import React, { PropsWithChildren } from "react";

import classNames from "classnames";
import { isUndefined } from "lodash";

import colorSchema from "../../styles/color-schema";

interface ContentAnchorProp {

}

function ContentAnchor({
  children,
  ...props
}: PropsWithChildren<ContentAnchorProp>): JSX.Element {
  const className = classNames(
    'py-2 font-montserrat text-base font-normal text-justify underline visited:text-purple-600',
    {
      [`w-full h-6 mb-4 ${colorSchema['bg-loading']}`]: isUndefined(children),
    }
  );

  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
}

export default ContentAnchor;
