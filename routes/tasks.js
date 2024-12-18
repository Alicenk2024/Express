import { Router } from "express"; //importing a function requires Set Braces but comes in as an objects
import { getTasks } from "../Controllers/taskController.js";

const router = Router();

router.get("/", getTasks);

export default router;
