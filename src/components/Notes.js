import React, { useContext } from "react";
import { Context } from "../Context";

import "./Notes.css";

import Note from "./Note";

export default function Notes(props) {
  const { allNotes } = useContext(Context);
  const { trashNotes } = useContext(Context);
  const { inTrash } = useContext(Context);

  if (!inTrash) {
    return (
      <div className="note-collection">
        {!allNotes.length ? (
          <div className="no-notes-msg">No notes</div>
        ) : (
          allNotes.map(({ id, title, text, creationDate }) => (
            <Note
              key={id}
              id={id}
              title={title}
              text={text}
              creationDate={creationDate}
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
          trashNotes.map(({ id, title, text, creationDate }) => (
            <Note
              key={id}
              id={id}
              title={title}
              text={text}
              creationDate={creationDate}
            />
          ))
        )}
      </div>
    );
  }
}
