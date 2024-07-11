import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import Dashboard from '../../../../assets/icons/dashboard-icon.png';
import UserIcon from '../../../../assets/icons/users-icon.png';
import GuarantorIcon from '../../../../assets/icons/guarantor-icon.png';
import LoansIcon from '../../../../assets/icons/loan-icon.png';
import DecisionIcon from '../../../../assets/icons/decision-icon.png';
import SavingsIcon from '../../../../assets/icons/savings-icon.png';
import RequestsIcon from '../../../../assets/icons/request-icon.png';
import WhitelistIcon from '../../../../assets/icons/white-list-icon.png';
import KarmaIcon from '../../../../assets/icons/karma-icon.png';
import OrganizationIcon from '../../../../assets/icons/organ-icon.png';
import SavingsProdIcon from '../../../../assets/icons/save-prod-icon.png';
import TransactionsIcon from '../../../../assets/icons/transaction-icon.png';
import FeesIcon from '../../../../assets/icons/fees-charge-icon.png';
import ProductsIcon from '../../../../assets/icons/save-prod-icon.png';
import ServiceIcon from '../../../../assets/icons/services-icon.png';
import AccountIcon from '../../../../assets/icons/service-acc-icon.png';
import SettlementsIcon from '../../../../assets/icons/dashboard-icon.png';
import ReportsIcon from '../../../../assets/icons/report-icon.png';
import PreferenceIcon from '../../../../assets/icons/prefer-icon.png';
import PricingIcon from '../../../../assets/icons/pricing-icon.png';
import AuditIcon from '../../../../assets/icons/audit-icon.png';

const SideBar = () => {
  const location = useLocation();

  const Customer = [
    {
      path: '/dashboard/users',
      label: 'Users',
      icon: UserIcon,
    },
    {
      path: '/dashboard/guarantor',
      label: 'Guarantors',
      icon: GuarantorIcon,
    },
    {
      path: '#',
      label: 'Loans',
      icon: LoansIcon,
    },
    {
      path: '#',
      label: 'Decision Models',
      icon: DecisionIcon,
    },
    {
      path: '#',
      label: 'Savings',
      icon: SavingsIcon,
    },
    {
      path: '#',
      label: 'Loan Requests',
      icon: RequestsIcon,
    },
    {
      path: '#',
      label: 'Whitelist',
      icon: WhitelistIcon,
    },
    {
      path: '#',
      label: 'Karma',
      icon: KarmaIcon,
    },
  ];

  const Businesses = [
    {
      path: '#',
      label: 'Organization',
      icon: OrganizationIcon,
    },
    {
      path: '#',
      label: 'Loan Products',
      icon: RequestsIcon,
    },
    {
      path: '#',
      label: 'Savings Products',
      icon: SavingsProdIcon,
    },
    {
      path: '#',
      label: 'Fees and Charges',
      icon: FeesIcon,
    },
    {
      path: '#',
      label: 'Transactions',
      icon: TransactionsIcon,
    },
    {
      path: '#',
      label: 'Services',
      icon: ServiceIcon,
    },
    {
      path: '#',
      label: 'Service Account',
      icon: AccountIcon,
    },
    {
      path: '#',
      label: 'Settlements',
      icon: SettlementsIcon,
    },
    {
      path: '#',
      label: 'Reports',
      icon: ReportsIcon,
    },
  ];

  const Settings = [
    {
      path: '#',
      label: 'Preferences',
      icon: PreferenceIcon,
    },
    {
      path: '#',
      label: 'Fees and Pricing',
      icon: PricingIcon,
    },
    {
      path: '#',
      label: 'Audit Logs',
      icon: AuditIcon,
    },
  ];

  return (
    <section className='sidebar_container'>
      <div className='dashboard'>
        <div className='organization'>
          <FaUserFriends />

          <span>Switch Organization</span>
          <svg
            // className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
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
        </div>
        <div>
          <img src={Dashboard} alt='dashboard icon' width={16} height={14} />
          <Link to={'/'}>Dashboard</Link>
        </div>
      </div>
      <div className='customers'>
        <p>CUSTOMERS</p>
        {Customer.map((item, index) => (
          <div
            key={index}
            className={`side_con  ${
              location.pathname.startsWith(item.path) ? 'active ' : ''
            }`}>
            <img src={item.icon} width={16} height={14} alt='user-icon' />
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>

      <div className='businesses'>
        <p>BUSINESSES</p>
        {Businesses.map((item, index) => (
          <div
            key={index}
            className={`side_con  ${
             location.pathname.startsWith(item.path) ? 'active' : ''
            }`}>
            <img src={item.icon} width={16} height={14} alt='user-icon' />
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
      <div className='settings'>
        <p>SETTINGS</p>
        {Settings.map((item, index) => (
          <div
            key={index}
            className={`side_con  ${
             location.pathname.startsWith(item.path) ? 'active ' : ''
            }`}>
            <img src={item.icon} width={16} height={14} alt='user-icon' />
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
