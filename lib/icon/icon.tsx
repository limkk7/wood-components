import * as React from "react";
import "./icon.scss";
import "./importIcons";
import classnames from "../helpers/classes";

interface IconProps {
  name: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <span>
      <svg
        className={classnames("w-ui-icon", className)}
        aria-hidden="true"
        {...restProps}
      >
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </span>
  );
};

export default Icon;
