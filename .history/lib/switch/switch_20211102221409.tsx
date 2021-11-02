import * as React from "react";
import classnames, { scopedClassMaker } from "helpers/classes";
import "./switch.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
  size?: string;
  loading?: boolean;
  disabled?: boolean | undefined;
  checked?: boolean | undefined;
}
const sc = scopedClassMaker("w-ui-switch");

const Switch: React.FC<Props> = ({
  className,
  theme = "",
  size = "",
  children,
  loading,
  disabled,
  checked,
  ...rest
}) => {
  const classes = React.useMemo(
    () =>
      classnames(
        sc({
          "": true,
          [theme]: true,
          checked: !!checked,
        }),
        className
      ),
    [theme, className]
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      <span></span>
    </button>
  );
};

export { Switch };
