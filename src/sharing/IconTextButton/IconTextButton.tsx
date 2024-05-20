import { MouseEventHandler } from "react";
import styles from "./IconTextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type IconTextButtonProps = {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const IconTextButton = ({
  iconSource,
  text,
  onClick,
}: IconTextButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
