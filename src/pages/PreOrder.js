// src/pages/PreOrder.js
import React, { useState } from 'react';

const PreOrder = () => {
  const [coffeeType, setCoffeeType] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы заказали ${quantity} чашек кофе (${coffeeType})`);
  };

  return (
    <div className="mt-4">
      <h2>Заказ кофе заранее</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="coffeeType" className="form-label">Тип кофе</label>
          <select
            id="coffeeType"
            className="form-select"
            value={coffeeType}
            onChange={(e) => setCoffeeType(e.target.value)}
          >
            <option value="">Выберите тип кофе</option>
            <option value="эспрессо">Эспрессо</option>
            <option value="латте">Латте</option>
            <option value="капучино">Капучино</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Количество</label>
          <input
            type="number"
            id="quantity"
            className="form-control"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Заказать</button>
      </form>
    </div>
  );
};

export default PreOrder;
