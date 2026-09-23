//external module
const express = require("express");
const todoRouter = express.Router();
// Local module

const todoItemController = require("../controllers/todoItemController");

todoRouter.get("/",todoItemController.getTodoItems)
todoRouter.post("/", todoItemController.createTodoItem);
todoRouter.delete("/:id",todoItemController.deleteTodoItem)
todoRouter.put("/:id/completed",todoItemController.markCompleted)
module.exports = todoRouter;

