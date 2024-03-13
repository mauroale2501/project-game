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
      console.log("data luego del fetch" + data);
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
// import { useState } from "react";
// import { Button } from "react-bootstrap";

// type HintProps = {
//   onReduceTime: () => void;
// };

// const Hint: React.FC<HintProps> = ({ onReduceTime }) => {
//   const [hints, setHints] = useState<string[]>([]);
//   const [currentHintIndex, setCurrentHintIndex] = useState<number>(-1);

//   const fetchHint = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/hints");

//       if (!response.ok) {
//         throw new Error("Failed to fetch hint");
//       }

//       const data = await response.text();
//       setHints((prevHints) => [...prevHints, data]);
//       setCurrentHintIndex((prevIndex) => prevIndex + 1);
//       onReduceTime();
//     } catch (error) {
//       console.error("Error fetching hint:", error);
//     }
//   };

//   const displayHint = () => {
//     if (currentHintIndex >= 0 && currentHintIndex < hints.length) {
//       return <p>{hints[currentHintIndex]}</p>;
//     }
//     return null;
//   };

//   return (
//     <div>
//       <Button onClick={fetchHint}>Get Hint</Button>
//       {displayHint()}
//     </div>
//   );
// };

// export default Hint;
