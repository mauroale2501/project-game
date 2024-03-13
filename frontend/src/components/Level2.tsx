import { Button } from "react-bootstrap";
import Hint from "./Hint";
import Input from "./Input";
import Timer from "./Timer1";
import "../styles/Level2.css";
import { useEffect, useState } from "react";

type Level2Props = {
  initialTime: number;
};

const Level2 = ({ initialTime }: Level2Props) => {
  const [keyLevel2, setKeyLevel2] = useState();
  const [updateTime, setUpdateTime] = useState(initialTime);
  const level = 1;

  const fetchLevel2 = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/keyLevel/${level}`
      );
      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const data = await response.json();
      setKeyLevel2(data.message);
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
        <div className="button-level2">
          <Button onClick={fetchLevel2}>Pass to next level</Button>
          {keyLevel2 && <p>{keyLevel2}</p>}
        </div>
      </div>
      <section className="hint-level2">
        <h2>Rules of Hint:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. autem dicta
          quod minus porro.
        </p>
        <Hint currentLevel={2} onReduceTime={reduceTime} />
      </section>
      <div className="input-level2">
        <Input currentLevel={2} />
      </div>
    </div>
  );
};

export default Level2;
