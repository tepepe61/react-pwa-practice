import React, { useContext, useState } from "react";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";
import dig from "object-dig";

const Header = () => {
  // 1. createContextがあるからuseContextがある。対の概念。
  // 参照できるのはcreateContextが書かれたファイルのProviderで渡してるvalueの値
  const { currentUser } = useContext(AuthContext);

  const buttonRender = () => {
    if (dig(currentUser, "uid")) {
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

  return <header>へっだー{buttonRender()}</header>;
};

export default Header;
