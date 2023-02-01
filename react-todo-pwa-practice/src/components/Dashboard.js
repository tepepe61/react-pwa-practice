import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import * as Api from "../service/api";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");

  const formRender = () => {
    if (dig(currentUser, "currentUser", "uid")) {
      return (
        <form>
          <input
            placeholder="ToDoName"
            value={inputName}
            onChange={(event) => setInputName(event.currentTarget.value)}
          ></input>
          <button type="button" onClick={() => post()}>
            追加
          </button>
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

  const post = () => {
    Api.addTodo(inputName, currentUser.currentUser.uid);
    setInputName("");
  };

  return <div>{formRender()}</div>;
};

export default Dashboard;
