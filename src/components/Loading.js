import React, { Component, useContext } from "react";
import GithubContext from "../context/github/github-context";
import loading from "./loading.gif";


export const Loading = (WrappedComponent) => {

 return function LoaderHoc() {

    const context = useContext(GithubContext);
    return context.state.loading == true ? (
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    ) : (
      <WrappedComponent />
    );
  };
};
