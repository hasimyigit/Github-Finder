import React, { useContext } from "react";
import User from "./User";
import { Loading } from "./Loading";
import GithubContext from "../context/github/github-context";

const  Users = () =>  {
  const {state} = useContext(GithubContext)

      return (
        <div className="container mt-3">
          <div className="row">
            {state.users.map((user, i) => (
              <User key={i} user={user} />
            ))}
          </div>
        </div>
      );
    
  
}



export default Loading(Users);
