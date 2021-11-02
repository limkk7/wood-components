import * as React from "react";
import classnames, { scopedClassMaker } from "helpers/classes";
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
  const classes = classnames(sc({ "": true, [theme]: true }), className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export { Button };
