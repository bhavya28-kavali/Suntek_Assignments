//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
//--------------------------------------------------------------------

 //Given:
  //    let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
 // 1.Check if:
//   * Today is before deadline → "Enrollment Open"
//    * Today is after deadline → "Enrollment Closed"

  //2. Validate user input date:
   //   * Input: "2026-02-30"
    //  * Detect whether the date is valid or invalid


let enrollmentDeadline = new Date("2026-01-20");
// Get today's date
let today = new Date();
// Check enrollment status
if (today < enrollmentDeadline) {
    console.log("Enrollment Open");
} else {
    console.log("Enrollment Closed");
}
//  Validate user input date
function validateDate(input) {
    let d = new Date(input);
    // Check if date is valid
    if (isNaN(d.getTime())) {
        console.log("Invalid Date");
    } else {
        console.log("Valid Date");
    }
}
// Test input
validateDate("2026-02-30");