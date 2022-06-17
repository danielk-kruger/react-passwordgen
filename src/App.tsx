import React, { useState } from 'react';
import './App.css';
import Form from './components/form/Form';

export type userOptions = {
  lower: boolean;
  upper: boolean;
  numbers: boolean;
  symbols: boolean;
};

function App() {
  const [password, setPassword] = useState('');
  const [savedPassword, setSavePassword] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [options, setOptions] = useState({} as userOptions);
  return (
    <div className="container">
      <Form
        password={password}
        setPassword={setPassword}
        savedPassword={savedPassword}
        setSavePassword={setSavePassword}
        generated={generated}
        setGenerated={setGenerated}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
}

export default App;
