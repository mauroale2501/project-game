import { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/Hint.css";

type HintProps = {
  onReduceTime: () => void;
  currentLevel: number;
};

const Hint = ({ currentLevel }: HintProps) => {
  const [hint, setHint] = useState("");
  const [lastHintId, setLastHintId] = useState(0);

  const fetchHint = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/hints/${currentLevel}`
      );

      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const data = await response.text();

      setHint(data);

      setLastHintId(lastHintId + 1);
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };

  return (
    <div className="container-all-hint">
      <Button onClick={fetchHint} className="button-hint">
        Get Hint
      </Button>
      <div className="container-hint">{hint && <p>{hint}</p>}</div>
    </div>
  );
};

export default Hint;
