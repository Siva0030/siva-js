// BASICS
// What is an Array?
// How to Create Arrays
// Accessing Elements
// Array Length
// Basic Iteration (for loop, for...of)
// 🔧 COMMON METHODS (with examples)
// push() / pop()
// shift() / unshift()
// concat()
// join()
// slice() / splice()
// indexOf() / lastIndexOf()
// includes()
// 🎯 INTERMEDIATE METHODS
// map()
// filter()
// reduce()
// find() / findIndex()
// some() / every()
// sort() / reverse()
// flat() / flatMap()
// 🧩 ADVANCED CONCEPTS
// Array destructuring
// Nested arrays
// Array of objects
// Removing duplicates
// Deep copy vs shallow copy
// Spread operator and Rest syntax with arrays
// Advanced iteration (forEach, map, reduce vs for loops)
// Performance tips and when to use which method
// 💻 REAL-WORLD INTERVIEW QUESTIONS
// Coding challenges
// Optimization techniques
// Best practices for arrays
//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// 1. What is an Array in JavaScript?
// An array is a special variable that can hold multiple values in a single variable.

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits);   // Output: ["apple", "banana", "mango"]

//2. How to Create an Array ? :There are two main ways to create an array:
// 1. Using square brackets (most common way):
// let colors = ["red", "green", "blue"];
// 2. Using the Array constructor:
// let numbers = new Array(1, 2, 3, 4);
//  Tip: Use square brackets [] — it's cleaner and more readable.

// 3. Accessing Elements : You access array elements using their index, starting from 0.
// let cities = ["Delhi", "Mumbai", "Chennai"];
// console.log(cities[0]); // Delhi
// console.log(cities[1]); // Mumbai
// console.log(cities[2]); // Chennai

// 4. Array Length : The .length property tells how many elements are in the array.
// let nums = [10, 20, 30, 40];
// console.log(nums.length); // 4

// 5. Basic Iteration (for loop and for...of)
// - Using a for loop:
// let animals = ["cat", "dog", "lion"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
// - Using for...of loop:
// let animals1 = ["cat", "dog", "lion"];
// for (let animal of animals1) {
//   console.log(animal);
// }

// Practice Task: Basic Array Operations
// Question 1:
// Create an array called languages that contains these strings:
// "JavaScript"
// "Python"
// "Java"
// Now:
// Print the first and last elements.
// Print the total number of elements using .length.
// Loop through the array and print each language.
// Try writing the code yourself first. Once you're done, compare with the solution below.

// Sample Solution:
// let languages = ["JavaScript", "Python", "Java"];

// // 1. First and last elements
// console.log(languages[0]); // JavaScript
// console.log(languages[languages.length - 1]); // Java

// // 2. Length of the array
// console.log("Total languages:", languages.length); // 3

// // 3. Loop through and print each language
// for (let lang of languages) {
//   console.log(lang);
// }

// Practice Task 2: Modify and Display
// Instructions:
// Create an array named countries with the following values:
// "India", "USA", "Germany", "Australia"
// Change the second country ("USA") to "Canada".
// Add a new country "Japan" to the end of the array.
// Remove the first country.
// Print all the countries using a for...of loop.
// Try solving it on your own before checking the answer!

// const countries = ['India', 'USA', 'Germany', 'Australia'];
// console.log(typeof countries)
// console.log(countries.push("paries", "hyderabad", "uppal"));
// console.log(countries);
// console.log(countries.pop())
// console.log(countries);
// console.log(countries.shift());
// console.log(countries)

// console.log(countries.unshift("myName", "Siva", 'good'));
// console.log(countries);

// const std1 = ['siva', 25, true, 'guntur'];
// const std2 = ['ravi', 44, false, 'ongole', "chennai"]
// const std3 = ['suresh', 'work', 4434, 'siva']

// console.log(std1);
// console.log(std2);
// // console.log(std1.concat(std2));
// const result = std1.concat(std2, std3)
// console.log(typeof result);


// const vehicles = ['car', 'bike']
// vehicles.push('bus', 'truck')
// console.log(vehicles)
// console.log(vehicles.pop())
// console.log(vehicles);

// //join()
// const colors = ['red', 'green', 'blue']
// let joined = colors.join();
// console.log(joined);

// const firstName = ['Ram', 'Shyam']
// const lastName = ['Kumar', 'Verma']
// const firstJoin = firstName.join(" & ")
// console.log(firstJoin);
// const result22 = firstName.concat(lastName);
// console.log(result22);

//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// 7. slice() – Extract a Portion of an Array (Non-destructive)
// Definition:
// Returns a shallow copy of a portion of an array into a new array, without changing the original.

