import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Context = React.createContext();

export default function Provider(props) {
  const [allNotes, setAllNotes] = useState([]);
  const [trashNotes, setTrashNotes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inTrash, setInTrash] = useState(false);

  function createNote(title, text) {
    const newNote = {
      id: nanoid(),
      title,
      text,
      creationDate: new Date(),
    };
    setAllNotes((prevAllNotes) => [...prevAllNotes, newNote]);
  }

  function sendToTrash(id) {
    let newTrashNote = null;
    setAllNotes((prevAllNotes) =>
      prevAllNotes.filter((note) => {
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
    setAllNotes((prevAllNotes) => [...prevAllNotes, noteToHome]);
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
        allNotes,
        trashNotes,
        modalIsOpen,
        inTrash,
        actions: {
          createNote,
          sendToTrash,
          sendToHome,
          toggleModal,
          toggleTrash,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
