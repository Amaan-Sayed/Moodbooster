import React, { useState } from "react";
import { useStickyState } from "./useStickyState";
import { parseISO, startOfTomorrow } from "date-fns";

const Timer = ({ resetVids }) => {
  let now = new Date();
  const [tomorrow, setTomorrow] = useStickyState(
    startOfTomorrow().toISOString(),
    "tomorrow"
  );
  const [countdown, setCountdown] = useState();

  // Timer that updates video limit every new day
  const countdownTimer = () => {
    const pad = (num) => ("0" + parseInt(num)).substr(-2);

    const tick = () => {
      if (now > parseISO(tomorrow)) {
        setTomorrow(startOfTomorrow());
        resetVids();
      }

      let remain = (parseISO(tomorrow) - now) / 1000;
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
      <p className="countdown">You'll get 3 new videos in {countdown}</p>
    </div>
  );
};

export default Timer;
