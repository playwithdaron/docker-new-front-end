import React from 'react';
import './Card.scss';
import userIcon from '../../../../assets/icons/users.png';
import activeUserIcon from '../../../../assets/icons/active-users-icon.png';
import loanUserIcon from '../../../../assets/icons/user-loans-icon.png';
import savingsUserIcon from '../../../../assets/icons/user-savings-icon.png';

const UserCard = () => {
  const cardItems = [
    {
      icon: userIcon,
      label: 'Users',
      total: '2,453',
    },
    {
      icon: activeUserIcon,
      label: 'Active Users',
      total: '2,453',
    },
    {
      icon: loanUserIcon,
      label: 'Users with Loans',
      total: '12,453',
    },
    {
      icon: savingsUserIcon,
      label: 'Users with Savings',
      total: '102,453',
    },
  ];
  return (
    <section className='card_container'>
      <p className='user_text'>Users</p>

      <div className='wrapper'>
        {cardItems.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.icon} alt={item.label} width={40} height={40} className='card-icon' />
            <p>{item.label.toUpperCase()}</p>
            <p>{item.total}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserCard;
