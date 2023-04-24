import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component.jsx";
import ExerciseList from "./components/exercise-list.component.jsx"
import EditExercise from "./components/edit-exercise.component.jsx"
import CreateExercise from "./components/create-exercise.component.jsx"
import CreateUser from "./components/create-user.component.jsx"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExerciseList />} />
          <Route path="edit/:id" element={<EditExercise />} />
          <Route path="create" element={<CreateExercise />} />
          <Route path="user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
