import { useContext } from "react";
import { Context } from "../Context";

import UpdateNoteModal from "./UpdateNoteModal";

import "./Note.css";

import sprite from "../sprite.svg";

export default function Note({ id, title, text, creationDate }) {
  const { sendToTrash } = useContext(Context).actions;
  const { sendToHome } = useContext(Context).actions;
  const { deleteNote } = useContext(Context).actions;
  const { toggleUpdateNoteModal } = useContext(Context).actions;
  const { inTrash } = useContext(Context);
  const { updateNoteModalIsOpen } = useContext(Context);

  if (!inTrash) {
    return (
      <>
        <div className="note">
          <div className="note__actions-box">
            <button onClick={toggleUpdateNoteModal}>
              <svg className="note__icon--edit">
                <use href={sprite + "#edit"} />
              </svg>
            </button>
            <button onClick={() => sendToTrash(id)}>
              <svg className="note__icon--trash">
                <use href={sprite + "#empty-trash"} />
              </svg>
            </button>
          </div>
          <h2 className="note__title">{title}</h2>
          <p className="note__text scroll">{text}</p>
          <p className="note__timestamp">{`Created: ${creationDate.toLocaleString()}`}</p>
        </div>
        {!updateNoteModalIsOpen ? null : (
          <UpdateNoteModal id={id} title={title} text={text} />
        )}
      </>
    );
  } else {
    return (
      <div className="note in-trash-color">
        <div className="note__actions-box">
          <button onClick={() => sendToHome(id)}>
            <svg className="note__icon--home">
              <use href={sprite + "#home"} />
            </svg>
          </button>
          <button onClick={() => deleteNote(id)}>
            <svg className="note__icon--permanent-delete">
              <use href={sprite + "#delete"} />
            </svg>
          </button>
        </div>
        <h2 className="note__title">{title}</h2>
        <p className="note__text scroll">{text}</p>
        <p className="note__timestamp">{`Created: ${creationDate.toLocaleString()}`}</p>
      </div>
    );
  }
}
