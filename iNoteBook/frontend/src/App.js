import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
// import { Infobar } from "./Components/Infobar";
import { NoteState } from "./Context/NoteState";
import NewNote from "./Components/NewNote";
// import Bg from './../public/bg.jpg';


function App() {
  return (
    <>
        <NoteState>
          <Router>
            <Navbar />
            <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/newNote" element={<NewNote />} />
            </Routes>
            </div>
            {/* <Infobar /> */}
          </Router>
        </NoteState>

    </>
  );
}

export default App;
