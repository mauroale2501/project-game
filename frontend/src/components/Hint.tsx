import { useState } from "react";
import { Button } from "react-bootstrap";

type HintProps = {
  onReduceTime: () => void;
};

const Hint = ({ onReduceTime }: HintProps) => {
  const [hint, setHint] = useState("");

  const mockFetchHint = async () => {
    const mockData = { hint: "mock hint" };
    return mockData;
  };

  const fetchHint = async () => {
    try {
      // const response = await fetch("http://localhost:8080/api/hints");
      const response = await mockFetchHint();
      // if (!response.ok) {
      //   throw new Error("Failed fetch");
      // }
      // const data = await response.json();
      setHint(response.hint);
      onReduceTime();
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
