import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSimple = () => {
  return (
    <div className="home-simple">
      <main>
        <h1>Welcome to the Game</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa, minus dolor tempore quam impedit voluptatem, dicta corporis
          sunt magnam, commodi consequuntur distinctio! Labore adipisci
          reiciendis, error sapiente pariatur iste!
        </p>
        <Link to="/Home">
          <Button>Start</Button>
        </Link>
      </main>
    </div>
  );
};

export default HomeSimple;
