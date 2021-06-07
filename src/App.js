import "./App.css";

import Header from "./components/Header";
import Notes from "./components/Notes";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Notes />
    </div>
  );
}
