import React, { useState, useEffect, useReducer } from "react";
import NoteList from "./NoteList";
import "../styles/Notes.css";
import { notesReducer } from "../reducers/Notes";
import NotesContext from "../context/notes-context";
const Notes = props => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  //   const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  //   const removeNote = title => {
  //     let notesCount = notes.length;
  //     dispatch({ type: "REMOVE_NOTE", title });
  //     // setNotes(notes.filter(note => note.title !== title));
  //     props.incrementNotes(notesCount - 1);
  //   };
  const addNote = () => {
    dispatch({ type: "ADD_NOTE", title: noteTitle, body: noteBody });
    // setNotes([...notes, { title: noteTitle, body: noteBody }]);

    props.incrementNotes();
  };
  //loading notes from localstorage if any
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      //   setNotes(storedNotes);
      dispatch({ type: "POPULATE_NOTES", notes: storedNotes });
      props.incrementNotes(storedNotes.length);
    }
  }, []);
  //storing notes in local storage for any changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{ notes, dispatch, incrementNotes: props.incrementNotes }}
    >
      <div className="notes-container">
        <div className="add-note">
          <h3 className="m-heading">Add a Note</h3>
          <div className="add-note-item">
            <label htmlFor="title">Note Title</label>
            <input
              placeholder="Title"
              name="title"
              id="title"
              value={noteTitle}
              onChange={e => setNoteTitle(e.target.value)}
            ></input>
          </div>
          <div className="add-note-item">
            <label htmlFor="body">Note Message</label>
            <textarea
              rows="2"
              placeholder="Message"
              name="body"
              id="body"
              value={noteBody}
              onChange={e => setNoteBody(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className="display-notes">
          <h3 className="m-heading text-center">Notes added</h3>
          <NoteList />
        </div>
      </div>
    </NotesContext.Provider>
  );
};
export default Notes;