// Syntax:
// array.slice(startIndex, endIndex)
// startIndex: Where to start (inclusive)
// endIndex: Where to stop (exclusive)

// Example:
// let fruits = ["apple", "banana", "mango", "orange"];
// let tropical = fruits.slice(1, 3);

// console.log(tropical); // ["banana", "mango"]
// console.log(fruits);   // ["apple", "banana", "mango", "orange"] (unchanged)
// 8. splice() – Add or Remove Items (Destructive)
// Definition:
// Changes the original array by adding, removing, or replacing elements.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)
// start: Index to start at
// deleteCount: How many items to remove
// item1, item2...: Items to add (optional)

// Example 1: Remove elements
// let colors = ["red", "green", "blue", "yellow"];
// colors.splice(1, 2); // Removes 2 items starting at index 1

// console.log(colors); // ["red", "yellow"]

// Example 2: Add elements
// let nums = [1, 4, 5];
// nums.splice(1, 0, 2, 3); // At index 1, remove 0, insert 2 and 3

// console.log(nums); // [1, 2, 3, 4, 5]
// Example 3: Replace elements
// let names = ["John", "Mike", "Tom"];
// names.splice(1, 1, "David"); // Replace "Mike" with "David"

// console.log(names); // ["John", "David", "Tom"]
// difference  slice() vs splice()
// Feature	                slice()	            splice()
// Changes array?	         No	                Yes
// Returns?	        New sub-array	        Removed elements (array)
// Use for?	        Extracting	            Add / remove / replace items


// const fruites1 = ['apple', 'banana', 'mango', 'orange']
// console.log(fruites1.slice(0))
// const fruitePort = fruites1.slice(1, 3);
// console.log(fruitePort);
// console.log(fruites1);

// const colors1 = ['red', 'green', 'blue', 'yellow']
// colors1.splice(1, 0, 'pink', 'gray');
// console.log(colors1)
// colors1.splice(2, 2, "black", 'white')
// console.log(colors1);

//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
//indexOf() & lastIndexOf() & includes()
// 9. indexOf() – Find the First Occurrence
// Definition: Returns the first index at which a given element is found. If not found, it returns -1.
// Syntax:
// array.indexOf(element, fromIndex)
//  Parameters:
// 1.element (required):The value you are searching for.

// 2.fromIndex (optional):The index to start the search from. Default is 0 (start from beginning of array).
//  Example 1: Without fromIndex
// let items = ["pen", "book", "pencil", "pen"];
// console.log(items.indexOf("pen"));
// // Output: 0 → finds the first "pen" at index 0
// Example 2: With fromIndex
// let items = ["pen", "book", "pencil", "pen"];
// console.log(items.indexOf("pen", 1));
// Output: 3 → skips index 0 and finds the next "pen" at index 3

// Example:
// let fruits = ["apple", "banana", "mango", "banana"];
// console.log(fruits.indexOf("banana")); // 1
// console.log(fruits.indexOf("grape"));  // -1 (not found)

// 10. lastIndexOf() – Find the Last Occurrence
// Definition: Returns the last index of a given element. If not found, returns -1.
// Syntax:
// array.lastIndexOf(element, fromIndex)
// Example:
// let fruits = ["apple", "banana", "mango", "banana"];
// console.log(fruits.lastIndexOf("banana")); // 3

// 11. includes() – Check if Element Exists
// Definition: Returns true if the array contains the given element, otherwise false.
// Syntax:
// array.includes(element, fromIndex)
// Example:
// let colors = ["red", "green", "blue"];
// console.log(colors.includes("green")); // true
// console.log(colors.includes("yellow")); // false

// const fruites3 = ['apple', 'banana', 'mango', 'banana']
// console.log(fruites3.indexOf('banana'));
// console.log(fruites3.indexOf('grapes'));
// console.log(fruites3.lastIndexOf('banana'));
// console.log(fruites3.includes('grapes'));
// console.log(fruites3.includes('apple'));
// console.log(fruites3.includes('apple', 1));

// const cities = ["Delhi", "Mumbai", "Chennai"];

// const options = cities.map(city => ({ label: city, value: city }));
// console.log(options);

//👉👉👉👉👉.....................................👉 map() 👉..................................👉👉👉👉👉👉
// 12. map() – Transform Every Element
// Definition: The map() method creates a new array by applying a function to each element of the original array.
// It does not change the original array.

// Syntax:
// let newArray = array.map((element, index, array) => {
//   // return new value
// })

// element: current item
// index: (optional) index of the item
// array: (optional) original array

// Example 1: Multiply every number by 2
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);       // [2, 4, 6, 8]

