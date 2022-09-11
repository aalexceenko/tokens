import React, {useState} from "react";

import './item-list.scss';

const ItemList = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(current => !current);
  }

  return (
    <div className="item-list">
      <span className="item-list__number">#1</span>
      <img className="item-list__img" alt=""></img>
      <section className="item-list__title">
        <p>Wrapper EVER</p>
        <span>WEVER</span>
      </section>
      <section className="item-list__price">
        <p>0.1958 $</p>
        <div className="item-list__price-block">
          <span>0%</span>
          <span>+2.5%</span>
          <span>-10.5%</span>
        </div>
      </section>
      <section className="item-list__volume">
        <p>263 406 $</p>
        <span>-10.5%</span>
      </section>
      <section className="item-list__tvl">
        <p>10 291 268 $</p>
        <span>-10.5%</span>
      </section>
      <section className="item-list__amount">
        <img src="/img/users.svg" alt="" />
        <p>123 561</p>
      </section>
      <button className="item-list__btn" onClick={handleClick}>
        {!isShown ? <img src="/img/chevron-down.svg" alt="" /> : <img src="/img/chevron-up.svg" alt="" />}
      </button>

      {isShown && (
        <section className="item-list__additional">
          <p>This is a token of the Everscale</p>
        </section>
      )}

    </div>
  )
};

export default ItemList;