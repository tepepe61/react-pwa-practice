import * as Api from "../service/api";
import Checkbox from "@material-ui/core/Checkbox";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ListItemIcon,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: "auto",
  },
  ul: {
    paddingLeft: 0,
    listStyle: "none",
  },
  list: {
    justifyContent: "space-between",
  },
}));

const ToDoList = (props) => {
  const classes = useStyles();
  const deleteHandle = async (id) => {
    await Api.todoDelete(id);
    props.fetch();
  };

  const checkHandle = async (id) => {
    await Api.toggleComplete(id);
    props.fetch();
  };

  const ToDoList = props.todos.map((todo) => {
    // 1. ListItemxxxx でhtmlの要素っぽい名前書くんだね
    return (
      <ListItem key={todo.id}>
        <ListItemIcon>
          <Checkbox
            checked={todo.isComplete}
            onChange={() => {
              checkHandle(todo.id);
            }}
          />
        </ListItemIcon>
        <ListItemText primary={todo.content} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteHandle(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <ul className={classes.ul}>{ToDoList}</ul>
    </div>
  );
};
export default ToDoList;
