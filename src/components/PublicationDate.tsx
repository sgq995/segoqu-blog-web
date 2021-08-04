import React from "react";

interface PublicationDateProps {
  date: number | Date
}

function PublicationDate({
  date
}: PublicationDateProps): JSX.Element {
  const fomattedDate = new Date(date);

  return (
    <h4 className="font-montserrat text-sm italic font-light">
      {fomattedDate.toString()}
    </h4>
  );
}

export default PublicationDate;
