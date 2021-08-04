import React from "react";

interface ContentProps {
  text: string;
}

function Content({
  text
}: ContentProps): JSX.Element {
  return (
    <p className="font-montserrat text-base font-normal">
      {text}
    </p>
  )
}

export default Content;
