import { ReactNode } from "react";

interface BtnProps {
  children?: ReactNode;
  _className?: string | undefined; // ? makes it optional
  _onClick?: () => unknown | undefined;
}

function BTN({ children = "Click me!", _className, _onClick }: BtnProps) {
  return (
    <>
      <button
        type="button"
        onClick={typeof _onClick == "undefined" ? () => {} : _onClick}
        className={
          typeof _className == "undefined" ? "btn btn-info" : _className
        }
      >
        {children}
      </button>
    </>
  );
}

export default BTN;
