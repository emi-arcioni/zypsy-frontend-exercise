# Zypsy Frontend Exercise

by Emilio Arcioni

## Considerations

- When the user clicks on a category star, a PUT request will be made to toggle the favorite status of that category. This might feel awkward from a UX perspective, as all users consuming the API will see the same favorite statuses.

- A better option might have been to use localStorage to store the user's favorites. However, I thought it would be a good opportunity to take advantage of the existing PUT endpoint for categories.

- Due to time constraints, testing is minimal, with only a basic `<App />` test included.

---

## Running Instructions

Copy the file `.env.example` to `.env.local`, and feel free to modify the value of `REACT_APP_BACKEND_URL` to match the value where the backend server is running.

#### Install dependencies

```bash
$ npm install
```

#### Start the app

```bash
$ npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

#### Run tests

```bash
$ npm test
```

### Important
In order for the frontend to work properly, the backend app must be running at http://localhost:9000 (or at the URL specified by the `REACT_APP_BACKEND_URL` variable in your .env.local file).
