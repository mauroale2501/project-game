import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { stopTimer } from "./stopTimer";
import { startTimer } from "./startTimer";
// import { stopTimer } from "./stopTimer";
// import { startTimer } from "./startTimer";
import "../styles/Input.css";

const Input = ({ currentLevel }: { currentLevel: number }) => {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [nextLevelLink, setNextLevelLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/validateKey/${currentLevel}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: key,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to validate key");
      }
      const data = await response.json();
      setMessage(data.message);

      stopTimer(currentLevel);

      if (data.nextLevelLink) {
        setNextLevelLink(data.nextLevelLink);
      }
    } catch (error) {
      setError("Invalid Key");
    }
  };
  const handleNextLevelClick = () => {
    if (currentLevel !== 2) {
      startTimer(currentLevel + 1);
    }
  };

  return (
    <>
      <Form className="form-level">
        <div className="input-and-label">
          <Form.Label htmlFor="key-level">Key:</Form.Label>
          <Form.Control
            type="text"
            id="key-level"
            aria-describedby="key-level"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} className="button-level1">
          Submit
        </Button>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        {nextLevelLink && (
          <div className="congratulationCard">
            <p>
              Congratulations!{" "}
              <Link to={nextLevelLink} onClick={handleNextLevelClick}>
                Click Here{" "}
              </Link>
              to go to the next level.
            </p>
          </div>
        )}
      </Form>
    </>
  );
};

export default Input;
