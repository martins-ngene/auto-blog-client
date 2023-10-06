import { useEffect, useState } from "react";

// Function to count down values
export const useCountDownTimer = deadline => {
  const [count, setCount] = useState(deadline);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        setCount(0);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return count;
};
