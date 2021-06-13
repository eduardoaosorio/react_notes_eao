import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../Context';

import './UpdateNoteModal.css';

import sprite from '../sprite.svg';

export default function UpdateNoteModal({
  id,
  title,
  text,
  toggleUpdateNoteModal,
}) {
  const { updateNote } = useContext(Context).actions;

  const [noteTitle, setNoteTitle] = useState(title);
  const [noteText, setNoteText] = useState(text);
  const [errors, setErrors] = useState({});

  function validatePreSubmit() {
    const errorsObject = {};
    let formIsValid = true;

    if (noteTitle.trim().length === 0) {
      formIsValid = false;
      errorsObject.noteTitle = "Note title can't be empty!";
    }

    if (noteText.trim().length === 0) {
      formIsValid = false;
      errorsObject.noteText = "Note body can't be empty!";
    }

    setErrors(errorsObject);
    return formIsValid;
  }

  function validateAndHandleChange(e) {
    if (e.target.className.includes('note-modal__title')) {
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

    if (e.target.className.includes('note-modal__text')) {
      if (e.target.value.trim().length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          noteText: null,
        }));
      }
      setNoteText(e.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validatePreSubmit()) return;
    updateNote(id, noteTitle, noteText);
    setNoteTitle('');
    setNoteText('');
    toggleUpdateNoteModal();
  }

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <form className="note-modal edit-color" onSubmit={handleSubmit}>
        <div className="note-modal__close">
          <button type="button" onClick={toggleUpdateNoteModal}>
            <svg className="note-modal__close-icon">
              <use href={`${sprite}#cancel`} />
            </svg>
          </button>
        </div>
        <h2 className="note-modal__heading">Edit Note</h2>
        <input
          placeholder="Add note title"
          className="note-modal__title edit-color"
          type="text"
          value={noteTitle}
          onChange={validateAndHandleChange}
        />
        {errors.noteTitle ? (
          <div className="note-modal__error-msg">{errors.noteTitle}</div>
        ) : null}
        <textarea
          placeholder="Add note contents"
          className="note-modal__text scroll edit-color"
          type="text"
          value={noteText}
          onChange={validateAndHandleChange}
        />
        {errors.noteText ? (
          <div className="note-modal__error-msg">{errors.noteText}</div>
        ) : null}
        <button type="submit" className="note-modal__btn">
          Update
        </button>
      </form>
    </>,
    document.querySelector('#update-portal')
  );
}
