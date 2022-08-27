import React, { useState, useEffect, useReducer } from "react";
import NotesContext from "../context/notes-context";
import { notesReducer } from "../reducers/notes";
import AddNoteForm from "./AddNoteForm";
import Notes from "./Notes";

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []); 
  console.log("RUN", notes);

 
  useEffect(() => {
    console.log("asd");
    const notesData = JSON.parse(localStorage.getItem("notes"));
    console.log(notesData);
    if (notesData) {
      dispatch({ key: "POPULATE_NOTES", notes: notesData });
    }
  }, []);

  
  useEffect(() => {
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

//   const removeNote = (title) => {
//     dispatch({ key: "REMOVE_NOTE", title });
//     // setNotes(notes.filter((note) => note.title !== title));
//   };

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <div className="container p-5">
        <div className="card mb-3">
          <div className="card-header">Notes</div>
          {notes && (
            <table className="table table-sm table-striped mb-0">
              <tbody>
                <Notes />
              </tbody>
            </table>
          )}
        </div>
        <div className="card mb-3">
          <div className="card-header">Add a New Note</div>
          <div className="card-body">
            <AddNoteForm />
          </div>
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default NoteApp;
