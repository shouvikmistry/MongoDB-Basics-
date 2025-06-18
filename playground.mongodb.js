/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDB');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "JavaScript",
    "price": 22000,
    "instructor": "Emma"
  },
  {
    "name": "Django",
    "price": 17000,
    "instructor": "Alex"
  },
  {
    "name": "Flutter",
    "price": 25000,
    "instructor": "David"
  },
  {
    "name": "Swift",
    "price": 30000,
    "instructor": "Lisa"
  },
  {
    "name": "Kotlin",
    "price": 19000,
    "instructor": "James"
  },
  {
    "name": "Angular",
    "price": 21000,
    "instructor": "Sophia"
  },
  {
    "name": "Vue.js",
    "price": 18000,
    "instructor": "Ryan"
  },
  {
    "name": "Go",
    "price": 28000,
    "instructor": "Olivia"
  },
  {
    "name": "Rust",
    "price": 32000,
    "instructor": "Noah"
  },
  {
    "name": "TypeScript",
    "price": 20000,
    "instructor": "Ava"
  }
]);

// Run a find command to view all courses.
const allCourses = db.getCollection('courses').find().toArray();

// Print the courses to the output window.
console.log('All Courses:');
allCourses.forEach(course => {
  console.log(`- ${course.name} (${course.price}): ${course.instructor}`);
});

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('courses').aggregate([
  // Group the total revenue for each instructor.
  { $group: { _id: '$instructor', totalRevenue: { $sum: '$price' } } }
]);
