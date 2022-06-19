import React, { useState, useEffect } from 'react';
import { userOptions } from '../../App';
import './controls.css';
import Toggler from '../toggler/Toggler';
import { FaChevronDown, FaRedo } from 'react-icons/fa';

type Props = {
  setPassword: (password: string) => void;
  setShowSettings: (showSettings: boolean) => void;
  setOptions: (options: userOptions) => void;
  length: number;
  setLength: (length: number) => void;
  lower: boolean;
  setLower: (lower: boolean) => void;
  upper: boolean;
  setUpper: (upper: boolean) => void;
  numbers: boolean;
  setNumbers: (numbers: boolean) => void;
  symbols: boolean;
  setSymbols: (symbols: boolean) => void;
};

const Controls: React.FC<Props> = ({
  setPassword,
  setShowSettings,
  setOptions,
  length,
  setLength,
  lower,
  setLower,
  upper,
  setUpper,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}) => {
  useEffect(() => {
    setOptions({
      lower: lower,
      upper: upper,
      numbers: numbers,
      symbols: symbols,
    });
  }, [lower, upper, numbers, symbols, setOptions]);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Reset all values to their initial states

    setLower(true);
    setUpper(true);
    setNumbers(true);
    setSymbols(true);
    setLength(12);
    setPassword('');
  };

  return (
    <div className='controls-wrapper'>
      <button className='close-settings' onClick={() => setShowSettings(false)}>
        <FaChevronDown />
      </button>
      <div className='config-header'>
        <h4>Password Options</h4>
      </div>

      <div className='form-group'>
        <div className='lower-group'>
          <Toggler option={lower} toggleOption={setLower} />
          <span>Set Lowercase</span>
        </div>
        <div className='upper-group'>
          <Toggler option={upper} toggleOption={setUpper} />
          <span>Set Uppercase</span>
        </div>
        <div className='number-group'>
          <Toggler option={numbers} toggleOption={setNumbers} />
          <span>Set Numbers</span>
        </div>
        <div className='symbol-group'>
          <Toggler option={symbols} toggleOption={setSymbols} />
          <span>Set Symbols</span>
        </div>
        <div className='length-setting'>
          <span>Password Length: </span>
          <input type='number' value={length} onChange={(e) => setLength(Number(e.target.value))} />
        </div>
        <button className='clear-settings' onClick={handleReset}>
          <FaRedo />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Controls;
