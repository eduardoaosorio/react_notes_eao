import { useContext } from "react";
import "./ActionsMenu.css";
import { Context } from "../Context";

import CreateNoteModal from "./CreateNoteModal";

import sprite from "../sprite.svg";

export default function ActionsMenu(props) {
  const { toggleCreateNoteModal } = useContext(Context).actions;
  const { toggleTrash } = useContext(Context).actions;
  const { emptyTrash } = useContext(Context).actions;
  const { createNoteModalIsOpen } = useContext(Context);
  const { inTrash } = useContext(Context);
  const { trashNotes } = useContext(Context);

  if (!inTrash) {
    return (
      <>
        <div className="actions-menu">
          <div
            className="create-note"
            role="button"
            onClick={toggleCreateNoteModal}
          >
            <svg className="create-note__icon">
              <use href={sprite + "#plus"} />
            </svg>
          </div>
          <div className="show-trash" role="button" onClick={toggleTrash}>
            {trashNotes.length === 0 ? (
              <svg className="show-trash__icon">
                <use href={sprite + "#empty-trash"} />
              </svg>
            ) : (
              <svg className="show-trash__icon">
                <use href={sprite + "#trash"} />
              </svg>
            )}
          </div>
          <div className="search">
            <input className="search__input" placeholder="search notes"></input>
            <svg className="search__icon">
              <use href={sprite + "#loupe"} />
            </svg>
          </div>
        </div>
        {createNoteModalIsOpen ? <CreateNoteModal /> : null}
      </>
    );
  } else {
    return (
      <div className="actions-menu">
        <div className="go-home" role="button" onClick={toggleTrash}>
          <svg className="go-home__icon">
            <use href={sprite + "#home"} />
          </svg>
        </div>
        <div className="permanently-delete" role="button" onClick={emptyTrash}>
          <svg className="permanently-delete__icon">
            <use href={sprite + "#cancel"} />
          </svg>
        </div>
        <div className="search">
          <input className="search__input" placeholder="search notes"></input>
          <svg className="search__icon">
            <use href={sprite + "#loupe"} />
          </svg>
        </div>
      </div>
    );
  }
}
