import React, {useState} from "react";

import './item-list.scss';

const ItemList = ({token}) => {
  console.log(token);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(current => !current);
  }

  const {id, name, symbol, logoURI, tvl, tvlChangePercentage, users, volume, volumeChangePercentage, price} = token;
  const {hours24, days7, days365} = token.priceChange;

  const getPercentColour = (percent) => {
    if (percent > 0) {
      return 'item-list__price-block--positive'
    } else if (percent < 0) {
      return 'item-list__price-block--negative'
    } else {
      return 'item-list__price-block--zero'
    }
  }

  return (
  
    <div className="item-list">
      <span className="item-list__number">#{id}</span>
      <img className="item-list__img" alt="" src={logoURI}></img>
      <section className="item-list__title">
        <p>{name}</p>
        <span>{symbol}</span>
      </section>
      <section className="item-list__price">
        <p>{price} $</p>
        <div className="item-list__price-block">
          <span className={getPercentColour(hours24)}>{hours24}%</span>
          <span className={getPercentColour(days7)}>{days7}%</span>
          <span className={getPercentColour(days365)}>{days365}%</span>
        </div>
      </section>
      <section className="item-list__volume">
        <p>{volume} $</p>
        <span>{volumeChangePercentage}%</span>
      </section>
      <section className="item-list__tvl">
        <p>{tvl} $</p>
        <span>{tvlChangePercentage}%</span>
      </section>
      <section className="item-list__amount">
        <img src="/img/users.svg" alt="" />
        <p>{users}</p>
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