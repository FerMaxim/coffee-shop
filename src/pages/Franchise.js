// src/pages/Franchise.js
import React, { useState } from 'react';

const Franchise = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${name}! Мы свяжемся с вами по email: ${email} или телефону: ${phone}`);
  };

  return (
    <div className="mt-4">
      <h2>Франчайзи</h2>
      <p>Хотите стать частью нашей сети? Подайте заявку на франшизу!</p>

      {/* Форма заявки на франшизу */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Ваше имя</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
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

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Введите ваш телефон"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Отправить заявку</button>
      </form>
    </div>
  );
};

export default Franchise;
