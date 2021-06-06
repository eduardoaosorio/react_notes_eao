import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const Context = React.createContext();

export default function Provider(props) {
  const [homeNotes, setHomeNotes] = useState(
    () => JSON.parse(localStorage.getItem("homeNotes")) || []
  );
  const [trashNotes, setTrashNotes] = useState(
    () => JSON.parse(localStorage.getItem("trashNotes")) || []
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inTrash, setInTrash] = useState(false);

  useEffect(() => {
    localStorage.setItem("homeNotes", JSON.stringify(homeNotes));
  }, [homeNotes]);

  useEffect(() => {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
  }, [trashNotes]);

  function createNote(title, text) {
    const newNote = {
      id: nanoid(),
      title,
      text,
      creationDate: new Date(),
    };
    setHomeNotes((prevHomeNotes) => [...prevHomeNotes, newNote]);
  }

  function sendToTrash(id) {
    let newTrashNote = null;
    setHomeNotes((prevHomeNotes) =>
      prevHomeNotes.filter((note) => {
        if (note.id !== id) return true;
        else {
          newTrashNote = note;
          return false;
        }
      })
    );
    setTrashNotes((prevTrashNotes) => [...prevTrashNotes, newTrashNote]);
  }

  function sendToHome(id) {
    let noteToHome = null;
    setTrashNotes((prevTrashNotes) =>
      prevTrashNotes.filter((note) => {
        if (note.id !== id) return true;
        else {
          noteToHome = note;
          return false;
        }
      })
    );
    setHomeNotes((prevHomeNotes) => [...prevHomeNotes, noteToHome]);
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

  function toggleModal() {
    setModalIsOpen((prevState) => !prevState);
  }

  return (
    <Context.Provider
      value={{
        homeNotes,
        trashNotes,
        modalIsOpen,
        inTrash,
        actions: {
          createNote,
          sendToTrash,
          sendToHome,
          deleteNote,
          emptyTrash,
          toggleModal,
          toggleTrash,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
