import { useState, useContext } from "react";
import { Context } from "../Context";

import UpdateNoteModal from "./UpdateNoteModal";

import "./Note.css";

import sprite from "../sprite.svg";

export default function Note({
  id,
  title,
  text,
  creationDate,
  latestUpdateDate,
}) {
  const { sendToTrash, sendToHome, deleteNote } = useContext(Context).actions;
  const { inTrash } = useContext(Context);

  const [updateNoteModalIsOpen, setUpdateNoteModalIsOpen] = useState(false);

  function toggleUpdateNoteModal() {
    setUpdateNoteModalIsOpen((prevState) => !prevState);
  }

  if (!inTrash) {
    return (
      <>
        <div className="note">
          <div className="note__actions-box">
            <button title="Edit note" onClick={toggleUpdateNoteModal}>
              <svg className="note__icon--edit">
                <use href={sprite + "#edit"} />
              </svg>
            </button>
            <button title="Send to trash" onClick={() => sendToTrash(id)}>
              <svg className="note__icon--trash">
                <use href={sprite + "#empty-trash"} />
              </svg>
            </button>
          </div>
          <h2 className="note__title">{title}</h2>
          <p className="note__text scroll">{text}</p>
          {latestUpdateDate ? (
            <p className="note__timestamp">
              Last updated: {latestUpdateDate.toLocaleString()}
            </p>
          ) : (
            <p className="note__timestamp">
              Created: {creationDate.toLocaleString()}
            </p>
          )}
        </div>
        {!updateNoteModalIsOpen ? null : (
          <UpdateNoteModal
            id={id}
            title={title}
            text={text}
            toggleUpdateNoteModal={toggleUpdateNoteModal}
          />
        )}
      </>
    );
  } else {
    return (
      <div className="note in-trash-color">
        <div className="note__actions-box">
          <button title="Send to home" onClick={() => sendToHome(id)}>
            <svg className="note__icon--home">
              <use href={sprite + "#home"} />
            </svg>
          </button>
          <button title="Delete note" onClick={() => deleteNote(id)}>
            <svg className="note__icon--permanent-delete">
              <use href={sprite + "#delete"} />
            </svg>
          </button>
        </div>
        <h2 className="note__title">{title}</h2>
        <p className="note__text scroll">{text}</p>
        {latestUpdateDate ? (
          <p className="note__timestamp">
            Last updated: {latestUpdateDate.toLocaleString()}
          </p>
        ) : (
          <p className="note__timestamp">
            Created: {creationDate.toLocaleString()}
          </p>
        )}
      </div>
    );
  }
}
