import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { startTimer } from "./startTimer";

type HomeProps = {
  onSelectLevel: (level: number, time: number) => void;
};

const dataLevels = [
  {
    id: 1,
    time: "(10 minutes)",
    title: "Easy",
    description:
      "Welcome to the Easy Level! You have 10 minutes to solve the puzzles and complete this level. Use your skills and logic to find the solution!. Good luck, and let the challenge begin!",
  },
  {
    id: 2,
    time: "(7 minutes)",
    title: "Intermediate",
    description:
      "Welcome to the Intermediate Level! This level presents a bit more challenge. You have 7 minutes to solve the puzzles and advance to the next stage. Are you ready to test your skills?",
  },
  {
    id: 3,
    time: "(4 minutes)",
    title: "Advanced",
    description:
      "Welcome to the Advanced Level! You have 4 minutes to crack the codes. This level is designed for the true puzzle masters. Prepare yourself for the ultimate challenge!",
  },
];

const Home = ({ onSelectLevel }: HomeProps) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [, setSelectedTime] = useState<number | null>(null);

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
    if (selectedLevel !== null) {
      const time = getLevel(selectedLevel);
      setSelectedTime(time);
      onSelectLevel(selectedLevel, time);
      startTimer(1);
    } else {
      console.error("You must select a level to continue");
    }
  };

  const handleLevelSelection = (level: number) => {
    setSelectedLevel(level);
  };

  return (
    <section id="chooseLevel" className="block level-block">
      <Container fluid>
        <div className="title-holder">
          <h2 className="home-welcome-title">Welcome to the Game</h2>
          <p className="home-choose-text">
            Choose your difficulty level and start the adventure!
          </p>
        </div>
        <Row>
          {dataLevels.map((data) => (
            <Col sm={4} key={data.id}>
              <div className="holder">
                <Card>
                  <Card.Body>
                    <time>{data.time}</time>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button
                      id={`button-${data.title.toLowerCase()}`}
                      onClick={() => handleLevelSelection(data.id)}
                      className={selectedLevel === data.id ? "active" : ""}
                    >
                      {data.title}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="home-buttons-star d-flex justify-content-center">
        <Link to="/level1">
          <Button
            className="button-start"
            onClick={() => handleStartButton()}
            disabled={!selectedLevel}
          >
            Start Demo
          </Button>
        </Link>
        {/* <Link to="/last">
          <Button className="button-subscribe">Subscribe</Button>
        </Link> */}
      </div>
    </section>
  );
};

export default Home;
