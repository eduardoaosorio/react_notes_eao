import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../Context";

import "./UpdateNoteModal.css";

import sprite from "../sprite.svg";

export default function UpdateNoteModal({
  id,
  title,
  text,
  toggleUpdateNoteModal,
}) {
  const { updateNote } = useContext(Context).actions;

  const [noteTitle, setNoteTitle] = useState(title);
  const [noteText, setNoteText] = useState(text);

  function handleSubmit(event) {
    event.preventDefault();
    if (noteTitle.trim().length === 0 || noteText.trim().length === 0) return;
    updateNote(id, noteTitle, noteText);
    setNoteTitle("");
    setNoteText("");
    toggleUpdateNoteModal();
  }

  return ReactDOM.createPortal(
    <>
      <div className="edit-overlay"></div>
      <form className="note-modal edit-color" onSubmit={handleSubmit}>
        <div className="note-modal__close">
          <button type="button" onClick={toggleUpdateNoteModal}>
            <svg className="note-modal__close-icon">
              <use href={sprite + "#cancel"} />
            </svg>
          </button>
        </div>
        <h2 className="note-modal__heading">Edit Note</h2>
        <input
          placeholder="Add note title"
          className="note-modal__title edit-color"
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Add note contents"
          className="note-modal__text scroll edit-color"
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="note-modal__btn">Update</button>
      </form>
    </>,
    document.querySelector("#update-portal")
  );
}
