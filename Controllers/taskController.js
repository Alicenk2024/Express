import fs from "fs";

const tasksFilePath = "./data/tasks.json";

const readTasks = () => JSON.parse(fs.readFileSync(tasksFilePath, "utf-8"));
const writeTasks = (data) =>
  fs.writeFileSync(tasksFilePath, JSON.stringify(data, null, 2));

export const getTasks = (req, res) => {
  res.status(200).json(readTasks());
};
