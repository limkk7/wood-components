import * as React from "react";
import classnames, { scopedClassMaker } from "../helpers/classes";
import "./input.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const sc = scopedClassMaker("w-ui-input");

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, disabled, value, onChange, ...rest }, ref) => {
    const classes = React.useMemo(
      () =>
        classnames(
          sc({
            "": true,
          }),
          className
        ),
      [className]
    );
    return (
      <input
        type="text"
        disabled={disabled}
        className={classes}
        {...rest}
        value={value}
        ref={ref}
        onChange={(e) => onChange && onChange(e)}
      />
    );
  }
);

export { Input };