// Example 2: Add index to each element
// let names = ["Ram", "Shyam"];
// let tagged = names.map((name, index) => `${index + 1}. ${name}`);
// console.log(tagged); // ["1. Ram", "2. Shyam"]

// Key Points:
// Returns a new array.
// Original array stays unchanged.
// Common for data transformation.

// Real-Time Use Cases of map() in Projects
// 1. Rendering UI Lists in React

// const users = [
//     { id: 1, name: "Ram" },
//     { id: 2, name: "Shyam" },
// ];

// return (
//     <ul>
//         {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//         ))}
//     </ul>
// );

// ✔️ Why? When fetching user data from an API and showing it in a table, card, or list.

// 🔸 2. Transforming API Data:
// Suppose you get raw user data from an API like:

// let apiResponse = [
//   { firstName: "Ram", lastName: "Kumar" },
//   { firstName: "Shyam", lastName: "Verma" }
// ];
// Convert it to full names:

// let fullNames = apiResponse.map(user => `${user.firstName} ${user.lastName}`);
// console.log(fullNames);          // ["Ram Kumar", "Shyam Verma"]

// 🔸 3. Creating Dropdown Options

// const cities = ["Delhi", "Mumbai", "Chennai"];

// const options = cities.map(city => ({ label: city, value: city }));
// console.log(options);
// output:
// [
//   { label: "Delhi", value: "Delhi" },
//   { label: "Mumbai", value: "Mumbai" },
//   { label: "Chennai", value: "Chennai" }
// ]
// Used in UI libraries like React Select or MUI dropdowns.

// 🔸 4. Formatting Numbers / Dates

// let prices = [100, 200, 300];
// let formatted = prices.map(p => `₹${p.toFixed(2)}`);
// console.log(formatted); // ["₹100.00", "₹200.00", "₹300.00"]

// 🔸 5. Transforming IDs or Keys for Backend Calls

// let users = [{ id: 1 }, { id: 2 }, { id: 3 }];
// let idsOnly = users.map(user => user.id);
// console.log(idsOnly); // [1, 2, 3]
// Used when sending data to backend APIs.

// Would you like a React mini-example using map() in a real component? Or shall we move on to the next method: filter()?

// Perfect, Shiva! Here's a real-world React mini-example that shows how developers use map() to render dynamic data in the UI.

// ⚛️ React Example: Rendering a List of Users Using map()
// ✅ Suppose we have a list of users:

// const users = [
//   { id: 1, name: "Ram", email: "ram@example.com" },
//   { id: 2, name: "Shyam", email: "shyam@example.com" },
//   { id: 3, name: "Anita", email: "anita@example.com" }
// ];
// ✅ React Component:

