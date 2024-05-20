import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { Modal } from "@/src/sharing/Modal";
import { ModalContentBox } from "@/src/sharing/ModalContentBox";
import { ModalContentButton } from "@/src/sharing/ModalContentButton";
import { ModalContentDescription } from "@/src/sharing/ModalContentDescription";
import { ModalContentTitle } from "@/src/sharing/ModalContentTitle";

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
