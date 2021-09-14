import classNames from "classnames";
import React, { MouseEventHandler, useRef, useState } from "react";
import { IoCheckmark } from "react-icons/io5";

interface TagChipProps {
  label: string,
}

function TagChip({
  label
}: TagChipProps): JSX.Element {
  const ref = useRef<HTMLButtonElement>(null);
  const [actived, setActived] = useState(false);

  const buttonOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (actived) {
      ref.current?.blur();
    }
    
    setActived(!actived);
  }

  const buttonClassName = classNames(
    'box-border',
    'px-2 py-0.5',
    'border border-black rounded-2xl',
    'transition-all duration-300 ease-in-out',
    'bg-gradient-to-r from-white via-white-black to-black',
    'bg-size-x-200 hover:bg-pos-x-end focus:bg-pos-x-end',
    'text-sm hover:text-white focus:text-white',
    {
      'bg-pos-x-end text-white': actived
    }
  );

  return (
    <button ref={ref} className={buttonClassName} onClick={buttonOnClick}>
      {label}

      {actived && <IoCheckmark className="inline ml-1" size={16} />}
    </button>
  );
}

export default TagChip;
