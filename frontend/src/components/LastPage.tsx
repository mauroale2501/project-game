import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

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

  return (
    <div>
      <h1>Last Page</h1>
      <Button onClick={fetchCurrentGames}>get results</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Level</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {currentGames.map((game) => (
            <tr key={game.id}>
              <td>{game.sessionId}</td>
              <td>{game.levelId}</td>
              <td>{game.startDate}</td>
              <td>{game.endDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LastPage;
