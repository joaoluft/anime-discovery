import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/profile" />
        <Route path="/login" />
        <Route path="/anime/:id" />
        <Route path="*" />
      </Routes>
    </Router>
  )
}