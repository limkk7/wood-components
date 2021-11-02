import * as React from "react";
import classnames, { scopedClassMaker } from "helpers/classes";
import "./button.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  size?: string;
  loading?: boolean;
  disabled?: boolean | undefined;
}
const sc = scopedClassMaker("w-ui-button");

const Button: React.FC<Props> = ({
  className,
  theme = "",
  size = "",
  children,
  loading,
  disabled,
  ...rest
}) => {
  const classes = React.useMemo(
    () =>
      classnames(
        sc({
          "": true,
          [theme]: true,
          "w-ui-button-loadingIndicator": !!loading,
        }),
        className
      ),
    [theme, className]
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {loading && <span className="w-ui-loadingIndicator"></span>}
      {children}
    </button>
  );
};

export { Button };
