import React, { useState, useRef, useEffect } from 'react';
import './account.css';
import { PasswordSchema } from '../../App';
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLink,
  AiFillMail,
  AiFillLock,
} from 'react-icons/ai';

type Props = {
  url: string;
  password: string;
  email: string | undefined;
  account: PasswordSchema;
};

interface AccountSchema extends PasswordSchema {
  title: string;
}

const AccountComponent: React.FC<Props> = ({ url, password, email }) => {
  const [passVisible, setPassVisible] = useState(false);
  const [title, setTitle] = useState('');
  const passwordRef = useRef<any>();

  const setPassRef = (value: string) => {
    passwordRef.current.type = value;
  };

  const isPassVisible = (): boolean => {
    return (
      passwordRef.current !== undefined && passwordRef.current.type === 'text'
    );
  };

  const togglePasswordVisiblity = () => {
    let inputType = passwordRef.current.type;

    if (inputType === 'password') setPassRef('text');
    else setPassRef('password');

    console.log(inputType);
    console.log(passwordRef.current);
    console.log(isPassVisible());
  };

  return (
    <div className='account'>
      <div className='user-title'>
        <span>Title: </span>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Enter a title'
        />
      </div>
      <div className='user-url'>
        <AiOutlineLink />
        <span>URL:</span>
        <input type='text' value={url} readOnly />
      </div>
      <div className='user-email'>
        <AiFillMail />
        <span> Email: </span>
        <input type='text' value={email === undefined ? '' : email} readOnly />
      </div>
      <div className='user-password'>
        <AiFillLock />
        <span>Password: </span>
        <input
          type='password'
          ref={passwordRef}
          value={password}
          id='accountPass'
          readOnly
        />
        <div className='toggle-pass_group'>
          <label htmlFor='togglePassVisible'>
            {/* <AiFillEye /> */}
            {isPassVisible() ? <AiFillEye /> : <AiFillEyeInvisible />}
          </label>
          <input
            type='checkbox'
            id='togglePassVisible'
            onClick={togglePasswordVisiblity}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
