import { v4 as uuidv4 } from "uuid";

export const startTimer = async (level: number) => {
  const sessionId = localStorage.getItem("sessionId") || uuidv4();
  // const level = 5;
  const requestBody = {
    userId: sessionId,
    level: level,
  };

  try {
    const response = await fetch("http://localhost:8080/api/startTimer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Error startt");
    }

    const data = await response.json();
    if (!data) {
      throw new Error("Empty or invalid response data");
    }
  } catch (error) {
    console.error("Error timer", error);
    throw error;
  }
};
