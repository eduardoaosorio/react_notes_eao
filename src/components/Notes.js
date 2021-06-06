import React, { useContext } from "react";
import { Context } from "../Context";

import "./Notes.css";

import Note from "./Note";

export default function Notes(props) {
  const { allNotes } = useContext(Context);

  return (
    <div className="note-collection">
      {!allNotes.length ? (
        <div className="no-notes-msg">No notes</div>
      ) : (
        allNotes.map(({ id, title, text, creationDate }) => (
          <Note
            key={id}
            title={title}
            text={text}
            creationDate={creationDate}
          />
        ))
      )}
    </div>
  );
}
