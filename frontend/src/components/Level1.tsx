import { Button, Container } from "react-bootstrap";
import Timer from "./Timer";
import Hint from "./Hint";
import Input from "./Input";
import "../styles/Level1.css";
import { useState } from "react";
// import { useEffect } from "react";
// import NewTimer from "./NewTimer";

type Level1Props = {
  initialTime: number;
};
const Level1 = ({ initialTime }: Level1Props) => {
  const [key, setKey] = useState<string>("");
  const [updateTime, setUpdateTime] = useState(initialTime);

  const level = 1;

  // const fetchRefresh = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/level1");
  //     if (!response.ok) {
  //       throw new Error("Failed fetch");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching hint:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchRefresh();
  // }, []);

  const fetchKey = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/keyLevel/${level}`
      );
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
  };
  return (
    <div className="all-level1">
      <div className="timer">
        <Timer initialTime={updateTime} />
      </div>
      <div className="congrats-key">
        <h3>Congrats, you found the key!</h3>
        <p>
          Now, go back to desktop design and put the key to pass to the next
          level.
        </p>
        <Button onClick={fetchKey}>Get Key</Button>
        {key && <p className="key-level1">{key}</p>}
      </div>

      <Container className="level-uncompleted">
        <section>
          <h1>Level 1</h1>

          <p className="text-rules-level1">
            There is a hidden key in this level. Find it to go to level 2!
          </p>
        </section>
        <section>
          <h2>Hint:</h2>
          <p>Need help? Press the button to get a hint</p>
          <Hint currentLevel={1} onReduceTime={reduceTime} />
          <Input currentLevel={1} />
        </section>
      </Container>
      {/* <NewTimer /> */}
    </div>
  );
};

export default Level1;
