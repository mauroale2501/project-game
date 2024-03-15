import { Container } from "react-bootstrap";
import Hint from "./Hint";
import Input from "./Input";
import Timer from "./Timer";
import "../styles/Level2.css";
import { useEffect, useState } from "react";

type Level2Props = {
  initialTime: number;
};

const Level2 = ({ initialTime }: Level2Props) => {
  const [keyLevel2, setKeyLevel2] = useState<string>("");
  const [updateTime, setUpdateTime] = useState(initialTime);
  const level = 2;

  const fetchLevel2 = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/keyLevel/${level}`
      );
      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const data = await response.text();
      setKeyLevel2(data);
      console.log("Good job checking the errors. you are on the right track");
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };
  useEffect(() => {
    setUpdateTime(initialTime);
  }, [initialTime]);

  const reduceTime = () => {
    setUpdateTime((updateTime: number) => Math.ceil(updateTime / 2));
    console.log("esta es la funcion");
  };
  return (
    <div className="all-level2">
      <div className="time-pass-level">
        <div className="timer">
          <Timer initialTime={updateTime} />
        </div>
        <div className="pseudo-container">
          <div className="button-level2">
            <button onClick={fetchLevel2} className="button-pass-level2">
              Pass to next level
            </button>
            <div className="key-level2">
              {keyLevel2 && <p className="text-key-level2">{keyLevel2}</p>}
            </div>
          </div>
        </div>
        <Container className="container-level2">
          <section>
            <h2>Hint:</h2>
            <p>Need help? Press the button to get a hint</p>
            <Hint currentLevel={2} onReduceTime={reduceTime} />
            <Input currentLevel={2} />
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Level2;
