// =====================================================
// Async/Await + Fetch: Joke Button Assignment
// =====================================================

/*
🧠 Example: How async/await works with fetch

Uncomment the code below to try an example that fetches
a random cat fact using async/await.
*/

// async function exampleFetch() {
//   const response = await fetch('https://catfact.ninja/fact');
//   const data = await response.json();
//   console.log("Example cat fact:", data.fact);
// }

// exampleFetch();

/* =====================================================
📝 Your Task:

Write an async function called getJoke().
This function should run when the "Tell Me a Joke" button is clicked.

Use the API: https://official-joke-api.appspot.com/random_joke

Steps:
1. Add a click event listener to the "Tell Me a Joke" button.
2. Inside the event listener, call an async function named getJoke.
3. Inside the getJoke function:
   - Use fetch() to call the API.
   - Use await to pause and wait for the response.
   - Convert the response to JSON using .json()
   - Use DOM methods to display the joke:
     - Put the setup in the element with id="jokeSetup"
     - Put the punchline in the element with id="jokePunchline"
4. Use try...catch to handle any errors and display a message in the HTML if something goes wrong.

BONUS:
- Disable the button while loading.
- Show a "Loading..." message until the joke appears.
- Add custom styling in CSS.
===================================================== */

// STEP 1: Add a click event listener
// Your code here:

// STEP 2: Define the async function getJoke()
// Your code here:

// STEP 3: Use fetch() and await to call the API
// Your code here:

// STEP 4: Convert response to JSON
// Your code here:

// STEP 5: Display setup and punchline in the DOM
// Your code here:

// STEP 6: Handle errors with try...catch
// Your code here:
