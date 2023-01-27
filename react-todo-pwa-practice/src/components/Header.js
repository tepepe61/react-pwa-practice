import React from "react";
import { signInWithGoogle } from "../service/firebase";

const Header = () => {
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
