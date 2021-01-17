import React from "react";
import { VIDEOS } from "./constants";
import { useStickyState } from "./useStickyState";
import Timer from "./Timer";

const Main = () => {
  let random = Math.floor(Math.random() * VIDEOS.length);
  const [selectedVid, setSelectedVid] = useStickyState(
    VIDEOS[random],
    "selectedVid"
  );
  const [vidsLeft, setVidsLeft] = useStickyState(2, "vidsLeft");

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
      {vidsLeft !== 0 ? (
        <div>
          <button
            className="button"
            onClick={() => {
              setSelectedVid(VIDEOS[random]);
              setVidsLeft(vidsLeft - 1);
            }}
          >
            New Vlog!
          </button>
          <p className="amount">{vidsLeft} vlogs left today</p>
        </div>
      ) : (
        <Timer resetVids={() => setVidsLeft(3)} />
      )}
    </div>
  );
};

export default Main;
