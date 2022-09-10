import React from "react";

import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <h1>Токены Everscale</h1>
      <ul className="filter-list">
        <li className="filter-list--active">Все</li>
        <li>DeFi</li>
        <li>Wallets</li>
        <li>Games</li>
        <li>DEX</li>

      </ul>
    </div>
  )
}

export default Filter;