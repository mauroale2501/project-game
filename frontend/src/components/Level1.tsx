import { Button, Container } from "react-bootstrap";
import Timer from "./Timer";
import Hint from "./Hint";
import Input from "./Input";
import "../styles/Level1.css";

type Level1Props = {
  initialTime: number;
};
const Level1 = ({ initialTime }: Level1Props) => {
  return (
    <div className="all-level1">
      <div className="timer">
        <Timer initialTime={initialTime} />
      </div>
      <div className="congrats-key">
        <h1>Congrats</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Button>Get Key</Button>
        <p>lorem</p>
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
          <Hint />
          <Input currentLevel={1} />
        </section>
      </Container>
    </div>
  );
};

export default Level1;
