//coremodule
const path = require("path");

//external module
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const DB_PATH =
  "mongodb+srv://suryawanshiharshit777_db_user:VqAY5qvyiP2BITpq@hogwartz.0bx3fan.mongodb.net/todo-backend?retrywrites=true&w=majority";

//local module
const todoRouter = require("./routes/todoRouter");
const errorscontroller = require("./controllers/errors");

const app = express();

const rootDir = path.dirname(require.main.filename);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// STATIC FILES
app.use(express.static(path.join(rootDir, "public")));


app.use("/api/todo",todoRouter);
// 404
app.use(errorscontroller.error404);

const PORT = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("connected to mongo");

    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to mongo", err);
  });
