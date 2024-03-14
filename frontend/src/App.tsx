import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import LastPage from "./components/LastPage";
import Level2 from "./components/Level2";
import { useEffect, useState } from "react";
import HomeSimple from "./components/HomeSimple";
// import HomeSimpleTest from "./components/HomeSimpleTest";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [, setSelectedLevel] = useState<number>(0);
  const [levelTime, setLevelTime] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);
  const handleLevelSelection = (level: number, time: number): void => {
    setSelectedLevel(level);
    setLevelTime(time);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="container-app">
      <Nav
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<HomeSimple />} />
        <Route
          path="/Home"
          element={<Home onSelectLevel={handleLevelSelection} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/level1" element={<Level1 initialTime={levelTime} />} />
        <Route path="/level2" element={<Level2 initialTime={levelTime} />} />
        <Route path="/last" element={<LastPage />} />
      </Routes>
    </div>
  );
}

export default App;
