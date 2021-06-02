import "./Note.css";

import sprite from "../sprite.svg";

function Note(props) {
  return (
    <div className="note">
      <div className="note__actions-box">
        <svg className="note__icon--edit">
          <use href={sprite + "#edit"} />
        </svg>
        <svg className="note__icon--delete">
          <use href={sprite + "#delete"} />
        </svg>
      </div>
      <h2 className="note__title">Example Title</h2>
      <p className="note__text scroll">{props.text}</p>
      <p className="note__timestamp">Created on 01/01/2000 at 2:00pm</p>
    </div>
  );
}

export default Note;
