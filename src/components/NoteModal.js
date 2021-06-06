import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../Context";

import "./NoteModal.css";

import sprite from "../sprite.svg";

export default function NoteModal(props) {
  const { createNote } = useContext(Context).actions;
  const { toggleModal } = useContext(Context).actions;

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (noteTitle.trim().length === 0 || noteText.trim().length === 0) return;
    createNote(noteTitle, noteText);
    setNoteTitle("");
    setNoteText("");
    toggleModal();
  }

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <form className="note-modal" onSubmit={handleSubmit}>
        <div className="note-modal__close">
          <button type="button" onClick={toggleModal}>
            <svg className="note-modal__close-icon">
              <use href={sprite + "#cancel"} />
            </svg>
          </button>
        </div>
        <h2 className="note-modal__heading">New Note</h2>
        <input
          placeholder="Add note title"
          className="note-modal__title"
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Add note contents"
          className="note-modal__text scroll"
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="note-modal__btn">Save</button>
      </form>
    </>,
    document.querySelector("#portal")
  );
}
