import React, { useState, useEffect } from 'react';
import { userOptions } from '../../App';
import './controls.css';
import Toggler from '../toggler/Toggler';
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
  options: userOptions;
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
  showSettings,
  setShowSettings,
  options,
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

  return (
    <div className="controls-wrapper">
      <button className="close-settings" onClick={() => setShowSettings(false)}>
        <FaChevronDown />
      </button>
      <div className="config-header">
        <h4>Password Options</h4>
      </div>

      <div className="form-group">
        <div className="lower-group">
          <Toggler option={lower} toggleOption={setLower} />
          <span>Set Lowercase</span>
        </div>
        <div className="upper-group">
          <Toggler option={upper} toggleOption={setUpper} />
          <span>Set Uppercase</span>
        </div>
        <div className="number-group">
          <Toggler option={numbers} toggleOption={setNumbers} />
          <span>Set Numbers</span>
        </div>
        <div className="symbol-group">
          <Toggler option={symbols} toggleOption={setSymbols} />
          <span>Set Symbols</span>
        </div>
        <div className="length-setting">
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
