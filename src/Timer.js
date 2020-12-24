import React, { useEffect, useState } from "react";
import { formatISO } from "date-fns";
import { useStickyState } from "./useStickyState";

const Timer = ({ setVidsLeft }) => {
  const [countdown, setCountdown] = useState();
  //   const [now, setNow] = useStickyState(formatISO(new Date()), "nowDate");
  const [restart, setRestart] = useStickyState(
    formatISO(new Date().setHours(16, 40, 0)),
    "restartDate"
  );

  const countdownTimer = () => {
    let start = new Date();
    start.setHours(17, 0, 0);

    const pad = (num) => ("0" + parseInt(num)).substr(-2);

    const tick = () => {
      let now = new Date();

      if (now > start) {
        start.setDate(start.getDate() + 1);
      }

      //   FIGURE THIS OUT
      if (now.toISOString() === start.toISOString()) {
        console.log("RESET");
        // setVidsLeft(2);
      }

      let remain = (start - now) / 1000;
      let hh = pad((remain / 60 / 60) % 60);
      let mm = pad((remain / 60) % 60);
      let ss = pad(remain % 60);

      setCountdown(hh + ":" + mm + ":" + ss);
    };

    setTimeout(tick, 1000);
  };

  countdownTimer();

  return (
    <div>
      <p className="amount">{countdown} until refresh</p>
      {/* <p className="amount">{date}</p> */}
      {/* <button className="button" onClick={() => setVidsLeft(2)}>
        Reset
      </button> */}
    </div>
  );
};

export default Timer;
