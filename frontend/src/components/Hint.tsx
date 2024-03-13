import { useState } from "react";
import { Button } from "react-bootstrap";

type HintProps = {
  onReduceTime: () => void;
  currentLevel: number;
};

const Hint = ({ onReduceTime, currentLevel }: HintProps) => {
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
      onReduceTime();
      setLastHintId(lastHintId + 1);
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };

  return (
    <div>
      <Button onClick={fetchHint}>Get Hint</Button>
      {hint && <p>{hint}</p>}
    </div>
  );
};

export default Hint;
