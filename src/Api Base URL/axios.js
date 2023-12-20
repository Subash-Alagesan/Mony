import axios from "axios";

const app = axios.create({ baseURL: "http://localhost:4010" });
export default app;
