import "./Note.css";

import sprite from "../sprite.svg";

export default function Note({ title, text, creationDate }) {
  return (
    <div className="note">
      <div className="note__actions-box">
        <button>
          <svg className="note__icon--edit">
            <use href={sprite + "#edit"} />
          </svg>
        </button>
        <button>
          <svg className="note__icon--delete">
            <use href={sprite + "#delete"} />
          </svg>
        </button>
      </div>
      <h2 className="note__title">{title}</h2>
      <p className="note__text scroll">{text}</p>
      <p className="note__timestamp">{`Created: ${creationDate.toLocaleString()}`}</p>
    </div>
  );
}
