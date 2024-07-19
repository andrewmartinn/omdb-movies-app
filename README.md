# OMDB Movies App

![omdb-home](https://github.com/user-attachments/assets/1c30337a-5438-4534-96ed-24b09aa5eca8)
Homepage

![omdb-likes](https://github.com/user-attachments/assets/4f34d1fd-5a29-4ce4-8828-93f53d95b7de)
Likes Page

![omdb-light](https://github.com/user-attachments/assets/8532e52d-4b37-40c4-a65e-2fc7aec49961)
Light Theme

React Application to showcase movies data from OMDB movies API. Users view information on thier favourite movies. Additonality users can search and like thier favourite movie and keep track of thier liked movies.

## Technologies Used

- [Vite](https://vitejs.dev/): Fast, opinionated web dev build tool
- [Chakra UI](https://v2.chakra-ui.com/getting-started): Simple and modular and accessible component library
- [React Router](https://reactrouter.com/): Declarative routing for React applications
- [React Icons](https://react-icons.github.io/react-icons/):A library containing popular icons for React projects, used for displaying various icons throughout the application.
- [Framer Motion](https://www.framer.com/motion/introduction/): Animation library for React
- [OMDB API](https://www.omdbapi.com/): Official OMDB API provides information related to movies

## Project Features

- **Display Movies:** Display movie results from API endpoint.
- **Search Functionality:** Search for your favourite movies using keywords like movie title.
- **Favorite Movies:** Ability to mark and save favorite movies.
- **Dark/Light Mode Toggle:** Ability to toggle between dark and light theme modes.
- **Sorting Movies:** Sorting movies results according to thier release year or title.
- **Pagination:** Implemented pagination for efficiently navigating through multiple pages.

## Project Outcomes

- **Responsive Design:** Ensured the application UI is consistent and responsive across different screen sizes.

- **Dynamic Pagination:** Implemented dynamic pagination component to ensure the results are refetched according to the current page number to display the updated movie results.

- **Third-Party API Integration:** Successfully interacted with the official OMDB API to fetch and display movies data dynamically based on user queries and preferences.

- **MobX State Management:** Utilized MobX store to manage global application state efficiently. This included managing movies data and liked movie states.

- **Sort Functionality:** Implemented movies sort functionality where the users can view sorted results by ascending or descending order according to movie title or release year. The sort functionlity is pagination aware so the results are persisted across page changes.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/guide/)

To get started you need to:

- Clone the project
- Install listed dependencies
- Run available scripts
- Create a env file

### Install dependencies

```
yarn install
```

### Create an enviroment file to store OMDB API Key and base API url

```
VITE_APP_API_KEY=your-api-key-here
```

```
VITE_APP_API_BASE_URL=http://www.omdbapi.com/
```

### Run React dev server

```
yarn dev
```

### To build for production

```
yarn build
```

## Deployment

To deploy this project run

```
yarn run deploy
```
