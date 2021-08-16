# Jangle Web

Front end web client for Jangle cross-platform chat application built with React and socket.io.

To view, visit the website deployed at [heroku](https://jangle-chat.herokuapp.com/).


## Table of contents

+ [Built with]()
+ [Installation]()
+ [Screen-shots]()
+ [To do's]()
+ [Future updates]()

## Built with

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://flutter.dev/)
[![Axios](https://img.shields.io/badge/Axios-%23FFFFFF.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHBhdGggZD0iTTU1LjQgMjIuMDhoLTcuMjI1bC00LjI1IDcuMDU1LTQuMTIyLTcuMDU1aC03LjNsNy45NDcgMTEuNjQ1LTUuMTQyIDcuNTIyLTguNDU3LTE5LjEyNWgtNi4zNzVsMTAuNTQgMjMuNzE0aDcuOTQ3bDQuOTcyLTcuNTIyIDQuOTMgNy41MjJoNi41MDJsLTcuODYyLTEyLjExMnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTQuODIgNTkuNzI1SDBMMjQuNDcgNC4yMjNIMzkuNHoiIGZpbGw9IiMwYTk5ZTAiLz48cGF0aCBkPSJNNDkuMTM3IDU5LjcyNUw2NCA1OS43NzggMzkuNCA0LjIyMkgyNC40N2wyNC42NjggNTUuNTAyIiBmaWxsPSIjMjIyIi8+PC9zdmc+&logoColor=white)](https://axios-http.com/)

## Installation

Follow these simple steps to run project locally:

+ Change the backend server's endpoint url in file `/src/component/tempConstant.js` to your backend server's url.

```js
const apiUrl = <your_backend_server_url>; // <= Here---------------

const data = {apiUrl};
...
```

+ Change the backend server's socket.io url to your backend server's url in file `/src/context/socket.js`

```js
...
import React from 'react'

const SOCKET_URL = <your_backend_server_url>; // <= Here---------------

export const socket = socketio.connect(SOCKET_URL);
...
```

+ Install all the dependencies of package.json file by running below command in root directory.
    ```
    npm install
    ```

+ Run the following command in the root directory to start the project. 
    ```
    npm start 
    ```
<br>

## Screenshots

Login screen
![loginScreenWebJangle](https://user-images.githubusercontent.com/54198301/129507907-e123bb9d-69bc-404d-bcd5-c1f78fc082b7.png)

Dashboard
![homeScreenJangleWeb](https://user-images.githubusercontent.com/54198301/129507910-7ae08c50-ca2a-49d4-b419-3b65788c7640.png)

## Todos

+ When creating/selecting chat from new conversation page, the chatList panel doesn't gets updated, either for addition or for selection.
+ Upgrading UI, adding page titles to signup, login and dashboard pages
+ Adding personal info part and ability to edit firstName and lastName.
+ Implementing search functionality.
+ Implementing paging of chat messages
+ Implementing chat user's details page.
+ Implementing read-messages
+ Implementing last seen / online
+ Implementing message sending time.
+ Implementing message deletion if the message is sent my current user.




