import { courses } from "./master_Project_on_Collections.js";

/* 

MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

*/

function getPublishedCourses() {
    return courses.filter(course => course.published);
}

function sortCourses() {
    courses.sort((a, b) => b.price - a.price);
    return courses;
}

function extractTitleAndPrice() {
    return courses.map(course => {
        return { title: course.title, price: course.price };
    });
}

function totalValueOfPublishedCourses() {
    let publishedCourses = getPublishedCourses();
    return publishedCourses.reduce((total, course) => total + course.price, 0);
}

function addNewCourse(newCourse) {
    courses.push(newCourse);
    return "Added course successfully";
}

export { getPublishedCourses, sortCourses, extractTitleAndPrice, totalValueOfPublishedCourses, addNewCourse };