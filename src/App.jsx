import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";
import "./index.css";

const handleFormSubmit = (formData) => {
  // Here you could send the data to a server or save it in localStorage
  localStorage.setItem('studentFormData', JSON.stringify(formData));
};

const App = () => (
  <>
  <h1>Student App 1</h1>
  <StudentForm onSubmit={handleFormSubmit} />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
