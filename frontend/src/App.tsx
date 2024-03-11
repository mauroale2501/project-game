import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import LastPage from "./components/LastPage";
import Level2 from "./components/Level2";

function App() {
  return (
    <div className="container-app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/last" element={<LastPage />} />
      </Routes>
    </div>
  );
}

export default App;
