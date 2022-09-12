import React, { useState } from "react";
import ItemList from "../item-list/item-list";
import Filter from "../filter";

import './lists.scss';

const Lists = ({tokens}) => {

  const data = tokens.slice();

  const allTokens = data.map((token, idx) => {
    return <ItemList token={token} key={idx} />
  })

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleChangefilter = (event) => {
    if (event.target.tagName === 'LI') {
      setSelectedFilter(event.target.getAttribute("data-value"));
    }
  }

  const filteredList = data.filter((item) => item.categories.includes(selectedFilter)).map((token, idx) => {
    return <ItemList token={token} key={idx} />
  });

  const allFilteredTokens = selectedFilter === 'all' ? allTokens : filteredList;

  return (
    <div className="lists">
      <Filter handleChangefilter={handleChangefilter} />
      {allFilteredTokens}
    </div>
  )
}

export default Lists;