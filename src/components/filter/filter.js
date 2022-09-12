import React, {useState} from "react";
import {categories} from "../mock/tokens";

import './filter.scss';

const Filter = ({handleChangefilter}) => {

  const [isActive, setIsActive] = useState('Все');

  const listTokens = categories.map((el, indx) => {
    return <li 
              key={indx}
              className={`${isActive === el.title && `filter-list--active`}`}
              data-value={el.id}
              onClick={() => {
                setIsActive(el.title);
              }}>
              {el.title}
            </li>
  })

  return (
    <div className="filter">
      <h1>Токены Everscale</h1>
      <ul className="filter-list" onClick={handleChangefilter}>
        {listTokens}
      </ul>
    </div>
  )
}

export default Filter;