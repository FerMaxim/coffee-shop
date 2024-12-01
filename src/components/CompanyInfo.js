import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="text-primary">О нашей компании</h2>
          <p className="lead">
            Мы — команда, которая заботится о том, чтобы каждая чашка кофе была
            приготовлена с любовью. Наша миссия — объединить людей через
            превосходный вкус и аромат, которые вдохновляют каждый день.
          </p>
          <p>
            С момента нашего основания, мы стремимся к совершенству в каждом
            аспекте: от подбора лучших кофейных зерен до создания уникальных
            рецептов. Мы гордимся нашими клиентами и благодарим вас за
            возможность быть частью вашего дня.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Company overview"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
