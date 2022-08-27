import React,{useContext} from "react";
import AlertContext from "../context/alert/alert-context";


const Alert = () => {

  const {alert} = useContext(AlertContext);
  console.log(alert)
  return (
    <div className={
        alert?.type
          ? "alert alert-" + alert?.type
          : "alert alert-danger"
      }
      style={{ display: alert ? "block" : "none" }}
      role="alert"
    >
      {alert?.msg}
    </div>
  );
};

export default Alert;
