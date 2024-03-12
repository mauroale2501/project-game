import { Button, Container } from "react-bootstrap";
import Timer from "./Timer";
import Hint from "./Hint";
import Input from "./Input";
import "../styles/Level1.css";
import { useState } from "react";

type Level1Props = {
  initialTime: number;
};
const Level1 = ({ initialTime }: Level1Props) => {
  const [key, setKey] = useState<string>("");
  const [updateTime, setUpdateTime] = useState(initialTime);

  // const mockFetchKeyLevel1 = async () => {
  //   const mockData = { key: "mock key level 1" };
  //   return mockData;
  // };

  // const fetchKey = async () => {
  //   try {
  //     const response = await mockFetchKeyLevel1();

  //     setKey(response.key);
  //   } catch (error) {
  //     console.error("Error fetching key:", error);
  //   }
  // };
  const fetchKey = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/keyLevel1");
      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const data = await response.text();
      setKey(data);
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };
  const reduceTime = () => {
    setUpdateTime((prevTime: number) => prevTime / 2);
    console.log("esta es la funcion");
  };
  return (
    <div className="all-level1">
      <div className="timer">
        <Timer initialTime={updateTime} />
      </div>
      <div className="congrats-key">
        <h1>Congrats</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Button onClick={fetchKey}>Get Key</Button>
        {key && <p>{key}</p>}
      </div>

      <Container className="level-uncompleted">
        <section>
          <h1>Level 1</h1>
          <h2>Rules of level 1:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </section>
        <section>
          <h2>Rules of Hint:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. autem dicta
            quod minus porro.
          </p>
          <Hint onReduceTime={reduceTime} />
          <Input currentLevel={1} />
        </section>
      </Container>
    </div>
  );
};

export default Level1;
