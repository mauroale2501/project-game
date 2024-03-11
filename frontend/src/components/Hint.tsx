import { useState } from "react";
import { Button } from "react-bootstrap";

const Hint = () => {
  const [hint, setHint] = useState("");

  const fetchHint = async () => {
    try {
      const response = await fetch("/api/hints");
      if (!response.ok) {
        throw new Error("Failed fetch");
      }
      const data = await response.json();
      setHint(data.hint);
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  }; // need to implement cut time in half

  return (
    <div>
      <Button onClick={fetchHint}>Get Hint</Button>
      {hint && <p>{hint}</p>}
    </div>
  );
};

export default Hint;
