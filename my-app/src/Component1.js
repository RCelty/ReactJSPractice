import { useState, useEffect } from "react";

function Component1() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCountDown((c) => c - 1);
      console.log("count");
    }, 1000);

    console.log("render");

    return () => {
      console.log("unmount");
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default Component1;
