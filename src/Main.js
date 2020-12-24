import React, { useEffect } from "react";
import { VIDEOS } from "./constants";
import { useStickyState } from "./useStickyState";
import Timer from "./Timer";
import MakerLink from "./Badge";

const Main = () => {
  const [selectedVid, setSelectedVid] = useStickyState(null, "selectedVid");
  const [vidsLeft, setVidsLeft] = useStickyState(2, "vidsLeft");

  let random = Math.floor(Math.random() * VIDEOS.length);

  // Checks if there's no previous video
  useEffect(() => {
    selectedVid === null && setSelectedVid(VIDEOS[random]);
  }, []);

  return (
    <div className="main">
      {/* Youtube Player */}
      <iframe
        id="vid"
        title="video"
        className="youtubeDiv"
        src={`https://www.youtube.com/embed/${selectedVid}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* New Vlog Button */}
      {vidsLeft !== 0 && (
        <div>
          <button
            className="button"
            onClick={() =>
              vidsLeft > 0 &&
              (setSelectedVid(VIDEOS[random]), setVidsLeft(vidsLeft - 1))
            }
          >
            New Vlog!
          </button>
          <p className="amount">{vidsLeft} vlogs left today</p>
        </div>
      )}

      {/* Timer */}
      {vidsLeft === 0 && (
        <Timer
          resetVids={() => (setSelectedVid(VIDEOS[random]), setVidsLeft(2))}
        />
      )}

      {/* Badge */}
      <MakerLink />
    </div>
  );
};

export default Main;
