import React from "react";

interface ContentProps {
  text: string;
}

function Content({
  text
}: ContentProps): JSX.Element {
  return (
    <>
      {text.replace('\r', '').split('\n').map(paragraph => (
        <p key={paragraph} className="pb-2 font-montserrat text-base font-normal text-justify">
          {paragraph}
        </p>
      ))}
    </>
  );
}

export default Content;
