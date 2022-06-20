import React, { useState } from 'react';
import './modal.css';
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { PasswordSchema } from '../../App';

type Props = {
  password: string;
  setPassword: (password: string) => void;
  savedPassword: PasswordSchema[];
  setSavePassword: (savedPassword: PasswordSchema[]) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const Modal: React.FC<Props> = ({
  password,
  setPassword,
  savedPassword,
  setSavePassword,
  showModal,
  setShowModal,
}) => {
  const [passVisible, setPassVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const handleSaveSettings = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSavePassword([
      ...savedPassword,
      {
        url: url,
        email: email,
        password: password,
      },
    ]);

    // reset the modal
    setShowModal(false);
    setEmail('');
    setUrl('');
    setPassword('');
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className='modal-close' onClick={() => setShowModal(false)}>
        <AiOutlineClose />
      </div>
      <div className='modal-head'>
        <h6>Fill in the fields below</h6>
      </div>
      <form>
        <div className='url-field'>
          <label htmlFor='url'>
            Website URL <span>(Compulsory)</span>{' '}
          </label>
          <input
            type='text'
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder='i.e: www.google.com'
            id='url'
          />
        </div>
        <div className='email-field'>
          <label htmlFor='email'>
            Your Email Account <span>(Optional)</span>{' '}
          </label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='i.e: johnDoe@gmail.com'
            id='email'
          />
        </div>
        <div className='password-field'>
          <label htmlFor='pass'>
            Password <span>(Automatic)</span>{' '}
          </label>
          <input
            type={passVisible ? 'text' : 'password'}
            value={password}
            id='pass'
            readOnly
          />
          <div className='toggle-pass'>
            <label htmlFor='passVisiblity'>
              {passVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </label>
            <input
              type='checkbox'
              onClick={() => setPassVisible(!passVisible)}
              id='passVisiblity'
            />
          </div>
        </div>
        <input
          type='submit'
          id='saveBtn'
          onClick={handleSaveSettings}
          value='Save'
        />
      </form>
    </div>
  );
};

export default Modal;
