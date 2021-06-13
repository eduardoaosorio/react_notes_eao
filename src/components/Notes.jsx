import React, { useContext } from 'react';
import { Context } from '../Context';

import './Notes.css';

import Note from './Note';

export default function Notes() {
  const { homeNotes, trashNotes, inTrash, searchInputValue } =
    useContext(Context);

  function filterNotes(notes) {
    return notes
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
      ));
  }

  const filteredHomeNotes = filterNotes(homeNotes);
  const filteredTrashNotes = filterNotes(trashNotes);

  if (!inTrash) {
    return (
      <div className="note-collection">
        {(() => {
          if (!homeNotes.length)
            return <div className="no-notes-msg">No notes</div>;
          if (!filteredHomeNotes.length) {
            return <div className="no-notes-msg">No matches found</div>;
          }
          return filteredHomeNotes;
        })()}
      </div>
    );
  }
  return (
    <div className="note-collection">
      {(() => {
        if (!trashNotes.length)
          return <div className="no-notes-msg">Trash is empty</div>;
        if (!filteredTrashNotes.length) {
          return <div className="no-notes-msg">No matches found</div>;
        }
        return filteredTrashNotes;
      })()}
    </div>
  );
}
