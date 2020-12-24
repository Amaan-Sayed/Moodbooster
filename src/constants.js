const API_KEY = process.env.REACT_APP_API_KEY;
const CHANNEL_ID = "UCmh5gdwCx6lN7gEC20leNVA";
const ORDER = [
  "date",
  "rating",
  "relevance",
  "title",
  "videoCount",
  "viewCount",
];
const random = Math.floor(Math.random() * ORDER.length);

export const randomVidNum = Math.floor(Math.random() * 50);
export const URL = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`;
// export const URL = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${CHANNEL_ID}&key=${API_KEY}&part=snippet&maxResults=50`;
export const TEST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UCmh5gdwCx6lN7gEC20leNVA&key=${API_KEY}`;

// export const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=${
//   ORDER[random]
// }&maxResults=${50}`;

// Copy this URL for better customization
// "https://www.youtube.com/embed/?rel=0&amp;autoplay=1&amp;enablejsapi=1&amp;controls=1&amp;disablekb=0&amp;egm=0&amp;iv_load_policy=3&amp;showsearch=0&amp;showinfo=0&amp;fs=1&amp;hd=1&amp;modestbranding=1&amp;autohide=1&amp;playsinline=1&amp;origin=https%3A%2F%2Fgivemearandomdaviddobrikvlog.com&amp;widgetid=1"
