import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15909c44063849609f891eb214fa902c"
  }
});
