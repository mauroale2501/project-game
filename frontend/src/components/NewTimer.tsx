import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTimer = () => {
  const [sessionId] = useState<string>(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      return storedSessionId;
    }
    const newSessionId = uuidv4();
    localStorage.setItem("sessionId", newSessionId);
    return newSessionId;
  });

  const startTimer = () => {
    const now = new Date();
    const localDateTimeString = now.toLocaleString("se-SE", {
      timeZone: "Europe/Stockholm",
    });
    const requestBody = {
      userId: sessionId,
      startDate: localDateTimeString,
    };

    fetch("http://localhost:8080/api/startTimer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => {
      console.error("Error al iniciar el temporizador:", error);
    });
  };

  return (
    <>
      <div>
        <button onClick={startTimer}>iniciar</button>
      </div>
    </>
  );
};

export default NewTimer;
