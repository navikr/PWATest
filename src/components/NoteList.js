import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import NoteItem from "../components/NoteItem";
const NotesList = ({ removeNote }) => {
  const { notes } = useContext(NotesContext);
  return notes.map((note, index) => (
    <NoteItem
      key={index}
      title={note.title}
      body={note.body}
      removeNote={removeNote}
    />
  ));
};

export default NotesList;
