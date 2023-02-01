import React, { useContext, useState } from "react";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  // 1. createContextがあるからuseContextがある。対の概念。
  // 参照できるのはcreateContextが書かれたファイルのProviderで渡してるvalueの値
  const { currentUser } = useContext(AuthContext);

  const buttonRender = () => {
    if (currentUser) {
      return (
        <button type="button" onClick={logOut}>
          ログアウト
        </button>
      );
    } else {
      return (
        <button type="button" onClick={signInWithGoogle}>
          ログイン
        </button>
      );
    }
  };

  return <header>{buttonRender()}</header>;
};

export default Header;
