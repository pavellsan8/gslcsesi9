import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home.jsx';
import CollectionPage from './pages/Collection/Collection.jsx';

function BasicExample() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
    </div>
    </>
  );
}

export default BasicExample;