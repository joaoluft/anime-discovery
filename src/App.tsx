import { Login } from "./Pages/Login";
import { Homepage } from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./themes/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" />
          <Route path="/login" element={<Login />} />
          <Route path="/anime/:id" />
          <Route path="*" />
        </Routes>
      </Router>
    </>
  );
};
