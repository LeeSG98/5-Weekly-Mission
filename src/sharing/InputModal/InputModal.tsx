import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import { Input } from "@/src/sharing/Input";
import { Modal } from "@/src/sharing/Modal";
import { ModalContentBox } from "@/src/sharing/ModalContentBox";
import { ModalContentButton } from "@/src/sharing/ModalContentButton";
import { ModalContentTitle } from "@/src/sharing/ModalContentTitle";

const cx = classNames.bind(styles);

type InputModalProps = {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton onClick={() => {}}>
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
