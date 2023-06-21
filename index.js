const express = require("express");
const dbConnect = require("./config/dbConfig");
const errorMiddleware = require("./middlewares/errorMiddleware");
const routes = require("./routes/routes");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 3000;

dbConnect();

app.use(routes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
