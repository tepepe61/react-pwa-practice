import logo from "./logo.svg";
import "./App.css";
import "./service/firebase";
import Header from "./components/Header";
// 1. Dashboard側でdefault exportを使用してないから{}でimportしてる。良し悪しは意見ある.
import { Dashbord } from "./components/Dashboard";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashbord />
    </AuthProvider>
  );
}

export default App;
