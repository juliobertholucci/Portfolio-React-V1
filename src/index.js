import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/habilidades/' element={<p>Oi</p>}/>
      </Routes>
    </BrowserRouter>
=======
    <App />
>>>>>>> 1cb36b299fcf660b2674e5ad99568ee7aacf00f2
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
