import classNames from "classnames";
import React from "react";
import { route, ROUTE_CATEGORIES_LABEL } from "../utils/sitemap";
import LoadingLink from "./LoadingLink";
import colorSchema from "../styles/color-schema";

interface CategoryProps {
  loading: boolean,
  label?: string,
}

function Category({
  loading,
  label,
}: CategoryProps): JSX.Element {
  const spanClassName = classNames(
    {
      [`block w-24 h-6 ${colorSchema['bg-loading']}`]: loading
    }
  )

  return (
    <LoadingLink
      loading={true}
      className="underline"
      to={route(ROUTE_CATEGORIES_LABEL, { label })}
    >
      <span className={spanClassName}>
        {label}
      </span>
    </LoadingLink>
  );
}

export default Category;
