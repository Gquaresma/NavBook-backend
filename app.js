require("./config/db");

const express = require("express");
const cors = require("cors");
const books = require("./routes/bookRoute");
const purchase = require("./routes/purchaseRoute");


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/books", books);
app.use("/purchase", purchase);

app.listen(process.env.APP_URL || 3333, () => {
  console.log(app_url);
});
