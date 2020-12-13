import React, { useEffect, useState } from "react";

// Custom hook to persist data
const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

const Main = () => {
  // State
  const [videoId, setVideoId] = useStickyState("", "videoId");
  const [numLeft, setNumLeft] = useStickyState(2, "numLeft");

  // Constants
  const API_KEY = process.env.REACT_APP_API_KEY;
  const CHANNEL_ID = "UCmh5gdwCx6lN7gEC20leNVA";
  const RESULT = 50;
  const ORDER = [
    "date",
    "rating",
    "relevance",
    "title",
    "videoCount",
    "viewCount",
  ];
  const random = Math.floor(Math.random() * ORDER.length);
  const randomVidNum = Math.floor(Math.random() * 50);
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=${
    ORDER[random]
  }&maxResults=${RESULT}`;

  // Copy this URL for better customization
  // "https://www.youtube.com/embed/?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;controls=1&amp;disablekb=0&amp;egm=0&amp;iv_load_policy=3&amp;showsearch=0&amp;showinfo=0&amp;fs=1&amp;hd=1&amp;modestbranding=1&amp;autohide=1&amp;playsinline=1&amp;origin=https%3A%2F%2Fgivemearandomdaviddobrikvlog.com&amp;widgetid=1"

  // David Vlog Query
  const query = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        console.log("hi");
        const VIDEO_RESULT = result.items[randomVidNum].id.videoId;
        setVideoId(`https://www.youtube.com/embed/${VIDEO_RESULT}`);
      })
      .catch((error) => console.error(error));
  };

  // Initial query if there's no previous video
  useEffect(() => {
    videoId === "" && query();
  }, []);

  // console.log(numLeft);
  // window.localStorage.clear();

  return (
    <div className="main">
      {/* Youtube Player */}
      <iframe
        id="vid"
        title="video"
        className="youtubeDiv"
        src={videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Button & status for a new video */}
      <div>
        <button
          className="button"
          onClick={() => numLeft > 0 && (setNumLeft(numLeft - 1), query())}
        >
          New Vlog!
        </button>
        <button className="button" onClick={() => (setNumLeft(2), query())}>
          Reset
        </button>

        <p className="amount">{numLeft} left today</p>
      </div>
    </div>
  );
};

export default Main;
