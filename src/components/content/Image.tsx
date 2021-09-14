import React, { ImgHTMLAttributes } from "react";

interface ContentImageProps {

}

function ContentImage({
  ...props
}: ContentImageProps): JSX.Element {
  const imgProps = props as ImgHTMLAttributes<HTMLImageElement>

  return (
    <div className="py-2 flex justify-center">
      <img alt={imgProps.alt} {...imgProps} />
    </div>
  );
}

export default ContentImage;
