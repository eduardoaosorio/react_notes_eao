import "./ActionsMenu.css";

import sprite from "../sprite.svg";

function ActionsMenu(props) {
  return (
    <div className="actions-menu">
      <div className="create-note">
        <svg className="create-note__icon">
          <use href={sprite + "#plus"} />
        </svg>
      </div>
      <div className="show-trash">
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

export default ActionsMenu;
