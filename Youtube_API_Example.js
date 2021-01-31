// import React, { useEffect, useState } from 'react';
// import { URL } from './constants';

// const queryVideoPage = () => {
//   fetch(
//     `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=${pageToken}&maxResults=50&playlistId=${playlistId}&key=${
//       process.env.REACT_APP_API_KEY
//     }`
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       setTestVids([
//         ...testVids,
//         ...result.items.map((video) => video.snippet.resourceId.videoId)
//       ]);
//       setPageToken(result.nextPageToken);
//     });
// };

// // Query for David Dobrik Video
// const query = () => {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((result) => {
//       const playlistId =
//         result.items[0].contentDetails.relatedPlaylists.uploads;

//       setPlaylistId(playlistId);
//     })
//     .catch((error) => console.error(error));
// };

// // Initial query if there's no previous video
// useEffect(() => {
//   // videoId === "" && query();
//   query();
// }, []);

// useEffect(() => {
//   if (playlistId !== null && pageToken !== undefined) {
//     queryVideoPage();
//   }
// }, [playlistId, pageToken]);
