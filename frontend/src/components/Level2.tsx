import { Button } from "react-bootstrap";
import Hint from "./Hint";
import Input from "./Input";
import Timer from "./Timer";
import "../styles/Level2.css";

type Level2Props = {
  initialTime: number;
};

const Level2 = ({ initialTime }: Level2Props) => {
  return (
    <div className="all-level2">
      <div className="time-pass-level">
        <div className="timer">
          <Timer initialTime={initialTime} />
        </div>
        <div className="button-level2">
          <Button>Pass to next level</Button>
        </div>
      </div>
      <section className="hint-level2">
        <h2>Rules of Hint:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. autem dicta
          quod minus porro.
        </p>
        <Hint />
      </section>
      <div className="input-level2">
        <Input currentLevel={2} />
      </div>
    </div>
  );
};

export default Level2;
