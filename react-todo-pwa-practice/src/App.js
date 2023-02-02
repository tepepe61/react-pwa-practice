import logo from "./logo.svg";
import "./App.css";
import "./service/firebase";
import Header from "./components/Header";
// 1. Dashboard側でdefault exportを使用してないから{}でimportしてる。良し悪しは意見ある.
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./providers/AuthProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
