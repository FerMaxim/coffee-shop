// src/pages/About.js
import React, { useState } from 'react';

const About = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за подписку! На ваш email: ${email}`);
  };

  return (
    <div className="mt-4">
      <h2>О нас</h2>
      <p>Мы - лучший кофейный магазин с доставкой по всему городу!</p>

      {/* Форма подписки */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Подпишитесь на новости</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Подписаться</button>
      </form>
    </div>
  );
};

export default About;
