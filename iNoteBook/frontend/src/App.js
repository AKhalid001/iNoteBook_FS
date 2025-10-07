import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Infobar } from "./Components/Infobar";
import { Navbar } from "./Components/Structure/Navbar";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Signin } from "./Components/Pages/Signin";
import { Signup } from "./Components/Pages/Signup";
import { NoteState } from "./Context/NoteState";
import NewNote from "./Components/Note/NewNote";
import MyNotes from "./Components/Note/MyNotes";
import UpdateNote from "./Components/Note/UpdateNote";
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
              <Route exact path="/myNote" element={<MyNotes />} />
              <Route exact path="/myNote/updateNote" element={<UpdateNote />} />

            </Routes>
            </div>
            {/* <Infobar /> */}
          </Router>
        </NoteState>

    </>
  );
}

export default App;
