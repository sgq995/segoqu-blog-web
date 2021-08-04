import React from "react";

interface SummaryProps {
  text: string;
}

function Summary({
  text
}: SummaryProps): JSX.Element {
  return (
    <p className="font-montserrat text-2xl font-normal">
      {text}
    </p>
  );
}

export default Summary;
