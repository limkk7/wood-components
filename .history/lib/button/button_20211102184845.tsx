import * as React from "react";
import classnames, { scopedClassMaker } from "helpers/classes";
import "./button.scss";
import { useState } from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
}
const sc = scopedClassMaker("w-ui-button");

const Button: React.FC<Props> = ({
  className,
  theme = "",
  children,
  onClick,
  ...rest
}) => {
  const classes = React.useMemo(
    () => classnames(sc({ "": true, [theme]: true }), className),
    [theme, className]
  );
  const [animation, setAnimation] = useState(classes);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimation(classes);
    }, 2000);
  }, [animation]);

  const onClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnimation(animation.concat(" w-ui-button-wave"));
    onClick && onClick(e);
  };

  return (
    <button onClick={onClickHandle} className={animation} {...rest}>
      {children}
    </button>
  );
};

export { Button };
