import React from "react";

interface TitleProps {
  text: string;
}

function Title({
  text
}: TitleProps) : JSX.Element {
  return (
    <h2 className="font-montserrat text-3xl font-medium">
      {text}
    </h2>
  );
}

export default Title;
