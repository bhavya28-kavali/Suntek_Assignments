/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:
iii. app.js - Main application
// TODO: Import task functions
    // import { ... } from './task.js';
    // Test your module system
    // 1. Add some tasks
    // 2. Display all tasks
    // 3. Complete a task
     // 4. Display all tasks again*/
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
addTask("Finish project", "high", "2026-12-31");
addTask("Buy groceries", "medium", "2026-11-15");
addTask("Call mom", "low", "2026-10-10");

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
completeTask(2); // Mark task with ID 2 as complete

// 4. Display all tasks again
console.log("All Tasks after completing one:", getAllTasks());
