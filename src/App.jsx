import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/LoginForm";
import Art from "./Components/pages/Art";
import Department from "./Components/pages/Department";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <div className="switch">
            <label>Dark/Light mode</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/login" element={<Login />} />
              <Route path="/department/:id" exact element={<Department />} />
              <Route path="/art/:artId" exact element={<Art />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
