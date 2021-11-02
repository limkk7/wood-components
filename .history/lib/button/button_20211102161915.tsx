import { scopedClassMaker } from "helpers/classes";
import React, { HTMLAttributes } from "react";
const sc = scopedClassMaker("w-ui-button");
interface Props extends HTMLAttributes<HTMLButtonElement> {
  theme?: string;
}

const Button: React.FC<Props> = ({
  className,
  theme = "",
  children,
  ...rest
}) => {
  console.log(children);
  console.log(sc(theme));
  return (
    <button className={sc(theme)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
