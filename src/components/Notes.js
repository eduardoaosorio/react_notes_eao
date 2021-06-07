import React, { useContext } from "react";
import { Context } from "../Context";

import "./Notes.css";

import Note from "./Note";

export default function Notes(props) {
  const { homeNotes } = useContext(Context);
  const { trashNotes } = useContext(Context);
  const { inTrash } = useContext(Context);
  const { searchInputValue } = useContext(Context);

  if (!inTrash) {
    return (
      <div className="note-collection">
        {!homeNotes.length ? (
          <div className="no-notes-msg">No notes</div>
        ) : (
          homeNotes
            .filter(
              ({ title, text }) =>
                title.toLowerCase().includes(searchInputValue) ||
                text.toLowerCase().includes(searchInputValue)
            )
            .map(({ id, title, text, creationDate, latestUpdateDate }) => (
              <Note
                key={id}
                id={id}
                title={title}
                text={text}
                creationDate={creationDate}
                latestUpdateDate={latestUpdateDate}
              />
            ))
        )}
      </div>
    );
  } else {
    return (
      <div className="note-collection">
        {!trashNotes.length ? (
          <div className="no-notes-msg">Trash is empty</div>
        ) : (
          trashNotes
            .filter(
              ({ title, text }) =>
                title.toLowerCase().includes(searchInputValue) ||
                text.toLowerCase().includes(searchInputValue)
            )
            .map(({ id, title, text, creationDate, latestUpdateDate }) => (
              <Note
                key={id}
                id={id}
                title={title}
                text={text}
                creationDate={creationDate}
                latestUpdateDate={latestUpdateDate}
              />
            ))
        )}
      </div>
    );
  }
}
