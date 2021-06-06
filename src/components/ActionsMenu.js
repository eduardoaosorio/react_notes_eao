import { useContext } from "react";
import "./ActionsMenu.css";
import { Context } from "../Context";

import sprite from "../sprite.svg";

export default function ActionsMenu(props) {
  const { toggleModal } = useContext(Context).actions;

  console.log(toggleModal);
  return (
    <div className="actions-menu">
      <div className="create-note" role="button" onClick={toggleModal}>
        <svg className="create-note__icon">
          <use href={sprite + "#plus"} />
        </svg>
      </div>
      <div
        className="show-trash"
        role="button"
        onClick={() => console.log("click")}
      >
        <svg className="show-trash__icon">
          <use href={sprite + "#empty-trash"} />
        </svg>
      </div>
      <div className="search">
        <input className="search__input" placeholder="search notes"></input>
        <svg className="search__icon">
          <use href={sprite + "#loupe"} />
        </svg>
      </div>
    </div>
  );
}
