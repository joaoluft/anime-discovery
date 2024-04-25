import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./themes/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/profile" />
          <Route path="/login" element={<Login />} />
          <Route path="/anime/:id" />
          <Route path="*" />
        </Routes>
      </Router>
    </>
  );
};
