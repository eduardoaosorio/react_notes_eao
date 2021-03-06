import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Context = React.createContext();

export default function Provider({ children }) {
  const [homeNotes, setHomeNotes] = useState(
    () => JSON.parse(localStorage.getItem('homeNotes')) || []
  );
  const [trashNotes, setTrashNotes] = useState(
    () => JSON.parse(localStorage.getItem('trashNotes')) || []
  );
  const [inTrash, setInTrash] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('homeNotes', JSON.stringify(homeNotes));
  }, [homeNotes]);

  useEffect(() => {
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
  }, [trashNotes]);

  function createNote(title, text) {
    const newNote = {
      id: nanoid(),
      title,
      text,
      creationDate: new Date().toLocaleString(),
      latestUpdateDate: null,
    };
    setHomeNotes((prevHomeNotes) => [...prevHomeNotes, newNote]);
  }

  function updateNote(id, title, text) {
    setHomeNotes((prevHomeNotes) =>
      prevHomeNotes.map((note) => {
        if (note.id !== id) return note;
        return {
          id,
          title,
          text,
          creationDate: note.creationDate,
          latestUpdateDate: new Date().toLocaleString(),
        };
      })
    );
  }

  function sendToTrash(id) {
    let newTrashNote = null;
    setHomeNotes((prevHomeNotes) =>
      prevHomeNotes.filter((note) => {
        if (note.id !== id) return true;
        newTrashNote = note;
        return false;
      })
    );
    setTrashNotes((prevTrashNotes) => [newTrashNote, ...prevTrashNotes]);
  }

  function sendToHome(id) {
    let noteToHome = null;
    setTrashNotes((prevTrashNotes) =>
      prevTrashNotes.filter((note) => {
        if (note.id !== id) return true;
        noteToHome = note;
        return false;
      })
    );
    setHomeNotes((prevHomeNotes) => [noteToHome, ...prevHomeNotes]);
  }

  function deleteNote(id) {
    setTrashNotes((prevTrashNotes) =>
      prevTrashNotes.filter((note) => note.id !== id)
    );
  }

  function emptyTrash() {
    setTrashNotes([]);
  }

  function toggleTrash() {
    setInTrash((prevState) => !prevState);
  }

  function handleSearch(event) {
    setSearchInputValue(event.target.value);
  }

  return (
    <Context.Provider
      value={{
        homeNotes,
        trashNotes,
        searchInputValue,
        inTrash,
        actions: {
          createNote,
          updateNote,
          sendToTrash,
          sendToHome,
          deleteNote,
          emptyTrash,
          toggleTrash,
          handleSearch,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
