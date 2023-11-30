import React from 'react';
import { Route, Routes } from "react-router";
import './App.css';



import Form from "./components/Form/Form";
import LookBookPage from "./components/LookBookPage/LookBookPage";
import LookPage from "./components/LookPage/LookPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form" Component={Form} />
        <Route path="/" Component={LookBookPage} />
        <Route path="/look-card-page" Component={LookPage} />
      </Routes>
    </div>
  );
}

export default App;
