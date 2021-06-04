import { useState } from "react";
import ReactDOM from "react-dom";

import "./NoteModal.css";

import sprite from "../sprite.svg";

function NoteModal({ open }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  if (!open) return null;

  console.log("noteTitle", noteTitle);

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <form className="note-modal">
        <div className="note-modal__close">
          <button type="button">
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
      ;
    </>,
    document.querySelector("#portal")
  );
}

export default NoteModal;
