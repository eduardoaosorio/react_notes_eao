import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../Context";

import "./CreateNoteModal.css";

import sprite from "../sprite.svg";

export default function CreateNoteModal({ toggleCreateNoteModal }) {
  const { createNote } = useContext(Context).actions;

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    if (!validatePreSubmit()) return;
    createNote(noteTitle, noteText);
    setNoteTitle("");
    setNoteText("");
    toggleCreateNoteModal();
  }

  function validatePreSubmit() {
    let errors = {};
    let formIsValid = true;

    if (noteTitle.trim().length === 0) {
      formIsValid = false;
      errors["noteTitle"] = "Note title can't be empty!";
    }

    if (noteText.trim().length === 0) {
      formIsValid = false;
      errors["noteText"] = "Note body can't be empty!";
    }

    setErrors(errors);
    return formIsValid;
  }

  function validateAndHandleChange(e) {
    if (e.target.className.includes("note-modal__title")) {
      if (e.target.value.trim().length > 50) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          noteTitle: "Note title can't be longer than 50 characters!",
        }));
        return;
      }
      if (e.target.value.trim().length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          noteTitle: null,
        }));
      }
      setNoteTitle(e.target.value);
    }

    if (e.target.className.includes("note-modal__text")) {
      if (e.target.value.trim().length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          noteText: null,
        }));
      }
      setNoteText(e.target.value);
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <form className="note-modal" onSubmit={handleSubmit}>
        <div className="note-modal__close">
          <button type="button" onClick={toggleCreateNoteModal}>
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
          onChange={validateAndHandleChange}
        />
        {errors.noteTitle ? (
          <div className="note-modal__error-msg">{errors.noteTitle}</div>
        ) : null}
        <textarea
          placeholder="Add note contents"
          className="note-modal__text scroll"
          type="text"
          value={noteText}
          onChange={validateAndHandleChange}
        />
        {errors.noteText ? (
          <div className="note-modal__error-msg">{errors.noteText}</div>
        ) : null}
        <button className="note-modal__btn">Save</button>
      </form>
    </>,
    document.querySelector("#create-portal")
  );
}
