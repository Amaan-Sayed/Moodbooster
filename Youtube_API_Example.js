import React, { useEffect, useState } from "react";
import { URL } from "./constants";
import { useStickyState } from "./useStickyState";
import Timer from "./Timer";

const Main = () => {
  const [testVids, setTestVids] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [playlistId, setPlaylistId] = useState(null);

  const [numLeft, setNumLeft] = useStickyState(2, "numLeft");
  const [videoId, setVideoId] = useStickyState("", "videoId");
  const vidIDs = [
    "hWzccW4TQkg",
    "D-DMmIqigqo",
    "lqpJiZQpgu8",
    "Flwav_LIdrQ",
    "uMKI5NPU8po",
    "tMbRu3YkmJo",
  ];
  const random = Math.floor(Math.random() * vidIDs.length);

  const queryVideoPage = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=${pageToken}&maxResults=50&playlistId=${playlistId}&key=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((result) => {
        setTestVids([
          ...testVids,
          ...result.items.map((video) => video.snippet.resourceId.videoId),
        ]);
        setPageToken(result.nextPageToken);
      });
  };

  // Query for David Dobrik Video
  const query = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        const playlistId =
          result.items[0].contentDetails.relatedPlaylists.uploads;

        setPlaylistId(playlistId);
      })
      .catch((error) => console.error(error));
  };

  // Initial query if there's no previous video
  useEffect(() => {
    // videoId === "" && query();
    query();
  }, []);

  useEffect(() => {
    if (playlistId !== null && pageToken !== undefined) {
      queryVideoPage();
    }
  }, [playlistId, pageToken]);

  console.log(testVids);

  // window.localStorage.clear();

  return (
    <div className="main">
      <iframe
        id="vid"
        title="video"
        className="youtubeDiv"
        src={`https://www.youtube.com/embed/${vidIDs[random]}`}
        // src={videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Button & status for a new video */}
      <div>
        {/* <button
          className="button"
          onClick={() => numLeft > 0 && setNumLeft(numLeft - 1)}
          // onClick={() => numLeft > 0 && (setNumLeft(numLeft - 1), query())}
        >
          New Vlog!
        </button> */}
        {/* <button className="button" onClick={() => (setNumLeft(2), query())}>
          Reset
        </button> */}
        {/* <p className="amount">{numLeft} left today</p> */}
        {/* <Timer setNumLeft={(num) => setNumLeft(num)} /> */}[
        {testVids.map((item) => (
          <div>"{item}",</div>
        ))}
        ]
      </div>
    </div>
  );
};

export default Main;
