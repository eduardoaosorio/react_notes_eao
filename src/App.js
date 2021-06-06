import React, { useContext } from "react";

import "./App.css";

import Header from "./components/Header";
import Notes from "./components/Notes";
import NoteModal from "./components/NoteModal";
import { Context } from "./Context";

export default function App() {
  const { modalIsOpen } = useContext(Context);

  return (
    <div className="app-container">
      <Header />
      <Notes />
      {modalIsOpen ? <NoteModal /> : null}
    </div>
  );
}
