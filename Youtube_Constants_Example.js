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

export const TEST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UCmh5gdwCx6lN7gEC20leNVA&key=${API_KEY}`;
