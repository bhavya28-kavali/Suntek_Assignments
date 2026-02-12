import { users } from './master_Project_on_Collections.js'

/* 

MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably

*/


function getActiveUsers() {
    return users.filter(user => user.active);
}

function namesOfActiveUsers() {
    let activeUsers = getActiveUsers();
    return activeUsers.map(user => user.name);
}

function getAdmins() {
    return users.filter(user => user.role === 'admin');
}

function getUserById(id) {
    if(id >= users.length) {
        return "Invalid Id";
    }
    return users.find(user => user.id === id);
}

function deactivateUser(id) {
    if(id >= users.length) {
        return "Invalid Id";
    }

    users.find(user => user.id === id).active = false;
    return "Deactivated user successfully";
}

export { getActiveUsers, namesOfActiveUsers, getAdmins, getUserById, deactivateUser };