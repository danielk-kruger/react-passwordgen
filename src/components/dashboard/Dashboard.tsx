import React, { useEffect } from 'react';
import './dashboard.css';
import AccountComponent from './AccountComponent';
import { PasswordSchema } from '../../App';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import DashControls from './DashControls';

type Props = {
  showDashboard: boolean;
  setShowDashboard: (showDashboard: boolean) => void;
  savedPassword: PasswordSchema[];
  setSavedPassword: (savedPassword: PasswordSchema[]) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const Dashboard: React.FC<Props> = ({
  showDashboard,
  setShowDashboard,
  savedPassword,
  setSavedPassword,
  showModal,
  setShowModal,
}) => {
  return (
    <div className={`dashboard ${showDashboard ? 'slideUp' : ''}`}>
      <div className={`toggle-dashboard ${!showDashboard ? 'open' : ''}`}>
        <button
          className={`btn-toggle`}
          onClick={() => setShowDashboard(!showDashboard)}
        >
          {showDashboard ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      <div className='wrapper'>
        <div className='dashboard-head'>
          <h2>Your Accounts</h2>
          <DashControls />
        </div>
        {/* TODO Add a dashboard controls component */}
        <div className='dashboard-content'>
          {savedPassword.map(item => (
            <AccountComponent
              account={item}
              url={item.url}
              password={item.password}
              email={item.email}
              key={item.password}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
