import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Notes from "./components/Notes";
import NoteModal from "./components/NoteModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <NoteModal open={true} />
      <Notes />
    </div>
  );
}

export default App;
