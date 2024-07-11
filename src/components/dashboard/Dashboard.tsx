import React from 'react';
import './../common/layout/Layout.scss';
import UserCard from './components/user-overview/UserCard';
import UserData from './components/user-data/UserData';

const Dashboard = () => {
  return (
    <section className='main'>
      <UserCard />
      <UserData />
    </section>
  );
};

export default Dashboard;
