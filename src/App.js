import logo from './logo.svg';
import './App.css';
import React from 'react'
import TopView from './topView';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterView from './characterView';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopView />} />
        <Route path="/character/:id" element={<CharacterView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
