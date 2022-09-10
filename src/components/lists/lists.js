import React from "react";
import ItemList from "../item-list/item-list";
import Filter from "../filter";

import './lists.css';

const Lists = () => {
  return (
    <div className="lists">
      <Filter />

      <ItemList />
    </div>


  )
}

export default Lists;