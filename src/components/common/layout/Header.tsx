import React, { useState } from 'react';
import Notification from '../../../assets/icons/notification-icon.png';
import Logo from '../../../assets/logo.svg';
import Avatar from '../../../assets/avatar.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <section className='header'>
      <div className='wrapper'>
        <div className='left_section'>
          <Link to={'/'}>
          <img src={Logo} width={144} height={36} alt='logo' />
          </Link>
          <div className='search_container'>
            <input
              type='text'
              placeholder='Search for anything'
              className='search-input'
            />
            <button className='search-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='11' cy='11' r='8'></circle>
                <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
              </svg>
            </button>
          </div>
        </div>

        <div className='right_section'>
          <a href='#' className='nav-item'>
            <span className='nav_text'>Docs</span>
          </a>
          <a href='#' className='nav_item'>
            <img
              src={Notification}
              alt='notification'
              width={26}
              height={26}
              className='avatar'
            />
          </a>

          <div className='user_profile' onClick={toggleDropdown}>
            <img
              src={Avatar}
              alt='avatar'
              width={48}
              height={48}
              className='avatar'
            />
            <span className='username'>Adedeji</span>
            <svg
              className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z'
                fill='currentColor'
              />
            </svg>
            {isDropdownOpen && (
              <div className='dropdown-menu'>
                <a href='#'>Profile</a>
                <a href='#'>Settings</a>
                <a href='#'>Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
