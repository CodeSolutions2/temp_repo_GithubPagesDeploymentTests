// import React from "react";
// import { createRoot } from 'react-dom/client';

// import { App } from "./src/App.js"

// -----------------------------------------

// [0] Building-Deploying JavaScript code using Node.js: WORKED
const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Node.js!";
document.body.append(helloDiv);

// -----------------------------------------

// [1] Building-Deploying React code using Node.js: 
// const container = document.getElementById('root');
// const root = createRoot(container);
// const element = React.createElement('div', {className: 'div_name'}, 
//                                     React.createElement('h1', {className: 'div_name'}, 'Header Text'), 
//                                     React.createElement('p', null, 'Paragraph Text'));
// root.render(element);
// OR
// ReactDOM.render(<App />, container)
