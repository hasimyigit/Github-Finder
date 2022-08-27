import axios from "axios";
import React, { useReducer,useEffect } from "react";
import GithubContext from "./github-context";
import { reducer } from "./github-reducer";

const initialState = {
    users: [],
    user: {},
    loading:true
  };
const GithubState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    if (state.users.length <= 0) {
      setTimeout(() => {
        axios.get("http://api.github.com/users").then((res) => {
          dispatch({ type: "USERS_GİTHUB", users: res.data });
        });
      }, 1000);
    }
  }, []);

  const searchUsers = (keyword) => {
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          dispatch({ type: "USERS_GİTHUB", users: res.data.items });
        });
    }, 1000);
  };

  const getUser = (username) => {
    setLoading();

    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        console.log(res.data);

        dispatch({ type: "USER_GİTHUB", user: res.data });
      });
    }, 1000);
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  const clearUsers = () => {
    dispatch({ type: "USERS_GİTHUB_CLEAR" });
  };

 

  return(
      <GithubContext.Provider value={{state,alert,searchUsers,clearUsers,getUser}}>
            {props.children}
      </GithubContext.Provider>
  )


};

export default GithubState;