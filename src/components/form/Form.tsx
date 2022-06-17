import React, { useState, useEffect } from 'react';
import './form.css';
import Controls from '../controls/Controls';
import { userOptions } from '../../App';
import { FaKey, FaClipboard, FaCog } from 'react-icons/fa';
import { randFunc } from '../../utils/options';

type Props = {
  password: string;
  setPassword: (password: string) => void;
  savedPassword: string[];
  setSavePassword: (savedPassword: any | string[]) => void;
  generated: boolean;
  setGenerated: (generated: boolean) => void;
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
  options: userOptions;
  setOptions: (options: userOptions) => void;
};

const Form: React.FC<Props> = ({
  password,
  setPassword,
  savedPassword,
  setSavePassword,
  generated,
  setGenerated,
  showSettings,
  setShowSettings,
  options,
  setOptions,
}) => {
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [length, setLength] = useState(12);
  const [inputText, setInputText] = useState('');

  // Convert the options Object into an iterable
  const optionsArr = Object.entries(options);

  const getOptionValues = () => {
    let typesArr = new Array<boolean>();

    // Get the boolean value for every switch in settings
    optionsArr.forEach(([key, value]) => {
      typesArr.push(value);
    });

    return typesArr;
  };

  const getOptionKeys = () => {
    let typesKeys = new Array<Object>();

    // For every option push to an array a new object for every boolean value
    optionsArr.forEach((item) => {
      typesKeys.push({ ...item });
    });

    return typesKeys;
  };

  const generatePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    let newPass: string = '';
    let totalOptions: boolean[] = getOptionValues();
    let typesCount: number = 0;
    const typesArr = getOptionKeys().filter((item) => Object.values(item)[1]); // Get the names of every option and filter out the false values

    totalOptions.forEach((val) => {
      // Count how many are true by adding boolean values
      // 0 -> false
      // 1 -> true
      typesCount += Number(val);
    });

    if (typesCount === 0) return '';

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((value) => {
        const funcName: string = Object.values(value)[0];

        newPass += randFunc[funcName]();
      });
    }

    setPassword(newPass.slice(0, length));
    setGenerated(true);
  };

  useEffect(() => {
    setInputText(password);
  }, [password]);

  return (
    <div className={`form-wrapper ${showSettings ? 'toggled-settings' : ''}`}>
      <div className={`settings-container ${showSettings ? 'show' : ''}`}>
        <Controls
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          options={options}
          setOptions={setOptions}
          length={length}
          setLength={setLength}
          lower={lower}
          setLower={setLower}
          upper={upper}
          setUpper={setUpper}
          numbers={numbers}
          setNumbers={setNumbers}
          symbols={symbols}
          setSymbols={setSymbols}
        />
      </div>
      <form id="form">
        <button
          type="button"
          className={`btn-toggleSettings ${showSettings ? 'hide' : ''}`}
          onClick={() => setShowSettings(true)}
        >
          <FaCog />
        </button>

        <div className="pass-group">
          <label htmlFor="pass-result" className="pass-icon">
            <FaKey />
          </label>
          <input type="text" value={inputText} id="pass-result" readOnly />
          <button className={`copy-pass ${generated ? 'show' : ''}`}>
            <FaClipboard />
          </button>
        </div>
        <div className="buttons-group">
          <button type="submit" onClick={generatePassword} className="btn-gen">
            Generate Password
          </button>
          <button disabled={!generated} className="btn-save">
            Save Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
