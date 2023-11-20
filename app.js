import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(cors());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);

app.use(express.json());

Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000, () => {
  console.log("Server started at port 4000");
});
