import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <h3>Ваша корзина</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart('Кофе эспрессо')} className="btn btn-success">
        Добавить кофе эспрессо
      </button>
    </div>
  );
};

export default Cart;
