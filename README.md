# React User List App

This repository contains a React application that fetches and displays a list of users from the JSONPlaceholder API.

## Overview

This project was created as a checkpoint to demonstrate proficiency in:

* Creating a React application using `create-react-app`.
* Fetching data from an external API using `axios`.
* Managing component state with the `useState` hook.
* Using the `useEffect` hook for side effects, such as data fetching.
* Mapping data to render dynamic lists.
* Styling React components.

## Functionality

The application fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and displays each user's name on the screen.

## Technologies Used

* React
* Axios

## Setup Instructions

To run this application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/enkiga/consuming_api_js
    ```

2. **Navigate to the project directory:**

    ```bash
    cd consuming_api_js
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will open the application in your default web browser.

## File Structure

* `src/`: Contains the application's source code.
  * `App.js`: The main application component.
  * `UserList.jsx`: Component responsible for fetching and displaying the list of users.
  * `index.js`: Entry point of the React application.
* `package.json`: Lists the project's dependencies and scripts.
* `README.md`: This file.

## Usage

Once the application is running, you will see a list of users fetched from the JSONPlaceholder API.

## API

The application uses the following API endpoint:

* `https://jsonplaceholder.typicode.com/users`

## Author

[Enoch Garoli](https://github.com/enkiga)
