import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio'
import Countries from './Proyects/InfoCountries/Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App/>}/>
        <Route path='/resume' element = {<Resume/>}></Route>
        <Route path='/portfolio' element = {<Portfolio/>}></Route>
        <Route path='/countries' element = {<Countries/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
