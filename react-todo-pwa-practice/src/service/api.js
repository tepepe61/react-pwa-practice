import firebase from "firebase";
import { db } from "./firebase";

export const addTodo = (content, uid) => {
  db.collection("todo").add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const initGet = async (uid) => {
  const todo = await db
    .collection("todo")
    .orderBy("createdAt", "desc")
    .where("uid", "==", uid);

  return todo.get().then((snapShot) => {
    let todos = [];

    snapShot.forEach((doc) => {
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete,
      });
    });
    return todos;
  });
};

export const todoDelete = (id) => {
  db.collection("todo")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

export const toggleComplete = async (id) => {
  let todo = await db.collection("todo").doc(id).get();

  return db
    .collection("todo")
    .doc(id)
    .update({
      isComplete: todo.data().isComplete ? false : true,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};
