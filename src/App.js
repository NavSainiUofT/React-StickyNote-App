import React from 'react';
import './App.css';
import { NavBar } from './components/navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { StickyNotes } from './components/stickynotes';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
            <Routes>
                <Route path="" element={<StickyNotes/>}></Route>
                <Route path="home" element={<StickyNotes/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
