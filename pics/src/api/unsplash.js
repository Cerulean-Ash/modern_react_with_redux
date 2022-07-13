import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2zPiqmVnScxVCaCgfMtqpO3rYlaV0n6BoqNg9mqQcow",
  },
});
