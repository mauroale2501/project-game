// import React, { useState, useEffect } from "react";

// const CountdownTimer: React.FC = () => {
//   const [startTime, setStartTime] = useState<number | null>(null);
//   const [endTime, setEndTime] = useState<number | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/start-time")
//       .then((response) => response.json())
//       .then((data) => setStartTime(data.startTime))
//       .catch((error) => console.error("Error fetching start time:", error));

//     return () => {};
//   }, []);

//   const startTimer = () => {
//     const currentTime = Math.floor(Date.now());
//     setStartTime(currentTime);
//     fetch("http://localhost:8080/api/start-time", {
//       method: "POST",
//       body: JSON.stringify({ startTime: currentTime }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to start timer");
//         }
//       })
//       .catch((error) => console.error("Error starting timer:", error));
//   };

//   const endTimer = () => {
//     const currentTime = Math.floor(Date.now() / 1000);
//     setEndTime(currentTime);
//     fetch("http://localhost:8080/api/end-time", {
//       method: "POST",
//       body: JSON.stringify({ endTime: currentTime }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to end timer");
//         }
//       })
//       .catch((error) => console.error("Error ending timer:", error));
//   };

//   const calculateTimeLeft = () => {
//     if (startTime && endTime) {
//       const totalTime = endTime - startTime;
//       const minutes = Math.floor(totalTime / 60);
//       const seconds = totalTime % 60;
//       return `${minutes.toString().padStart(2, "0")}:${seconds
//         .toString()
//         .padStart(2, "0")}`;
//     }
//     return "00:00";
//   };

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <h2>Time Left: {calculateTimeLeft()}</h2>
//       <button onClick={startTimer}>Start Timer</button>
//       <button onClick={endTimer}>End Timer</button>
//     </div>
//   );
// };

// export default CountdownTimer;

// import React, { useState } from "react";

// const TestTimer: React.FC = () => {
//   const initialTime = 600;
//   const [remainingTime, setRemainingTime] = useState<number>(initialTime);

//   const startTimer = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/start");
//       if (response.ok) {
//         const data = await response.json();
//         setRemainingTime(data.remainingTime);
//       } else {
//         console.error("Error starting timer:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error starting timer:", error);
//     }
//   };

//   const halfTime = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/half", {
//         method: "POST",
//       });
//       if (!response.ok) {
//         console.error("Error reducing time:", response.statusText);
//       } else {
//         setRemainingTime((prevTime) => prevTime / 2);
//       }
//     } catch (error) {
//       console.error("Error reducing time:", error);
//     }
//   };

//   return (
//     <div>
//       <div>Remaining Time: {remainingTime}</div>
//       <button onClick={startTimer}>Start Timer</button>
//       <button onClick={halfTime}>Half Time</button>
//     </div>
//   );
// };

// export default TestTimer;
