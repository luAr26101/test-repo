console.log("works");
// Arrow functions

const getRectangleArea = (width, height) => width * height;

console.log(getRectangleArea(5, 10));

// Template literals
const myName = "John";
const age = 1;
const greeting = `Hello, my name is ${myName} and I'm ${age} year${
  age === 1 ? "" : "s"
} old.`;
console.log(greeting);

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note = {
  title: "Discuss project",
  timestamp: Date.now(),
};

console.log(`Last edited: ${formatDate(note.timestamp)}`);

// Ternary Rendering

const number = 2;
const message = number % 2 === 0 ? "Even number" : "Odd number";

console.log(message);

// Short Circuit Rendering
console.log(true && "Hello");

const isLoggedIn = true;
function showWelcome() {
  return isLoggedIn && "Welcome, User";
}
console.log(showWelcome());

// Destructuring and Rest operator

const notes = [
  {
    title: "Grocery List",
    content: "Milk, Bread, Eggs, Coffee, Rice",
    isPinned: false,
  },
  {
    title: "Workout Plan",
    content:
      "Monday: Chest, Tuesday: Back, Wednesday: Legs, Thursday: Arms, Friday: Cardio",
    isPinned: true,
  },
  {
    title: "Project Ideas",
    content:
      "Build a notes app, Create a weather dashboard, Learn TypeScript basics",
    isPinned: false,
  },
  {
    title: "Books to Read",
    content: "Atomic Habits, Clean Code, The Pragmatic Programmer, Deep Work",
    isPinned: true,
  },
  {
    title: "Meeting Notes",
    content:
      "Discussed project deadlines, assigned new tasks, planned sprint review",
    isPinned: false,
  },
  {
    title: "Travel Wishlist",
    content: "Japan, Italy, Iceland, New Zealand, Canada",
    isPinned: true,
  },
];

const [firstNote, ...otherNotes] = notes;
console.log(firstNote);
console.log(otherNotes);

const noteObj = {
  title: "Meeting Notes",
  content:
    "Discussed project deadlines, assigned new tasks, planned sprint review",
  isPinned: true,
};

const { title: noteTitle, isPinned } = noteObj;
console.log(noteTitle);
console.log(isPinned);

const user = {
  name: "Ben",
  address: { city: "Boston", state: "MA" },
  hobbies: ["Movies", "Sports", "Music"],
};

const {
  address: { city, state },
  hobbies: [firstHobby, ...otherHobbies],
} = user;
console.log(city, state);
console.log(firstHobby);
console.log(otherHobbies);

// Array Methods
const noteTitles = notes.map((note) => note.title);
console.log(noteTitles);

const pinnedNotes = notes
  .filter((note) => note.isPinned)
  .map((note) => note.title);
console.log(pinnedNotes);

const numbers = [20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 49, 50];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const totalChars = notes.reduce((acc, curr) => acc + curr.content.length, 0);
console.log(totalChars);

notes.forEach((note, index) => console.log(`${index + 1}. ${note.title}`));

// Optional chaining and nullish coalescing operator
const newUser = {
  name: "Brad",
};

console.log(newUser.address?.city);

// Nullish coalescing operator allows you to handle default values for null or undefined

let value = 0;
let result = value ?? "Default Value"; // Returns 'Default Value' is value is null or undfined
console.log(result);

console.log(newUser.address?.city ?? "Unknown");

// Immutability and Spread Operator
// 1. Data is not modified directly - instead new copies are made
// 2. Essential in React

// noteTitles.push("Workout");
const newNoteTitles = [...noteTitles, "Learning Goals"];
console.log(noteTitles);
console.log(newNoteTitles);

// Promises & Async Await
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 2000);
});

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
