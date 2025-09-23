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
// import Bg from './../public/bg.jpg';


function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/bg3.jpg')", // ✅ notice the leading slash
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <NoteState>
          <Router>
            <div className="px-2 py-2">

            <Navbar />
            </div>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
            {/* <Infobar /> */}
          </Router>
        </NoteState>
      </div>
    </>
  );
}

export default App;
