# rocketshoes
A marketplace of shoes built with ReactJS, using tools as Redux, Redux Saga, Immer and Tostify

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn json-server server.json -p 3333`
Runs the fake database available in the project directory using the port 3333 (you can change if necessary).
Before using this script you must run `yarn add json-server`.
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.
Routes:
+ products:
- /products
- /products/${id}
+ stock:
- /stock
- /stock/${id}
