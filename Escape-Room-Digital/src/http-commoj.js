//EndPoint User Headers

import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:8000",
  headers: {
    "Content-type": "application/json"
  }
});