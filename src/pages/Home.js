import React from 'react';
import CompanyInfo from '../components/CompanyInfo';

const Home = () => {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <h1>Добро пожаловать в наш кофейный магазин</h1>
        <p>Лучшее место для ценителей кофе</p>
      </header>
      <CompanyInfo />
    </div>
  );
};

export default Home;
