import { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../Context";

import "./EmptyTrashWarningModal.css";

import sprite from "../sprite.svg";

export default function EmptyTrashWarningModal({
  toggleEmptyTrashWarningModal,
}) {
  const { emptyTrash } = useContext(Context).actions;

  function handleConfirm() {
    emptyTrash();
    toggleEmptyTrashWarningModal();
  }

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="note-modal warning">
        <div className="note-modal__close">
          <button type="button" onClick={toggleEmptyTrashWarningModal}>
            <svg className="note-modal__close-icon">
              <use href={sprite + "#cancel"} />
            </svg>
          </button>
        </div>
        <h2 className="note-modal__heading">Warning!</h2>
        <p>
          You are about to empty the trash bin. This action will delete all
          notes in it forever, there is no way to get these notes back.
        </p>
        <button onClick={handleConfirm} className="note-modal__btn">
          Permanently delete all notes
        </button>
      </div>
    </>,
    document.querySelector("#warning-portal")
  );
}
