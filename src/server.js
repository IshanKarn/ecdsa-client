import axios from "axios";

// const prodServer = axios.create({
//   baseURL: "https://ecdsa-api.vercel.app/",
// });

// const devServer = axios.create({
//   baseURL: "http://localhost:3045",
// });

// var server;

// if (process.env.NODE_ENV === 'production') {
//   server = prodServer;
// } else {
//   server = devServer;
// }

const server = axios.create({
  baseURL: "https://ecdsa-api.vercel.app/",
});

export default server;