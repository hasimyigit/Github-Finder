import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/alert-context";
import GithubContext from "../context/github/github-context";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const {  searchUsers, clearUsers, state } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const onSubmit = (e) => {
    
    e.preventDefault();
    if (keyword == "") {
      setAlert("Anahtar Kelime Girin..", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={keyword}
            onChange={({ target: { value } }) => {
              setKeyword(value);
            }}
            className="form-control"
          />
        </div>
      </form>

      {state.users.length > 0 && ( 
        <button
          onClick={clearUsers}
          className="btn btn-secondary btn-sm btn-block mt-2"
        >
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
