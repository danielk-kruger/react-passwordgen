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

export interface PasswordSchemas extends Array<PasswordSchema> {}

const App = () => {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavePassword] = useState([] as PasswordSchema[]);
  const [options, setOptions] = useState({} as userOptions);
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('passwords') === null) {
      localStorage.setItem('passwords', JSON.stringify([]));
    }
  }, []);

  return (
    <div className='container'>
      <Modal
        password={password}
        setPassword={setPassword}
        savedPassword={savedPassword}
        setSavePassword={setSavePassword}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Form
        password={password}
        setPassword={setPassword}
        savedPassword={savedPassword}
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
