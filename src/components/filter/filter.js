import React, {useState} from "react";

import './filter.scss';

const Filter = () => {
  const tokens = ['Все', 'DeFi', 'Wallets', 'Games', 'DEX'];
  const [isActive, setIsActive] = useState('Все');

  const listTokens = tokens.map((el, indx) => {
    return <li 
              key={indx}
              className={`${isActive === el && `filter-list--active`}`}
              onClick={() => {
                setIsActive(el);
              }}>
              {el}
            </li>
  })

  return (
    <div className="filter">
      <h1>Токены Everscale</h1>
      <ul className="filter-list">
        {listTokens}
      </ul>
    </div>
  )
}

export default Filter;