import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form/Form';
import Modal from './components/modal/Modal';

export type userOptions = {
  lower: boolean;
  upper: boolean;
  numbers: boolean;
  symbols: boolean;
};

export interface PasswordSchema {
  title: string;
  url: string;
  email?: string;
  password: string;
}

const App = () => {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavePassword] = useState([]);
  const [options, setOptions] = useState({} as userOptions);
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('passwords') === null) {
      localStorage.setItem('passwords', JSON.stringify(savedPassword));
    }
  }, []);

  return (
    <div className='container'>
      <Modal
        password={password}
        savedPassword={savedPassword}
        setSavePassword={setSavePassword}
        showModal={showModal}
        setShowModal={setShowModal}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <Form
        password={password}
        setPassword={setPassword}
        savedPassword={savedPassword}
        setSavePassword={setSavePassword}
        options={options}
        setOptions={setOptions}
        showModal={showModal}
        setShowModal={setShowModal}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
    </div>
  );
};

export default App;
