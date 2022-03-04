import axios from "axios";
export default axios.create({
  baseURL: "https://smartlandingpages.lacedagency.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});
