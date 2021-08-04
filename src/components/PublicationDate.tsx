import React from "react";

interface PublicationDateProps {
  date: number | Date
}

function PublicationDate({
  date
}: PublicationDateProps): JSX.Element {
  const formattedDate = new Date(date);

  return (
    <h4 className="font-montserrat text-sm italic font-light">
      {formattedDate.toLocaleDateString()} - {formattedDate.toLocaleTimeString()}
    </h4>
  );
}

export default PublicationDate;
