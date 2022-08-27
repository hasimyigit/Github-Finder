import React,{useContext} from "react";
import Note from "./Note";
import NotesContext from '../context/notes-context'

const Notes = () => {
  const {notes} = useContext(NotesContext)
  return (
   <React.Fragment>
      {notes.map((note,i)=> (<Note  key={i} note={note} />))}
      </React.Fragment>
    )
};

export default Notes