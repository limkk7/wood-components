import * as React from "react";
import { scopedClassMaker } from "helpers/classes";
const sc = scopedClassMaker("w-ui-button");
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
