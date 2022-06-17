import React from 'react';
import './toggler.css';

type Props = {
  option: boolean;
  toggleOption: (option: boolean) => void;
};

const Toggler: React.FC<Props> = ({ option, toggleOption }) => {
  return (
    <div
      className={`custom-switch ${option ? 'checked' : ''}`}
      onClick={() => toggleOption(!option)}
    >
      <div className="switch-slider">
        <div className="switch-knob"></div>
      </div>
    </div>
  );
};

export default Toggler;
