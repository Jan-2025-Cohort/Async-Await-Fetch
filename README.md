# Async/Await Joke Fetch Activity

In this activity, you'll practice using `async` and `await` to fetch a random joke from an API and display it on the page when a button is clicked.

## 🧠 Learning Goals
- Use `async` functions to handle asynchronous code.
- Use `await` with `fetch()` to retrieve data from an API.
- Handle button click events with JavaScript.
- Display fetched data in the DOM.
- Use `try...catch` to gracefully handle errors.

---

## 🚀 Setup Instructions
1. Clone this repo to your computer
2. Open `index.html` in your browser
3. Edit the `script.js` file to complete the task

---

## 📂 Project Files
- `index.html` – The webpage layout
- `script.js` – Your JavaScript goes here
- `README.md` – Instructions and references

---

## ✅ Your Task

You will complete the `getJoke` function to:
1. Fetch a random joke from this API:
   ```
https://official-joke-api.appspot.com/random_joke
```
2. Extract the `setup` and `punchline` from the response.
3. Display the joke in the paragraph tags on the page.
4. Handle any errors using `try...catch` and show a friendly error message.

---

## 💡 Helpful Resources
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [FreeCodeCamp: async/await tutorial](https://www.freecodecamp.org/news/async-await-in-javascript/)
- [Official Joke API](https://official-joke-api.appspot.com)

---

## 🧪 Bonus Challenge
- Add a loading message while waiting for the API response.
- Disable the button while loading and enable it again once the joke appears.
