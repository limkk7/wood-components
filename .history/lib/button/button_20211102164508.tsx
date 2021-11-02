import * as React from "react";
import { scopedClassMaker } from "helpers/classes";
import "./button.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
}
const sc = scopedClassMaker("w-ui-button");

const Button: React.FC<Props> = ({
  className,
  theme = "",
  children,
  ...rest
}) => {
  console.log(sc(theme));
  return (
    <button className={sc(theme)} {...rest}>
      {children}
    </button>
  );
};

export { Button };
