// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная страница</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/about" element={<h1>О нас</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
