

export const notesReducer = (state, action) => {
    switch (action.key) {
      case "POPULATE_NOTES":
        
        return action.notes;
      case "ADD_NOTE":
          return [...state, {title:action.title, body:action.body}]
     
      case "REMOVE_NOTE":
        return state.filter((note)=>note.title !== action.title)
  
      default:
        return state;
    }
  };

  