// import React from "react";
// function UserList() {
//   const users = [
//     { id: 1, name: "Ram", email: "ram@example.com" },
//     { id: 2, name: "Shyam", email: "shyam@example.com" },
//     { id: 3, name: "Anita", email: "anita@example.com" }
//   ];

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> – {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default UserList;

// ✅ What map() is doing:
// It loops through the users array.
// For each user, it returns a JSX <li> element.
// Each element uses a unique key (required in React).

// ✅ Output in browser:
// User List
// • Ram – ram@example.com
// • Shyam – shyam@example.com
// • Anita – anita@example.com

// This pattern is used daily in:
// Dashboards
// Tables
// Lists
// Dropdowns
// Cards
// Charts
// ✅ Ready to move on to the next array method — filter() — which is used to filter/search data in real-time?
// Awesome, Shiva! Let's learn another powerful and real-time array method: filter().

//👉👉👉👉👉.......................................👉 filter() 👉..................................👉👉👉👉👉👉
// 13. filter() – Select Items That Match a Condition
// ✅ Definition:
// The filter() method creates a new array containing only elements that pass a test (i.e., return true from the callback).

// It does not change the original array.

// Syntax:
// let filteredArray = array.filter((element, index, array) => {
//   return condition; // true to keep, false to discard
// });

// Example 1: Filter numbers greater than 20
// let numbers = [10, 25, 30, 15];

// let result = numbers.filter(num => num > 20);
// console.log(result); // [25, 30]

// Example 2: Filter even numbers
// let numbers = [1, 2, 3, 4, 5, 6];
// let evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6]

// ✅ Real-Time Use Cases of filter()
// 🔸 1. Search Feature (Live Filtering)

// let users = ["Ram", "Shyam", "Anita", "Ramesh"];

// let result = users.filter(name => name.includes("Ram"));
// console.log(result);   // ["Ram", "Ramesh"]
// ✔️ Used in search boxes, filters, type-ahead/autocomplete, etc.

// 🔸 2. Filter by Status (e.g. active users)

// let users = [
//   { id: 1, name: "Ram", active: true },
//   { id: 2, name: "Shyam", active: false },
//   { id: 3, name: "Anita", active: true }
// ];

// let activeUsers = users.filter(user => user.active);
// console.log(activeUsers);
// // Only Ram and Anita

// 🔸 3. Filter Products by Category or Price

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Tablet", price: 30000 }
// ];

// let affordable = products.filter(p => p.price <= 30000);
// console.log(affordable);
// // Phone and Tablet

// 🧪 Practice Task for You:
// Create an array of objects called students, each with name and marks.
// Use filter() to select students who scored above 50.
// Log the result.
// Try it and let me know when you're ready to move to the next powerful method: reduce()!

// I want some more examples using filters in objects
// Absolutely, Shiva! Let's go deeper with more real-world filter() examples using arrays of objects. These are exactly the kinds of filters you'd write in real projects like dashboards, e-commerce apps, admin panels, etc.

// More Real-World filter() Examples with Objects
// Example 1: Filter Students Who Passed

// let students = [
//   { name: "Ram", marks: 45 },
//   { name: "Anita", marks: 78 },
//   { name: "Ravi", marks: 33 },
//   { name: "Neha", marks: 65 }
// ];
// let passed = students.filter(student => student.marks >= 50);
// console.log(passed);
// // Output: [{ name: "Anita", marks: 78 }, { name: "Neha", marks: 65 }]

// Example 2: Filter Products in Stock

// let products = [
//   { name: "Laptop", inStock: true },
//   { name: "Phone", inStock: false },
//   { name: "Tablet", inStock: true }
// ];

// let availableProducts = products.filter(product => product.inStock);
// console.log(availableProducts);
// // Output: Laptop and Tablet

// Example 3: Filter Employees by Department

// let employees = [
//   { name: "Sita", dept: "HR" },
//   { name: "Amit", dept: "Engineering" },
//   { name: "Rohit", dept: "HR" }
// ];

// let hrEmployees = employees.filter(emp => emp.dept === "HR");
// console.log(hrEmployees);
// // Output: Sita and Rohit

// Example 4: Filter Orders Over ₹1000

// let orders = [
//   { id: 1, amount: 500 },
//   { id: 2, amount: 1500 },
//   { id: 3, amount: 1200 },
//   { id: 4, amount: 700 }
// ];

// let bigOrders = orders.filter(order => order.amount > 1000);
// console.log(bigOrders);
// // Output: Orders with id 2 and 3

// Example 5: Filter Users Created in 2024
// let users = [
//   { name: "Raju", createdAt: "2024-01-10" },
//   { name: "Meena", createdAt: "2023-05-12" },
//   { name: "Asha", createdAt: "2024-09-22" }
// ];

// let recentUsers = users.filter(user => user.createdAt.startsWith("2024"));
// console.log(recentUsers);
// // Output: Raju and Asha
// Would you like to practice one task using filter()? Or shall we move on to reduce() next (which is used to calculate totals, groupings, etc.)?

// Awesome, Shiva! Now let’s dive into a powerful and slightly advanced method — reduce() — which is heavily used in real projects for calculations, aggregations, and transformations.
//👉👉👉👉👉.......................................................................👉👉👉👉👉👉

// 🧮 14. reduce() – Reduce Array to a Single Value
// ✅ Definition:
// The reduce() method reduces an array to a single value by executing a callback function on each element (from left to right).

// 🧪 Syntax:
// javascript
// Copy
// Edit
// let result = array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);
// 🔹 Parameters:
// accumulator: the value carried over from each step

// currentValue: current array element

// initialValue: (optional) starting value (e.g., 0, {}, [], etc.)

// 🧠 Examples
// ✅ Example 1: Sum of All Numbers
// javascript
// Copy
// Edit
// let numbers = [10, 20, 30];

// let total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total); // 60
// sum is the accumulator; num is the current value.

// ✅ Example 2: Find Maximum Value
// javascript
// Copy
// Edit
// let nums = [5, 12, 8, 25, 7];

// let max = nums.reduce((acc, val) => val > acc ? val : acc);
// console.log(max); // 25
// ✅ Example 3: Calculate Total Price
// javascript
// Copy
// Edit
// let cart = [
//   { item: "Pen", price: 20 },
//   { item: "Book", price: 150 },
//   { item: "Pencil", price: 10 }
// ];

// let totalPrice = cart.reduce((total, product) => total + product.price, 0);
// console.log(totalPrice); // 180
// ✅ Example 4: Group By Category (Advanced)
// javascript
// Copy
// Edit
// let items = [
//   { name: "Shirt", category: "Clothing" },
//   { name: "Pants", category: "Clothing" },
//   { name: "Apple", category: "Fruit" }
// ];

// let grouped = items.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = [];
//   }
//   acc[item.category].push(item.name);
//   return acc;
// }, {});

// console.log(grouped);
// /*
// {
//   Clothing: ["Shirt", "Pants"],
//   Fruit: ["Apple"]
// }
// */
// ✅ Use Cases in Real Projects:
// Calculate total amounts (billing, order total)

// Generate summary reports

// Count or group by status/category

// Flatten nested arrays

// Combine all values into a string or object

// 🔧 Want a Practice Task using reduce() or shall I show how map(), filter(), and reduce() work together in one real-world example?





//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Ok
// ChatGPT said:
// Perfect, Shiva! Let me now show you how **map(), filter(), and reduce()** work together — just like real-world developers use them in projects (especially with APIs, billing systems, reports, dashboards, etc.).

// 🧩 Real-World Example: Shopping Cart Summary
// You have a shopping cart like this:

// javascript
// Copy
// Edit
// const cart = [
//   { name: "Pen", price: 20, quantity: 2, inStock: true },
//   { name: "Notebook", price: 100, quantity: 1, inStock: true },
//   { name: "Pencil", price: 10, quantity: 3, inStock: false },
//   { name: "Bag", price: 500, quantity: 1, inStock: true }
// ];
// 🎯 Goal:
// Only include in-stock items

// Calculate total amount = price × quantity

// Print each item with name and line total

// Get the grand total

// ✅ Step-by-Step Using filter(), map(), and reduce():
// javascript
// Copy
// Edit
// // 1. Filter only in-stock items
// const availableItems = cart.filter(item => item.inStock);

// // 2. Map to get line total per item
// const itemSummaries = availableItems.map(item => {
//   return {
//     name: item.name,
//     lineTotal: item.price * item.quantity
//   };
// });

// // 3. Reduce to get grand total
// const grandTotal = itemSummaries.reduce((sum, item) => sum + item.lineTotal, 0);

// // 4. Print the results
// console.log("Items Purchased:");
// itemSummaries.forEach(item => {
//   console.log(`${item.name}: ₹${item.lineTotal}`);
// });
// console.log("Grand Total:", grandTotal);
// ✅ Output:
// yaml
// Copy
// Edit
// Items Purchased:
// Pen: ₹40
// Notebook: ₹100
// Bag: ₹500
// Grand Total: 640
// This is exactly how billing works in React/JavaScript projects — often pulling this data from an API, filtering & mapping it in Redux or components, and displaying it in a table or invoice.

// Would you like:

// 🧪 A practice task for yourself using these three methods together?

// 📘 Or should we move to the next array method like some() / every() / find()?

// Your call!






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes
// ChatGPT said:
// Great, Shiva! Here's a practice task where you'll use `filter(), map(), and reduce() together — just like in a real project.

// 🧪 Practice Task: Course Billing Summary
// 📘 You are given this array of courses:
// javascript
// Copy
// Edit
// const courses = [
//   { title: "JavaScript Basics", price: 999, enrolled: true },
//   { title: "React Mastery", price: 1999, enrolled: false },
//   { title: "Redux Toolkit", price: 1499, enrolled: true },
//   { title: "Node.js API", price: 1799, enrolled: true }
// ];
// 🎯 Your Goals:
// ✅ Filter only the enrolled courses

// ✅ Map to a new array that includes:

// title

// price

// ✅ Reduce to calculate the total price of enrolled courses

// ✅ Print each enrolled course title and price, and then print the grand total

// 💡 Expected Output:
// yaml
// Copy
// Edit
// Enrolled Courses:
// JavaScript Basics – ₹999
// Redux Toolkit – ₹1499
// Node.js API – ₹1799
// Total: ₹4297
// Would you like to try this yourself and send your answer?
// Or would you like me to show the solution first and then you try a twist version of it?






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes I want some more different use cases
// ChatGPT said:
// Excellent, Shiva! Let's explore real-world use cases of filter(), map(), and reduce() in different domains (e-commerce, HR, finance, school, healthcare, etc.). These patterns are common in interviews and actual development.

// ✅ 1. E-commerce: Filter by category + map product name + total stock
// javascript
// Copy
// Edit
// const products = [
//   { name: "Shirt", category: "Clothing", stock: 10 },
//   { name: "Laptop", category: "Electronics", stock: 5 },
//   { name: "Jeans", category: "Clothing", stock: 7 },
//   { name: "Phone", category: "Electronics", stock: 3 }
// ];

// // Get clothing product names and total clothing stock
// const clothing = products.filter(p => p.category === "Clothing");

// const clothingNames = clothing.map(p => p.name);
// const totalStock = clothing.reduce((sum, p) => sum + p.stock, 0);

// console.log("Clothing:", clothingNames); // ['Shirt', 'Jeans']
// console.log("Total Clothing Stock:", totalStock); // 17
// ✅ 2. HR App: Active employees + full names
// javascript
// Copy
// Edit
// const employees = [
//   { first: "Ravi", last: "Kumar", active: true },
//   { first: "Neha", last: "Sharma", active: false },
//   { first: "Amit", last: "Verma", active: true }
// ];

// // Get full names of active employees
// const active = employees.filter(e => e.active);
// const fullNames = active.map(e => `${e.first} ${e.last}`);
// console.log(fullNames); // ['Ravi Kumar', 'Amit Verma']
// ✅ 3. School: Students above 50 + average marks
// javascript
// Copy
// Edit
// const students = [
//   { name: "Arjun", marks: 80 },
//   { name: "Riya", marks: 45 },
//   { name: "Kiran", marks: 70 }
// ];

// // Filter passing students
// const passed = students.filter(s => s.marks >= 50);

// // Get average marks
// const average = passed.reduce((sum, s) => sum + s.marks, 0) / passed.length;
// console.log("Average of Passed:", average); // (80 + 70) / 2 = 75
// ✅ 4. Finance App: Transactions total income and expense
// javascript
// Copy
// Edit
// const transactions = [
//   { type: "income", amount: 1000 },
//   { type: "expense", amount: 400 },
//   { type: "income", amount: 500 },
//   { type: "expense", amount: 300 }
// ];

// // Total income
// const income = transactions
//   .filter(t => t.type === "income")
//   .reduce((sum, t) => sum + t.amount, 0);

// // Total expense
// const expense = transactions
//   .filter(t => t.type === "expense")
//   .reduce((sum, t) => sum + t.amount, 0);

// console.log("Income:", income);   // 1500
// console.log("Expense:", expense); // 700
// ✅ 5. Healthcare App: Patients under treatment + total cost
// javascript
// Copy
// Edit
// const patients = [
//   { name: "Ramesh", inTreatment: true, cost: 5000 },
//   { name: "Sita", inTreatment: false, cost: 0 },
//   { name: "Arun", inTreatment: true, cost: 3000 }
// ];

// const activePatients = patients.filter(p => p.inTreatment);
// const totalCost = activePatients.reduce((sum, p) => sum + p.cost, 0);

// console.log("Active Patients:", activePatients.map(p => p.name)); // Ramesh, Arun
// console.log("Total Cost:", totalCost); // 8000
// 👉 Summary of Use Cases:
// Domain	Use Case Example
// E-commerce	Filter by category, total stock
// HR	Filter active employees, get full names
// School	Passed students, average marks
// Finance	Separate income and expense, total each
// Healthcare	Patients under treatment, total treatment cost

// Would you like me to give you a custom task to solve, or do you want to learn some() / every() / find() next?






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes
// ChatGPT said:
// Great, Shiva! Since you said "Yes", I’ll assume you're ready to learn the next useful array methods:
// 👉 some(), every(), and find() — all of which are simple yet powerful tools used in real apps, especially for conditions and searches.

// ✅ 15. some() – Does any item match the condition?
// 🧠 Definition:
// some() checks if at least one element in the array satisfies the given condition.

// It returns true or false.

// 🧪 Syntax:
// javascript
// Copy
// Edit
// array.some((element, index, array) => {
//   return condition;
// });
// ✅ Example:
// javascript
// Copy
// Edit
// const marks = [40, 50, 60, 70];

// let hasFail = marks.some(mark => mark < 35);
// console.log(hasFail); // false

// let hasAbove60 = marks.some(mark => mark > 60);
// console.log(hasAbove60); // true
// ✅ 16. every() – Do all items match the condition?
// 🧠 Definition:
// every() checks if all elements satisfy the given condition.
// Also returns true or false.

// ✅ Example:
// javascript
// Copy
// Edit
// const ages = [18, 22, 25];

// let allAdults = ages.every(age => age >= 18);
// console.log(allAdults); // true

// let allAbove21 = ages.every(age => age > 21);
// console.log(allAbove21); // false
// ✅ 17. find() – Get the first match from an array
// 🧠 Definition:
// find() returns the first element that matches a condition.

// If nothing matches, it returns undefined.

// ✅ Example:
// javascript
// Copy
// Edit
// const users = [
//   { name: "Ravi", age: 28 },
//   { name: "Sita", age: 22 },
//   { name: "Ramu", age: 35 }
// ];

// let user = users.find(u => u.age > 30);
// console.log(user); // { name: "Ramu", age: 35 }

// let notFound = users.find(u => u.age > 40);
// console.log(notFound); // undefined
// 🔥 Real-World Use Case Highlights
// Method	Real Use Case
// some()	Check if cart has an out-of-stock item
// every()	Check if all form fields are valid
// find()	Find the first user by email or ID

// ✅ Want a practice task using some(), every(), and find()?
// Or shall I continue with more advanced methods like sort(), flat(), and flatMap() next?

// Let me know what you'd like!






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes
// ChatGPT said:
// Great, Shiva! Let's do a practice task using **some()**, **every()**, and **find()**. These are real-world patterns used in validations, search, and status checking.

// 🧪 Practice Task: Employee Checker
// 🧰 Given this array:
// javascript
// Copy
// Edit
// const employees = [
//   { id: 101, name: "Ravi", age: 28, active: true },
//   { id: 102, name: "Sita", age: 24, active: false },
//   { id: 103, name: "Amit", age: 30, active: true },
//   { id: 104, name: "Neha", age: 26, active: true }
// ];
// 🎯 Your Tasks:
// ✅ Use some() to check:
// ➤ Is any employee inactive?

// ✅ Use every() to check:
// ➤ Are all employees above 21 years?

// ✅ Use find() to:
// ➤ Find the employee with id === 103

// 💡 Expected Output:
// yaml
// Copy
// Edit
// Has Inactive Employee: true
// All Above 21: true
// Found Employee: { id: 103, name: "Amit", age: 30, active: true }
// Would you like to try writing the solution yourself first?
// Or would you prefer to see the solution now and then try a new variation on it?






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes
// ChatGPT said:
// Perfect, Shiva! Here's the solution to the practice task using some(), every(), and find():

// ✅ Solution:
// javascript
// Copy
// Edit
// const employees = [
//   { id: 101, name: "Ravi", age: 28, active: true },
//   { id: 102, name: "Sita", age: 24, active: false },
//   { id: 103, name: "Amit", age: 30, active: true },
//   { id: 104, name: "Neha", age: 26, active: true }
// ];

// // 1. Check if any employee is inactive
// const hasInactive = employees.some(emp => emp.active === false);
// console.log("Has Inactive Employee:", hasInactive); // true

// // 2. Check if all employees are above 21
// const allAbove21 = employees.every(emp => emp.age > 21);
// console.log("All Above 21:", allAbove21); // true

// // 3. Find employee with id === 103
// const employee103 = employees.find(emp => emp.id === 103);
// console.log("Found Employee:", employee103);
// /*
// { id: 103, name: "Amit", age: 30, active: true }
// */
// Let’s now do one more mini-task — you try it this time! 💪

// 🧪 Task for You:
// Use the same employees array:

// ✅ Use some() to check if any employee is older than 60

// ✅ Use every() to check if all employees are active

// ✅ Use find() to get the employee with name === "Neha"

// Want to try this yourself and share your code?
// I'll check and guide if needed.






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Next
// ChatGPT said:
// Awesome, Shiva! Let’s now move to the next advanced array methods that are super helpful in real-world JavaScript projects:

// ✅ 18. sort() – Sorting Arrays






// You said:
// Yes
// ChatGPT said:
// Great, Shiva! Let’s dive into sort() — a very useful and commonly asked method in interviews and real projects (like sorting tables, prices, names, dates, etc.).

// ✅ 18. sort() – Sort elements in an array
// 🧠 Definition:
// The sort() method sorts the elements of an array in-place and returns the same array (now sorted).
// By default, it sorts as strings, even if the array contains numbers.

// 📌 Syntax:
// javascript
// Copy
// Edit
// array.sort(compareFunction);
// If you don’t pass compareFunction, elements are converted to strings and compared lexicographically.

// 🔢 Example: Sorting numbers (ascending & descending)
// javascript
// Copy
// Edit
// const numbers = [40, 10, 100, 20];

// // 🔼 Ascending
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [10, 20, 40, 100]

// // 🔽 Descending
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [100, 40, 20, 10]
// 🔠 Example: Sorting strings
// javascript
// Copy
// Edit
// const names = ["Shiva", "Ravi", "Amit", "Neha"];
// names.sort();
// console.log(names); // ['Amit', 'Neha', 'Ravi', 'Shiva']
// 🧑‍💼 Example: Sorting objects by age
// javascript
// Copy
// Edit
// const users = [
//   { name: "Ravi", age: 32 },
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 28 }
// ];

