import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import "../styles/NoteItem.css";
const NoteItem = ({ title, body }) => {
  const { notes, dispatch, incrementNotes } = useContext(NotesContext);
  const removeNote = () => {
    dispatch({ type: "REMOVE_NOTE", title });
    incrementNotes(notes.length - 1);
  };
  return (
    <div className="note-item">
      <div>
        <h3>{title}</h3>
        <button onClick={removeNote}>X</button>
      </div>
      <br />
      <p>{body}</p>
    </div>
  );
};
export default NoteItem;
