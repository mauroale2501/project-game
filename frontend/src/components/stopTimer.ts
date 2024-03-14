export const stopTimer = (level: number) => {
  const sessionId = localStorage.getItem("sessionId") || "";
  const requestBody = {
    userId: sessionId,
    level: level,
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
