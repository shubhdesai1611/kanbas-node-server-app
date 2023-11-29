import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
import UserRoutes from "./users/routes.js";
import "dotenv/config";
import session from "express-session";
const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

UserRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);

Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000, () => {
  console.log("Server started at port 4000");
});
