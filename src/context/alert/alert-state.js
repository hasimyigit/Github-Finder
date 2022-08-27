import React, { useReducer } from "react";
import AlertContext from "./alert-context";
import { reducer } from "./alert-reducer";


const AlertState = (props) => {
  const [state, dispatch] = useReducer(reducer, null);


  const setAlert = (msg,type) => {
    dispatch({
        type: "SET_ALERT",
        payload: {msg,type}
    })

    setTimeout(()=> {
        dispatch({type: "REMOVE_ALERT"})
    },3000)
}

  return(
      <AlertContext.Provider value={{alert:state,setAlert}}>
            {props.children}
      </AlertContext.Provider>
  )


};

export default AlertState;