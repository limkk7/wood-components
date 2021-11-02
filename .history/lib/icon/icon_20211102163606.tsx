import * as React from "react";
import "./icon.scss";
import "./importIcons";
import classnames from "../helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  // className?: string;
  // onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = ({
  className,
  name,
  children,
  ...restProps
}) => {
  console.log("xxx");
  return (
    <svg className={classnames("w-ui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
