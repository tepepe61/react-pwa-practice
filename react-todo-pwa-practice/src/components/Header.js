import React, { useContext, useState } from "react";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  // 1. createContextがあるからuseContextがある。対の概念。
  // 参照できるのはcreateContextが書かれたファイルのProviderで渡してるvalueの値
  const currentUser = useContext(AuthContext);

  return (
    <header>
      ヘッダー
      <button type="button" onClick={signInWithGoogle}>
        ログイン
      </button>
    </header>
  );
};

export default Header;
