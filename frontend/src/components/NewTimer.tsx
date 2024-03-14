// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const NewTimer = () => {
//   const [sessionId] = useState<string>(() => {
//     const storedSessionId = localStorage.getItem("sessionId");
//     if (storedSessionId) {
//       return storedSessionId;
//     }
//     const newSessionId = uuidv4();
//     localStorage.setItem("sessionId", newSessionId);
//     return newSessionId;
//   });
//   const [timerIdString, setTimerIdString] = useState<string>("");
//   // const [startDate, setStartDate] = useState<string>("");

//   const startTimer = () => {
//     // const now = new Date();
//     // const localDateTimeString = now.toLocaleString("se-SE", {
//     //   timeZone: "Europe/Stockholm",
//     // });
//     // setStartDate(localDateTimeString);
//     const level = 2;
//     const requestBody = {
//       userId: sessionId,
//       // startDate: localDateTimeString,
//       level: level,
//     };

//     fetch("http://localhost:8080/api/startTimer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Error start");
//         }
//       })
//       .then((data) => {
//         const timerIdString = String(data);
//         setTimerIdString(timerIdString);
//         console.log("ID timer from backend", timerIdString);
//       })
//       .catch((error) => {
//         console.error("Error timer", error);
//       });
//   };

//   const stopTimer = (timerIdString: string) => {
//     const now = new Date();
//     const localDateTimeString = now.toLocaleString("se-SE", {
//       timeZone: "Europe/Stockholm",
//     });

//     const level = 2;
//     const requestBody = {
//       userId: sessionId,
//       endDate: localDateTimeString,
//       level: level,
//       gameId: timerIdString,
//       // startDate: startDate,
//     };

//     fetch("http://localhost:8080/api/stopTimer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error stop");
//         }
//         console.log("Stop time successful");
//       })
//       .catch((error) => {
//         console.error("Error stopTimer", error);
//       });
//   };

//   return (
//     <>
//       <div>
//         <button onClick={startTimer}>iniciar</button>
//         <button onClick={() => stopTimer(timerIdString)}>parar</button>
//       </div>
//     </>
//   );
// };

// export default NewTimer;
