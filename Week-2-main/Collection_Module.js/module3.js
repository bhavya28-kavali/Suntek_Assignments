import { cart } from "./master_Project_on_Collections.js";

/* 

MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses


*/

function mergeCartWithCourses(courses) {
    return cart.map(cartItem => {
        let course = courses.find(course => course.id === cartItem.courseId);
        return { ...cartItem, courseTitle: course.title, coursePrice: course.price, paid: course.paid };
    });
}

function totalCartAmount(courses) {
    let mergedCart = mergeCartWithCourses(courses);
    return mergedCart.reduce((total, item) => total + (item.coursePrice * item.quantity), 0);
}

function increaseCourseQuantity(courseId) {
    let cartItem = cart.find(item => item.courseId === courseId);
    if (!cartItem) {
        return "Course not found in cart";
    }
    cartItem.quantity += 1;
    return "Increased quantity successfully";
}

function removeCourseFromCart(courseId) {
    let index = cart.findIndex(item => item.courseId === courseId);
    if (index === -1) {
        return "Course not found in cart";
    }
    cart.splice(index, 1);
    return "Removed course from cart successfully";
}

function areAllCartItemsPaid(courses) {
    let mergedCart = mergeCartWithCourses(courses);
    return mergedCart.every(item => item.paid);
}

export { mergeCartWithCourses, totalCartAmount, increaseCourseQuantity, removeCourseFromCart, areAllCartItemsPaid };