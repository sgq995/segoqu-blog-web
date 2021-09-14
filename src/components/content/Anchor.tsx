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
  const divClassName = classNames(
    'py-2',
    {
      [`w-full h-6 mb-4 ${colorSchema['bg-loading']}`]: isUndefined(children),
    }
  );

  return (
    <div className={divClassName}>
      <a className="text-base font-normal underline visited:text-gray-600" {...props}>
        {children}
      </a>
    </div>
  );
}

export default ContentAnchor;
