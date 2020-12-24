import React, { useEffect, useState } from "react";
import { formatISO } from "date-fns";
import { useStickyState } from "./useStickyState";

const Timer = ({ resetVids }) => {
  let dateNow = new Date();

  const [countdown, setCountdown] = useState();
  const [dateTmrw, setDateTmrw] = useStickyState();

  const countdownTimer = () => {
    let start = new Date();
    start.setHours(0, 0, 0);

    const pad = (num) => ("0" + parseInt(num)).substr(-2);

    const tick = () => {
      let now = new Date();

      if (now > start) {
        start.setDate(start.getDate() + 1);
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

  useEffect(() => {}, [countdown]);

  useEffect(() => {
    let startDate = new Date();
    startDate.setHours(0, 0, 0);
    startDate.setDate(startDate.getDate() + 1);

    // Initializes reset date
    dateTmrw === undefined && setDateTmrw(startDate);

    // dateNow = formatISO(dateNow.setDate(27));

    // Resets video counter
    if (dateNow >= dateTmrw) {
      resetVids();
      setDateTmrw(startDate);
    }
  }, [dateTmrw]);

  return (
    <div>
      <p className="countdown">You'll get 3 new videos in {countdown}</p>
    </div>
  );
};

export default Timer;
