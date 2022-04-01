const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes/routes");

app.use(cors());

app.use(express.json());
app.use("/api", router);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
