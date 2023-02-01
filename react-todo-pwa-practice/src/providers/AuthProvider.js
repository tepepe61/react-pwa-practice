import React, { useState, useEffect } from "react";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // 1. このファイルでcurrentUserの概念を定義してる
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 2. useEffectのフックを使うことでfirebaseからimportしたauthをもとにログインしたらcurrentUserにログイン情報を定義
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // 3. 結局、Context名がkeyで、渡したい値をvalueに定義してるイメージ
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
