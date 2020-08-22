import axios from "axios";
export default axios.create({
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});
