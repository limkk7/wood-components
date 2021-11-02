import * as React from "react";
import classnames, { scopedClassMaker } from "helpers/classes";
import "./button.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  size?: string;
}
const sc = scopedClassMaker("w-ui-button");

const Button: React.FC<Props> = ({
  className,
  theme = "",
  size = "",
  children,
  ...rest
}) => {
  const classes = React.useMemo(
    () => classnames(sc({ "": true, [theme]: true, [size]: true }), className),
    [theme, className]
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export { Button };
