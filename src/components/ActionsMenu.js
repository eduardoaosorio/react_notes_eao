import { useState, useContext } from "react";
import "./ActionsMenu.css";
import { Context } from "../Context";

import CreateNoteModal from "./CreateNoteModal";
import EmptyTrashWarningModal from "./EmptyTrashWarningModal";

import sprite from "../sprite.svg";

export default function ActionsMenu(props) {
  const { toggleTrash, handleSearch } = useContext(Context).actions;

  const { inTrash, trashNotes, searchInputValue } = useContext(Context);

  const [createNoteModalIsOpen, setCreateNoteModalIsOpen] = useState(false);
  const [emptyTrashWarningModalIsOpen, setEmptyTrashWarningModalIsOpen] =
    useState(false);

  function toggleCreateNoteModal() {
    setCreateNoteModalIsOpen((prevState) => !prevState);
  }

  function toggleEmptyTrashWarningModal() {
    setEmptyTrashWarningModalIsOpen((prevState) => !prevState);
  }

  if (!inTrash) {
    return (
      <>
        <div className="actions-menu">
          <button
            title="Create note"
            className="create-note"
            onClick={toggleCreateNoteModal}
          >
            <svg className="create-note__icon">
              <use href={sprite + "#plus"} />
            </svg>
          </button>
          <button
            title="Go to trash"
            className="show-trash"
            onClick={toggleTrash}
          >
            {trashNotes.length === 0 ? (
              <svg className="show-trash__icon">
                <use href={sprite + "#empty-trash"} />
              </svg>
            ) : (
              <svg className="show-trash__icon">
                <use href={sprite + "#trash"} />
              </svg>
            )}
          </button>
          <div className="search">
            <input
              value={searchInputValue}
              onChange={handleSearch}
              className="search__input"
              placeholder="search notes"
            ></input>
            <svg className="search__icon">
              <use href={sprite + "#loupe"} />
            </svg>
          </div>
        </div>
        {createNoteModalIsOpen ? (
          <CreateNoteModal toggleCreateNoteModal={toggleCreateNoteModal} />
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <div className="actions-menu">
          <button title="Go to home" className="go-home" onClick={toggleTrash}>
            <svg className="go-home__icon">
              <use href={sprite + "#home"} />
            </svg>
          </button>
          <button
            title="Delete all notes in trash"
            className="permanently-delete"
            onClick={toggleEmptyTrashWarningModal}
            disabled={!trashNotes.length}
          >
            <svg className="permanently-delete__icon">
              <use href={sprite + "#cancel"} />
            </svg>
          </button>
          <div className="search">
            <input
              value={searchInputValue}
              onChange={handleSearch}
              className="search__input"
              placeholder="search notes in trash"
            ></input>
            <svg className="search__icon">
              <use href={sprite + "#loupe"} />
            </svg>
          </div>
        </div>
        {emptyTrashWarningModalIsOpen ? (
          <EmptyTrashWarningModal
            toggleEmptyTrashWarningModal={toggleEmptyTrashWarningModal}
          />
        ) : null}
      </>
    );
  }
}
