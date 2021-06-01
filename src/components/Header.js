import "./Header.css";
import logo from "../logo.svg";

import ActionsMenu from "./ActionsMenu";

function Header(props) {
  return (
    <header>
      <h1>
        <img src={logo} className="app-logo" alt="React Logo" />
        <span>React Notes</span>
      </h1>
      <ActionsMenu />
    </header>
  );
}

export default Header;
