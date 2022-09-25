import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import  Tambah  from './pages/Tambah/Tambah';
import  Data  from './pages/Data/Data';
import  Update  from './pages/Update/Update';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/Tambah" element={<Tambah />} />
      <Route path="/Update" element={<Update />} />
    </Routes>
  );
}

export default App;