// // 🔼 Sort by age (ascending)
// users.sort((a, b) => a.age - b.age);
// console.log(users);
// /*
// [
//   { name: "Amit", age: 25 },
//   { name: "Neha", age: 28 },
//   { name: "Ravi", age: 32 }
// ]
// */
// 💡 Interview Tip:
// Use localeCompare() to sort strings with case sensitivity or non-English characters:

// javascript
// Copy
// Edit
// names.sort((a, b) => a.localeCompare(b));
// Would you like a practice task using sort()?
// Or should we move to the next methods like flat() and flatMap()?

// Perfect, Shiva! Let’s quickly explore the localeCompare() method — it’s often used with sort() for accurate string sorting, especially with different cases or languages.

// ✅ localeCompare() – Compare two strings properly
// 🧠 Definition:
// string1.localeCompare(string2) compares two strings and returns:

// -1 if string1 < string2

// 0 if they are equal

// 1 if string1 > string2

// Unlike regular comparison (a > b), it respects locale rules, case, and accents.

// 📌 Syntax:
// javascript
// Copy
// Edit
// a.localeCompare(b, [locales], [options])
// ✅ Example: Case-sensitive sort
// javascript
// Copy
// Edit
// const names = ["shiva", "Ravi", "amit", "Neha"];

// names.sort((a, b) => a.localeCompare(b));
// console.log(names);
// // ['amit', 'Neha', 'Ravi', 'shiva']
// Capital letters come before lowercase.

