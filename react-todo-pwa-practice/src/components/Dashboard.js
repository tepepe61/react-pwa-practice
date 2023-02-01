import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";

export const Dashbord = () => {
  const { currentUser } = useContext(AuthContext);

  const formRender = () => {
    if (dig(currentUser, "uid")) {
      return (
        <form>
          <input placeholder="ToDoName"></input>
          <button>追加</button>
        </form>
      );
    } else {
      return (
        <button type="button" onClick={signInWithGoogle}>
          ログイン
        </button>
      );
    }
  };

  return <div>{formRender()}</div>;
};

// export default Dashbord;
