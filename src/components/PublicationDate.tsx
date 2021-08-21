import classNames from "classnames";
import { isUndefined } from "lodash";
import React from "react";
import colorSchema from "../styles/color-schema";

function toLocaleString(date: number | Date) {
  const dateObject = new Date(date);
  return `${dateObject.toLocaleDateString()} - ${dateObject.toLocaleTimeString()}`
}

interface PublicationDateProps {
  date?: number | Date
}

function PublicationDate({
  date
}: PublicationDateProps): JSX.Element {
  const className = classNames(
    'font-montserrat text-sm italic font-light',
    {
      [`w-48 h-5 ${colorSchema['bg-loading']}`]: isUndefined(date),
    }
  )

  const dateString = date 
    ? toLocaleString(date)
    : undefined

  return (
    <h4 className={className}>
      {dateString}
    </h4>
  );
}

export default PublicationDate;
