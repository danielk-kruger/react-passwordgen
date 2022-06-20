import React, { useState, useEffect } from 'react';
import './form.css';
import Controls from '../controls/Controls';
import { userOptions, PasswordSchema } from '../../App';
import { FaKey, FaClipboard, FaCog } from 'react-icons/fa';
import { randFunc } from '../../utils/options';

type Props = {
  password: string;
  setPassword: (password: string) => void;
  savedPassword: PasswordSchema[];
  options: userOptions;
  setOptions: (options: userOptions) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
};

const Form: React.FC<Props> = ({
  password,
  setPassword,
  savedPassword,
  options,
  setOptions,
  setShowModal,
  showSettings,
  setShowSettings,
}) => {
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [length, setLength] = useState(12);

  const [inputText, setInputText] = useState('');

  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(savedPassword));
  }, [savedPassword]);

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
    optionsArr.forEach(item => {
      typesKeys.push({ ...item });
    });

    return typesKeys;
  };

  const generatePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newPass: string = '';
    let totalOptions: boolean[] = getOptionValues();
    // [false, false, true, true] -> [0, 0, 1, 1]
    let typesCount = 0;

    // Get the names of every option and filter out the false values
    const typesArr = getOptionKeys().filter(item => Object.values(item)[1]);

    totalOptions.forEach(val => {
      // Count how many are true by adding boolean values
      // 0 -> false
      // 1 -> true
      typesCount += Number(val);
    });

    if (typesCount === 0) return '';

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(value => {
        const funcName: string = Object.values(value)[0];

        newPass += randFunc[funcName]();
      });
    }

    setPassword(newPass.slice(0, length));
    setGenerated(true);

    //if (showSettings) setShowSettings(false);
  };

  useEffect(() => {
    setInputText(password);

    if (password === '') setGenerated(false);
  }, [password]);

  const handleSaveDialogue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (showSettings) setShowSettings(false);
    setShowModal(true);
  };

  return (
    <div className={`form-wrapper ${showSettings ? 'toggled-settings' : ''}`}>
      <div className={`settings-container ${showSettings ? 'show' : ''}`}>
        <Controls
          setPassword={setPassword}
          setShowSettings={setShowSettings}
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
      <form id='form'>
        <button
          type='button'
          className={`btn-toggleSettings ${showSettings ? 'hide' : ''}`}
          onClick={() => setShowSettings(true)}
        >
          <FaCog />
        </button>

        <div className='pass-group'>
          <label htmlFor='pass-result' className='pass-icon'>
            <FaKey />
          </label>
          <input type='text' value={inputText} id='pass-result' readOnly />
          <button className={`copy-pass ${generated ? 'show' : ''}`}>
            <FaClipboard />
          </button>
        </div>
        <div className='buttons-group'>
          <button type='submit' onClick={generatePassword} className='btn-gen'>
            Generate Password
          </button>
          <button
            disabled={!generated}
            type='submit'
            className='btn-save'
            onClick={handleSaveDialogue}
          >
            Save Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
