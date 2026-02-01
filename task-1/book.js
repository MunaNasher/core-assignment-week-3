


function isBookApplicable(searchString) {
  // Your code here
  const bookTitle = "The fundamentals of JavaScript";

  const cleanSearch = searchString.trim().toLowerCase();
  const cleanTitle = bookTitle.toLowerCase();

  return cleanTitle.includes(cleanSearch);

}


//check

console.log(isBookApplicable("javascript"));   // true
console.log(isBookApplicable("javascript "));  // true
console.log(isBookApplicable("python"));       // false
console.log(isBookApplicable("JavaScript"));   // true
console.log(isBookApplicable("JAVASCRIPT"));   // true