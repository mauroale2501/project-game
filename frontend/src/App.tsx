import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Level1 from "./components/Level1";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import LastPage from "./components/LastPage";
import Level2 from "./components/Level2";
import { useState } from "react";

function App() {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [levelTime, setLevelTime] = useState<number>(0);

  const handleLevelSelection = (level: number, time: number): void => {
    setSelectedLevel(level);
    setLevelTime(time);
  };

  return (
    <div className="container-app">
      <Nav />
      <Routes>
        <Route
          path="/"
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
