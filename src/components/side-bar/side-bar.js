import React from "react";

import './side-bar.scss';
import logoIcon from './Logo.svg';
// import a from '../../../public/img/'

const SideBar = () => {
  return (
    <div className="side-bar">
    <section className="side-bar__logo">
      <img src={logoIcon} alt="logo" />

    </section>
    <ul className="side-bar__nav">
      <li className="side-bar__nav-li side-bar__nav-li--active">
        <a href="#w">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="#6347F5" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 6.75439C7 6.20211 7.44772 5.75439 8 5.75439H21C21.5523 5.75439 22 6.20211 22 6.75439C22 7.30668 21.5523 7.75439 21 7.75439H8C7.44772 7.75439 7 7.30668 7 6.75439Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7 12.7544C7 12.2021 7.44772 11.7544 8 11.7544H21C21.5523 11.7544 22 12.2021 22 12.7544C22 13.3067 21.5523 13.7544 21 13.7544H8C7.44772 13.7544 7 13.3067 7 12.7544Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7 18.7544C7 18.2021 7.44772 17.7544 8 17.7544H21C21.5523 17.7544 22 18.2021 22 18.7544C22 19.3067 21.5523 19.7544 21 19.7544H8C7.44772 19.7544 7 19.3067 7 18.7544Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 6.75439C5 6.20211 4.55228 5.75439 4 5.75439H3C2.44772 5.75439 2 6.20211 2 6.75439C2 7.30668 2.44772 7.75439 3 7.75439H4C4.55228 7.75439 5 7.30668 5 6.75439Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 12.7544C5 12.2021 4.55228 11.7544 4 11.7544H3C2.44772 11.7544 2 12.2021 2 12.7544C2 13.3067 2.44772 13.7544 3 13.7544H4C4.55228 13.7544 5 13.3067 5 12.7544Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 18.7544C5 18.2021 4.55228 17.7544 4 17.7544H3C2.44772 17.7544 2 18.2021 2 18.7544C2 19.3067 2.44772 19.7544 3 19.7544H4C4.55228 19.7544 5 19.3067 5 18.7544Z" />
        </svg>
            <span>Токены</span>
        </a>
      </li>
      <li className="side-bar__nav-li">
        <a href="#w">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2 11.2544C2 6.55997 5.80558 2.75439 10.5 2.75439C15.1944 2.75439 19 6.55997 19 11.2544C19 15.9488 15.1944 19.7544 10.5 19.7544C5.80558 19.7544 2 15.9488 2 11.2544ZM10.5 4.75439C6.91015 4.75439 4 7.66454 4 11.2544C4 14.8442 6.91015 17.7544 10.5 17.7544C14.0899 17.7544 17 14.8442 17 11.2544C17 7.66454 14.0899 4.75439 10.5 4.75439Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.0929 15.8473C15.4834 15.4568 16.1166 15.4568 16.5071 15.8473L21.7071 21.0473C22.0976 21.4379 22.0976 22.071 21.7071 22.4615C21.3166 22.8521 20.6834 22.8521 20.2929 22.4615L15.0929 17.2616C14.7024 16.871 14.7024 16.2379 15.0929 15.8473Z" />
        </svg>
            Поиск
        </a>
      </li>

    </ul>
    <p  className="side-bar__footer">Русский</p>
    </div>

  )
}

export default SideBar;