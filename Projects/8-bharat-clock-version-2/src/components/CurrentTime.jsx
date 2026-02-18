import { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {currentTime.toLocaleString()}
    </p>
  );
}

export default CurrentTime;