// ✅ Example: Case-insensitive sort
// javascript
// Copy
// Edit
// names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
// console.log(names);
// // ['amit', 'Neha', 'Ravi', 'shiva']
// With sensitivity: 'base', it treats "A" and "a" as equal.

// ✅ Sorting words with accents
// javascript
// Copy
// Edit
// const cities = ["Zürich", "Ålesund", "Amsterdam", "Évora", "Berlin"];

// cities.sort((a, b) => a.localeCompare(b, 'en'));
// console.log(cities);
// // ['Amsterdam', 'Berlin', 'Évora', 'Zürich', 'Ålesund']
// 🔥 Real-world use:
// Sorting names in dropdowns

// Sorting search suggestions

// Sorting contact lists, cities, etc., accurately

// Would you like a practice task now using localeCompare() + sort()?
// Or should we continue to the next methods: flat() and flatMap()?






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Ok


// ChatGPT said:
// Great, Shiva! Let’s now move to the next advanced array method:

// ✅ 19. flat() – Flatten nested arrays
// 🧠 Definition:
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// 📌 Syntax:
// javascript
// Copy
// Edit
// array.flat(depth);
// depth: how deep to flatten (default is 1)

// ✅ Basic Example:
// javascript
// Copy
// Edit
// const arr = [1, 2, [3, 4]];
// const flatArr = arr.flat();
// console.log(flatArr); // [1, 2, 3, 4]
// ✅ Nested Example:
// javascript
// Copy
// Edit
// const nested = [1, [2, [3, [4]]]];

