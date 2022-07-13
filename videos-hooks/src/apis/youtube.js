import axios from "axios";

const KEY = "AIzaSyDeqACxUjO_rCDMU2qDWDh5FxlumtEyK_Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
