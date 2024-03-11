import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

type HomeProps = {
  onSelectLevel: (level: number, time: number) => void;
};
const Home = ({ onSelectLevel }: HomeProps) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const getLevel = (level: number) => {
    switch (level) {
      case 1:
        return 600;
      case 2:
        return 420;
      case 3:
        return 240;
      default:
        return 0;
    }
  };
  const handleStartButton = () => {
    try {
      if (selectedLevel !== null) {
        const time = getLevel(selectedLevel);
        onSelectLevel(selectedLevel, time);
      } else if (selectedLevel === null) {
        console.error("asdasdas");
        throw new Error("You must select a level to continue");
      } //chequear estos errores dps
    } catch (err) {
      throw new Error("You must select a level to continue");
    }
  };

  return (
    <div className="home-main">
      <section className="home-welcome">
        <h1 className="home-welcome-title">Welcome to the Game</h1>
        <p className="home-choose-text">
          Choose your difficulty level and start the adventure!
        </p>
      </section>
      <section className="home-levels">
        <p className="home-rules-level">Difficulty:</p>
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={[]}
          className="buttons-levels"
        >
          <ToggleButton
            id="button-easy"
            value={1}
            onChange={() => setSelectedLevel(1)}
          >
            Easy (10 minutes)
          </ToggleButton>
          <ToggleButton
            id="button-intermediate"
            value={2}
            onChange={() => setSelectedLevel(2)}
          >
            Intermediate (7 minutes)
          </ToggleButton>
          <ToggleButton
            id="button-advanced"
            value={3}
            onChange={() => setSelectedLevel(3)}
          >
            Advanced (4 minutes)
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="home-buttons-start">
          <Link to="/level1">
            <Button className="button-start" onClick={handleStartButton}>
              Start Demo
            </Button>
          </Link>
          <Link to="/last">
            <Button className="button-subscribe">Subscribe</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
