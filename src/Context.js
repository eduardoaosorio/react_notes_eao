import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Context = React.createContext();

export default function Provider(props) {
  const [allNotes, setAllNotes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function createNote(title, text) {
    const newNote = {
      id: nanoid(),
      title,
      text,
      creationDate: new Date(),
    };
    setAllNotes((prevAllNotes) => [...prevAllNotes, newNote]);
  }

  function toggleModal() {
    setModalIsOpen((prevState) => !prevState);
  }

  return (
    <Context.Provider
      value={{
        allNotes,
        modalIsOpen,
        actions: {
          createNote,
          toggleModal,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
