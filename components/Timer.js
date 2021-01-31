import React, { useState, useEffect } from 'react';
import { parseISO, startOfTomorrow } from 'date-fns';

const Timer = ({ resetVids, tomorrow, setTomorrow }) => {
  let now = new Date();
  const [countdown, setCountdown] = useState();

  // Timer that updates video limit every new day
  const countdownTimer = () => {
    const pad = (num) => ('0' + parseInt(num)).substr(-2);

    const tick = () => {
      if (now > parseISO(tomorrow)) {
        setTomorrow(startOfTomorrow());
        resetVids();
      }

      let remain = (parseISO(tomorrow) - now) / 1000;
      let hh = pad((remain / 60 / 60) % 60);
      let mm = pad((remain / 60) % 60);
      let ss = pad(remain % 60);

      setCountdown(hh + ':' + mm + ':' + ss);
    };

    setTimeout(tick, 1000);
  };

  countdownTimer();

  return (
    <div>
      <p className="text-xl text-white mt-10 text-center">
        You'll get 3 new videos in {countdown}
      </p>
    </div>
  );
};

export default Timer;
