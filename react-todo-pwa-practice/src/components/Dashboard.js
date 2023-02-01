import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import * as Api from "../service/api";
import ToDoList from "./ToDoList";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch();
    // 1. useEffectの第1引数に無名関数を定義することで、第2引数のcurrentUserのstateに変更があった場合一度だけ無名関数が発火する
  }, [currentUser]);

  const fetch = async () => {
    if (dig(currentUser, "currentUser", "uid")) {
      const data = await Api.initGet(currentUser.currentUser.uid);
      await setTodos(data);
    }
  };

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

  const post = async () => {
    await Api.addTodo(inputName, currentUser.currentUser.uid);
    await setInputName("");
    fetch();
  };

  return (
    <div>
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
};

export default Dashboard;
