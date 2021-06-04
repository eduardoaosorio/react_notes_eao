import "./ActionsMenu.css";

import sprite from "../sprite.svg";

function ActionsMenu(props) {
  return (
    <div className="actions-menu">
      <div className="create-note">
        <button>
          <svg className="create-note__icon">
            <use href={sprite + "#plus"} />
          </svg>
        </button>
      </div>
      <div className="show-trash">
        <button>
          <svg className="show-trash__icon">
            <use href={sprite + "#empty-trash"} />
          </svg>
        </button>
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
