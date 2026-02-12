/*
Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist
Requirements:
     Create a modular todo app with 3 separate files:
        i. validator.js - Input validation
 // TODO: Export these validation functions
                      
// 1. Validate task title (not empty, min 3 chars)
// 2. Validate priority (must be: low, medium, high)
// 3. Validate due date (must be future date)
                      
*/
function validateTitle(title) {
    if (typeof title !== 'string' || title.trim().length < 3) {
        return false;
    }
    return true;
}

function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority.toLowerCase());
}

function validateDueDate(date) {
    const dueDate = new Date(date);
    const today = new Date();
    // Set time to 0 for accurate date comparison
    today.setHours(0, 0, 0, 0);
    return dueDate instanceof Date && !isNaN(dueDate) && dueDate > today;
}

module.exports = {
    validateTitle,
    validatePriority,
    validateDueDate
  };

