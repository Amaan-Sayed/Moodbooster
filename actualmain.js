import React, { useEffect, useState } from "react";
import { VIDEOS } from "./constants";
import { useStickyState } from "./useStickyState";
import Timer from "./Timer";

const Main = () => {
  const [numLeft, setNumLeft] = useStickyState(3, "numLeft");
  const [selectedVideo, setSelectedVideo] = useStickyState("", "videoId");

  const random = Math.floor(Math.random() * VIDEOS.length);

  // Initial query if there's no previous video
  useEffect(() => {
    // videoId === "" && query();
  }, []);

  // window.localStorage.clear();

  return (
    <div className="main">
      <iframe
        id="vid"
        title="video"
        className="youtubeDiv"
        src={`https://www.youtube.com/embed/${VIDEOS[random]}`}
        // src={videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Button & status for a new video */}
      <div>
        <button
          className="button"
          onClick={() => numLeft > 0 && setNumLeft(numLeft - 1)}
          // onClick={() => numLeft > 0 && (setNumLeft(numLeft - 1), query())}
        >
          New Vlog!
        </button>
        <button className="button" onClick={() => setNumLeft(2)}>
          Reset
        </button>
        <p className="amount">{numLeft} left today</p>
        <Timer setNumLeft={(num) => setNumLeft(num)} />
      </div>
    </div>
  );
};

export default Main;

// Copy this URL for better customization
// "https://www.youtube.com/embed/?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;controls=1&amp;disablekb=0&amp;egm=0&amp;iv_load_policy=3&amp;showsearch=0&amp;showinfo=0&amp;fs=1&amp;hd=1&amp;modestbranding=1&amp;autohide=1&amp;playsinline=1&amp;origin=https%3A%2F%2Fgivemearandomdaviddobrikvlog.com&amp;widgetid=1"
