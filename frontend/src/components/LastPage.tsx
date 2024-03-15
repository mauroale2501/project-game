import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "../styles/LastPage.css";

interface CurrentGame {
  id: number;
  levelId: number;
  sessionId: string;
  startDate: string;
  endDate: string;
}

const LastPage: React.FC = () => {
  const [currentGames, setCurrentGames] = useState<CurrentGame[]>([]);

  const fetchCurrentGames = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/currentGames");

      if (!response.ok) {
        throw new Error("Failed to fetch current games");
      }

      const data: CurrentGame[] = await response.json();
      setCurrentGames(data);
    } catch (error) {
      console.error("Error fetching current games:", error);
    }
  };

  useEffect(() => {
    fetchCurrentGames();
  }, []);

  function calculateTimeDifference(
    startTime: string,
    endTime: string
  ): { minutes: number; seconds: number } {
    const startDate: Date = new Date(startTime);
    const endDate: Date = new Date(endTime);

    const startSeconds: number = startDate.getTime() / 1000;
    const endSeconds: number = endDate.getTime() / 1000;

    const differenceSeconds: number = endSeconds - startSeconds;

    const minutes: number = Math.floor(differenceSeconds / 60);
    const seconds: number = Math.floor(differenceSeconds % 60);

    return { minutes, seconds };
  }

  return (
    <div>
      <hr />
      <h1>Game Results</h1>
      <Button onClick={fetchCurrentGames}>get results</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Level</th>
            <th>Time Score</th>
          </tr>
        </thead>
        <tbody>
          {currentGames.map((game) => (
            <tr key={game.id}>
              <td>{game.sessionId}</td>
              <td>{game.startDate}</td>
              <td>{game.endDate}</td>
              <td>{game.levelId}</td>
              <td>
                {calculateTimeDifference(game.startDate, game.endDate).minutes}{" "}
                minutes :{" "}
                {calculateTimeDifference(game.startDate, game.endDate).seconds}{" "}
                seconds
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LastPage;
