import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import * as Api from "../service/api";
import ToDoList from "./ToDoList";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "space-between",
    marginTop: 40,
  },
  form: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    marginBottom: 40,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  input: {
    marginRight: 10,
  },
}));

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

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
        <form className={classes.form}>
          <TextField
            placeholder="ToDoName"
            value={inputName}
            className={classes.input}
            onChange={(event) => setInputName(event.currentTarget.value)}
          ></TextField>
          <Button
            variant="contained"
            type="button"
            color="primary"
            size="small"
            disabled={inputName.length > 0 ? false : true}
            onClick={() => post()}
          >
            追加
          </Button>
        </form>
      );
    } else {
      return (
        <Button variant="inherit" type="button" onClick={signInWithGoogle}>
          ログイン
        </Button>
      );
    }
  };

  const post = async () => {
    await Api.addTodo(inputName, currentUser.currentUser.uid);
    await setInputName("");
    fetch();
  };

  return (
    <div className={classes.root}>
      {formRender()}
      <ToDoList todos={todos} fetch={fetch} />
    </div>
  );
};

export default Dashboard;
