// import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { useState } from "react";
// // import NewTimer from "./NewTimer";

// type HomeProps = {
//   onSelectLevel: (level: number, time: number) => void;
// };

// const Home = ({ onSelectLevel }: HomeProps) => {
//   const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
//   const [, setSelectedTime] = useState<number | null>(null);
//   const [error, setError] = useState("");

//   const getLevel = (level: number) => {
//     switch (level) {
//       case 1:
//         return 600;
//       case 2:
//         return 420;
//       case 3:
//         return 240;
//       default:
//         return 0;
//     }
//   };

//   // const handleStartButton = () => {
//   //   try {
//   //     if (selectedLevel !== null) {
//   //       const time = getLevel(selectedLevel);
//   //       setSelectedTime(time);
//   //       onSelectLevel(selectedLevel, time);
//   //     } else {
//   //       throw new Error("You must select a level to continue");
//   //     }
//   //   } catch (err) {
//   //     throw new Error("You must select a level to continue");
//   //   }
//   // };
//   const handleStartButton = () => {
//     if (selectedLevel !== null) {
//       const time = getLevel(selectedLevel);
//       setSelectedTime(time);
//       onSelectLevel(selectedLevel, time);
//     } else {
//       setError("You must select a level to continue");
//     }
//   };

//   return (
//     <div className="home-main">
//       <section className="home-welcome">
//         <h1 className="home-welcome-title">Welcome to the Game</h1>
//         <p className="home-choose-text">
//           Choose your difficulty level and start the adventure!
//         </p>
//       </section>
//       <section className="home-levels">
//         <p className="home-rules-level">Difficulty:</p>
//         <ToggleButtonGroup
//           type="radio"
//           name="options"
//           defaultValue={[]}
//           className="buttons-levels"
//         >
//           <ToggleButton
//             id="button-easy"
//             value={1}
//             onChange={() => setSelectedLevel(1)}
//           >
//             Easy (10 minutes)
//           </ToggleButton>
//           <ToggleButton
//             id="button-intermediate"
//             value={2}
//             onChange={() => setSelectedLevel(2)}
//           >
//             Intermediate (7 minutes)
//           </ToggleButton>
//           <ToggleButton
//             id="button-advanced"
//             value={3}
//             onChange={() => setSelectedLevel(3)}
//           >
//             Advanced (4 minutes)
//           </ToggleButton>
//         </ToggleButtonGroup>
//         <div className="home-buttons-start">
//           <Link to="/level1">
//             <Button
//               className="button-start"
//               onClick={handleStartButton}
//               disabled={!selectedLevel}
//             >
//               Start Demo
//             </Button>
//             {error && <p className="error-message">{error}</p>}
//           </Link>
//           <Link to="/last">
//             <Button className="button-subscribe">Subscribe</Button>
//           </Link>
//         </div>
//         {/* <NewTimer /> */}
//       </section>
//     </div>
//   );
// };

// export default Home;
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

type HomeProps = {
  onSelectLevel: (level: number, time: number) => void;
};

const dataLevels = [
  {
    id: 1,
    time: "(10 minutes)",
    title: "Easy",
    description:
      "Welcome to the Easy Level! You have 10 minutes to solve the puzzles and complete this level. Use your wit and logic to find the solution!. Good luck, and let the challenge begin!",
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
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
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

  const handleStartButton = (level: number) => {
    const time = getLevel(level);
    setSelectedLevel(level);
    setSelectedTime(time);
    onSelectLevel(level, time);
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
                      onClick={() => handleStartButton(data.id)}
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
            onClick={() => handleStartButton(selectedLevel || 1)}
            disabled={!selectedLevel}
          >
            Start Demo
          </Button>
        </Link>
        <Link to="/last">
          <Button className="button-subscribe">Subscribe</Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
