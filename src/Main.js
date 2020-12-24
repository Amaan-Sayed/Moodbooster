import React, { useEffect } from "react";
import { VIDEOS } from "./constants";
import { useStickyState } from "./useStickyState";
import Timer from "./Timer";
import MakerLink from "./Badge";

const Main = () => {
  const [selectedVid, setSelectedVid] = useStickyState(null, "selectedVid");
  const [vidsLeft, setVidsLeft] = useStickyState(2, "vidsLeft");

  // window.localStorage.clear();
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
        src={`https://www.youtube.com/embed/${selectedVid}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        // Copy this URL for better customization
        // "https://www.youtube.com/embed/?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;controls=1&amp;disablekb=0&amp;egm=0&amp;iv_load_policy=3&amp;showsearch=0&amp;showinfo=0&amp;fs=1&amp;hd=1&amp;modestbranding=1&amp;autohide=1&amp;playsinline=1&amp;origin=https%3A%2F%2Fgivemearandomdaviddobrikvlog.com&amp;widgetid=1"
      />

      {/* Manipulation Section */}
      <div>
        {/* New Vlog Button */}
        {vidsLeft !== 0 ? (
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
        ) : (
          <Timer
            resetVids={() => (setSelectedVid(VIDEOS[random]), setVidsLeft(2))}
          />
        )}

        {/* Data */}
      </div>

      <MakerLink />
    </div>
  );
};

export default Main;
