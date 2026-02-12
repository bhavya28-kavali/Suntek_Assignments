import { roles } from "./master_Project_on_Collections.js";

/* 

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably

*/


function getAllRoleNames() {
    return Object.keys(roles);
}

function canStudentDelete() {
    return roles.student.includes("delete");
}

function getAllUniquePermissions() {
    let allPermissions = Object.values(roles).flat();
    return [...new Set(allPermissions)];
}

function addModeratorRole() {
    roles.moderator = ["update", "view"];
    return "Added moderator role successfully";
}

export { getAllRoleNames, canStudentDelete, getAllUniquePermissions, addModeratorRole };