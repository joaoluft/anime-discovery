import { Login } from "./pages/Login";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./themes/GlobalStyles";
import { AnimeDetails } from "./pages/AnimeDetails";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="*" />
        </Routes>
      </Router>
    </>
  );
};
