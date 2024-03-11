import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
type InputProps = {
  currentLevel: number;
};

const Input = ({ currentLevel }: InputProps) => {
  const [nextLevelLink, setNextLevelLink] = useState<string>("");
  let nextLevel = "";
  const mockFetchNextLevel = async () => {
    if (currentLevel === 2) {
      nextLevel = "/last";
    } else {
      const nextNumber = currentLevel + 1;

      nextLevel = "/level" + nextNumber.toString();
      console.log("nextLevel:" + nextLevel);
    }
    const mockData = { level: nextLevel };

    return mockData;
  };
  console.log("nextLevel" + nextLevel);

  const fetchNextLevel = async () => {
    try {
      const response = await mockFetchNextLevel();
      setNextLevelLink(response.level);
    } catch (error) {
      console.error("Error fetching hint:", error);
    }
  };
  // const fetchLinkLevel = async () => {
  //   let nextLevel = "";
  //   if (currentLevel === 2) {
  //     nextLevel = "last";
  //   } else {
  //     const nextNumber = currentLevel + 1;
  //     nextLevel = "level" + nextNumber.toString();
  //   }
  //   try {
  //     const response = await fetch(`/api/${nextLevel}`);
  //     if (!response.ok) {
  //       throw new Error("Failed fetch");
  //     }
  //     const data = await response.json();
  //     setNextLevelLink(data.hint);
  //   } catch (error) {
  //     console.error("Error fetching hint:", error);
  //   }
  // };

  return (
    <>
      <Form className="form-level">
        <div className="input-and-label">
          <Form.Label htmlFor="key-level">Key:</Form.Label>
          <Form.Control
            type="text"
            id="key-level"
            aria-describedby="key-level"
          />
        </div>
        <Button onClick={fetchNextLevel} className="button-level1">
          Submit
        </Button>
        {nextLevelLink && <Link to={nextLevelLink}>{nextLevelLink}</Link>}
      </Form>
    </>
  );
};

export default Input;