// console.log(nested.flat(1)); // [1, 2, [3, [4]]]
// console.log(nested.flat(2)); // [1, 2, 3, [4]]
// console.log(nested.flat(3)); // [1, 2, 3, 4]
// ✅ Removing empty slots:
// javascript
// Copy
// Edit
// const messy = [1, , 2, [3, , 4]];
// console.log(messy.flat()); // [1, 2, 3, 4]
// 🔥 Real-world usage:
// Flattening data from APIs

// Processing form inputs

// Merging values from UI fields

// Cleaning up nested loops

// Would you like to try a practice task using flat()?
// Or should I continue with flatMap() next — which is a mix of map() + flat()?






//👉👉👉👉👉.......................................................................👉👉👉👉👉👉
// You said:
// Yes


// ChatGPT said:
// Awesome, Shiva! Here's a practice task using flat() to help solidify your understanding 💪

// 🧪 Practice Task: Clean and Flatten Order Data
// You're given a messy array of order IDs that may contain empty slots or nested arrays.

// javascript
// Copy
// Edit
// const rawOrders = [101, [102, 103], , [104, [105, 106]], 107];
// 🎯 Your Task:
// ✅ Use flat() to flatten the array completely (even deeply nested arrays).

// ✅ Remove all empty values.

// ✅ Store the clean result in finalOrders and print it.

// 💡 Expected Output:
// javascript
// Copy
// Edit
// [101, 102, 103, 104, 105, 106, 107]
// 🧠 Hint: Use flat(depth) with a deep enough level to flatten everything.

// Would you like to try this yourself first, or shall I show you the solution right away?













