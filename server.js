const express = require("express");
const axiosRouter = require("./routes/axios");

const app = express();

const PORT = 3000;
app.use(express.json()); //parses the incoming req from the client and give it in a JSON format
app.use("/api/v1/", axiosRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: "false",
//     message: "404 not found ",
//   });
// });
app.listen(PORT, () => {
  console.log(`Server is listening in Port: ${PORT}`);
});
