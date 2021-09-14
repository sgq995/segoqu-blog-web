import classNames from "classnames";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface LoadingLinkProps extends LinkProps {
  loading: boolean
}

function LoadingLink({
  loading,
  children,
  className,
  ...props
}: LoadingLinkProps): JSX.Element {
  const linkClassName = classNames(
    'text-black hover:text-gray-400',
    className
  );

  if (loading) {
    return <>{children}</>;
  } else {
    return <Link className={linkClassName} {...props}>{children}</Link>;
  }
}

export default LoadingLink;
