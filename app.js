const express = require("express");
const app = express();

const router = require("./routes/routes");

app.use(express.json());
app.use("/api", router);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
