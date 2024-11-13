# Zypsy Frontend Exercise

by Emilio Arcioni

## Considerations

- When a user clicks a category star, a PUT request is made to toggle the favorite status of that category. This approach may create a suboptimal UX, as all users accessing the API will see the same favorite statuses.

- An alternative could have been using `localStorage` to store user-specific favorites. However, I chose to leverage the existing PUT endpoint for categories to explore its functionality.

- Due to time constraints, testing is minimal, with only a basic `<App />` test included.

## Running Instructions  - without Docker

### Backend (provided by Zypsy)

Requirements:
- node >= 18.19
- yarn

1. Install `yarn` globally on your system (if it isn't already installed)
    ```bash
    npm install -g yarn
    ```

1. Install dependencies in the `backend` folder
    ```bash
    yarn install
    ```

1. Start the backend
    ```bash
    yarn start
    ```

1. The API is served at [http://localhost:9000](http://localhost:9000/), and you can go to `/docs` to explore the API documentation.

### Frontend

Requirements:
- node >= 20.18
- npm

1. Within the `frontend` folder, copy `.env.example` to `.env.local`. (You can modify `REACT_APP_BACKEND_URL` if needed to match the backend server URL).
    ```bash
    cp .env.example .env.local
    ```

1. Install dependencies in the `frontend` folder
    ```bash
    npm install
    ```

1. Start the app
    ```bash
    npm start
    ```
    
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Run tests

```bash
$ npm test
```

## Running Instructions - with Docker

Requirements:
- Docker

1. Run `docker compose` within the root folder of the app

    ```bash
    docker compose up --build
    ```
1. Once the containers are up and running, open [http://localhost:3000](http://localhost:3000) to view the app in the browser.