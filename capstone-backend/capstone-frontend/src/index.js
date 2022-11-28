import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import { GitHub } from './Components/GitHub.js';
import { GitLab } from './Components/GitLab.js';
import { BitBucket } from './Components/BitBucket.js';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import reportWebVitals from './WebVitals/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Link id="link1" to="/">Github</Link>
    <Link id="link2" to="/Gitlab">Gitlab</Link>
    <Link id="link3" to="/Bitbucket">Bitbucket</Link>
  <Routes>
<Route exact={true} path="/" element={<GitHub/>} />
</Routes>
<Routes>
<Route exact={true} path="/Gitlab" element={<GitLab/>} />
</Routes>
<Routes>
<Route exact={true} path="/Bitbucket" element={<BitBucket/>} />
</Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
