import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { Folder } from "@/src/folder/type";
import { FolderItem } from "@/src/folder/Item";
import { Dispatch, KeyboardEventHandler, SetStateAction } from "react";
import { Modal } from "@/src/sharing/Modal";
import { ModalContentBox } from "@/src/sharing/ModalContentBox";
import { ModalContentButton } from "@/src/sharing/ModalContentButton";
import { ModalContentDescription } from "@/src/sharing/ModalContentDescription";
import { ModalContentTitle } from "@/src/sharing/ModalContentTitle";

const cx = classNames.bind(styles);

type AddLinkModalProps = {
  isOpen: boolean;
  folders: Folder[];
  description: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AddLinkModal = ({
  isOpen,
  folders,
  description,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, linkCount }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={linkCount}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
