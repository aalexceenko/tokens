import React from "react";
import ItemList from "../item-list/item-list";
import Filter from "../filter";

import './lists.scss';

const Lists = ({tokens}) => {

  // const data = tokens.slice();

  console.log('data ', tokens);
  // console.log(tokens);

  const allTokens = tokens.map((token, idx) => {
    return <ItemList token={token} key={idx} />
  })
  return (
    <div className="lists">
      <Filter />
      {/* <ItemList /> */}
      {/* <ItemList /> */}
      {allTokens}

    </div>


  )
}

export default Lists;