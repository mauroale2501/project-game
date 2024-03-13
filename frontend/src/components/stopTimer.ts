export const stopTimer = (
  timerIdString: string,
  startDate: string,
  level: number
) => {
  const sessionId = localStorage.getItem("sessionId") || "";
  const now = new Date();
  const localDateTimeString = now.toLocaleString("se-SE", {
    timeZone: "Europe/Stockholm",
  });

  const requestBody = {
    userId: sessionId,
    endDate: localDateTimeString,
    level: level,
    gameId: timerIdString,
    startDate: startDate,
  };

  fetch("http://localhost:8080/api/stopTimer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error stop");
      }
      console.log("Stop time successful");
    })
    .catch((error) => {
      console.error("Error stopTimer", error);
    });
};
