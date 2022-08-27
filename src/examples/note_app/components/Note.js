
import React,{useContext} from "react";
import NotesContext from '../context/notes-context'

const Note = ({note:{title,body}}) => {
    const {dispatch} = useContext(NotesContext);
  return (
    <tr>
    <td style={{ width: "40%" }}>{title}</td>
    <td>{body}</td>
    <td style={{ width: "3%" }}>
      <button
        onClick={() =>  dispatch({ key: "REMOVE_NOTE", title })}
        className="btn btn-sm btn-danger"
      >
        <i className="far fa-times"></i>
      </button>
    </td>
  </tr>
    )
};

export default Note