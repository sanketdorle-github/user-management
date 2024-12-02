import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserForm from "./components/AddUserForm ";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/add-user" element={<AddUserForm />} />

      </Routes>
    </Router>
  );
};

export default App;
