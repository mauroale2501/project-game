import { v4 as uuidv4 } from "uuid";

type StartTimerProps = {
  level: number;
};

export const startTimer = async ({ level }: StartTimerProps) => {
  const sessionId = localStorage.getItem("sessionId") || uuidv4();
  // const now = new Date();
  // const localDateTimeString = now.toLocaleString("se-SE", {
  //   timeZone: "Europe/Stockholm",
  // });

  const requestBody = {
    userId: sessionId,
    // startDate: localDateTimeString,
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
    const timerIdString = String(data);
    console.log("ID timer from backend", timerIdString);

    return { timerIdString };
  } catch (error) {
    console.error("Error timer", error);
    throw error;
  }
};