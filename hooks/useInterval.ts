import { useEffect, useState } from "react";

function useInterval(handler: any, interval: number) {
  const [intervalId, setIntervalId] = useState<any>();

  useEffect(() => {
    const id = setInterval(handler, interval);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return () => clearInterval(intervalId);
}

export default useInterval;
