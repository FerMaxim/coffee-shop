import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Подключение стилей Bootstrap
import About from './pages/About';
import Franchise from './pages/Franchise';
import PreOrder from './pages/PreOrder';
import Home from './pages/Home';

// Главный компонент приложения
const App = () => {
  return (
    <Router>
      <div className="container"> {/* Обернули в контейнер для отступов */}
        {/* Навигационное меню с Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Главная</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">О нас</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/franchise">Франчайзи</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preorder">Заказ кофе заранее</Link>
            </li>
          </ul>
        </nav>

        {/* Основное содержимое */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/preorder" element={<PreOrder />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
