import React from 'react';

import './dashcontrols.css';

const DashControls = () => {
  return (
    <div className='dash-controls'>
      <div className='add-accountField'>
        <button className='btn-add'>Add Account</button>
      </div>
      <div className='edit-accountField'>
        <button className='btn-edit'>Edit Account</button>
      </div>
    </div>
  );
};

export default DashControls;
