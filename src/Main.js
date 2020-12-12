import React, { useEffect, useState } from "react";

const Main = () => {
  const [videoId, setVideoId] = useState("");
  // const [queryNum, setQueryNum] = useState(1);

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

  const URL = `https://www.googleapis.com/youtube/v3/search?key=${
    process.env.REACT_APP_GOOGLE_API_KEY
  }&channelId=${CHANNEL_ID}&part=snippet,id&order=${
    ORDER[random]
  }&maxResults=${RESULT}`;

  useEffect(() => {
    // Queries a video from the Youtube API & updates the state
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        const VIDEO_RESULT = result.items[randomVidNum].id.videoId;
        setVideoId(`https://www.youtube.com/embed/${VIDEO_RESULT}`);
      })
      .catch((error) => console.error(error));
  }, []);
  // }, [queryNum]);

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
        // src="https://www.youtube.com/embed/?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;controls=1&amp;disablekb=0&amp;egm=0&amp;iv_load_policy=3&amp;showsearch=0&amp;showinfo=0&amp;fs=1&amp;hd=1&amp;modestbranding=1&amp;autohide=1&amp;playsinline=1&amp;origin=https%3A%2F%2Fgivemearandomdaviddobrikvlog.com&amp;widgetid=1"
        allowFullScreen
      />

      {/* Button & status for a new video */}
      <div>
        <button
          className="button"
          // onClick={() => setQueryNum(queryNum + 1)}
        >
          New Vlog!
        </button>
        <p className="amount">3 left today</p>
      </div>
    </div>
  );
};

export default Main;
