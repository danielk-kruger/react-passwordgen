import React from 'react';
import './modal.css';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  password: string;
  savedPassword: string[];
  setSavePassword: (savedPassword: any | string[]) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
};

const Modal: React.FC<Props> = ({
  password,
  savedPassword,
  setSavePassword,
  showModal,
  setShowModal,
  showSettings,
  setShowSettings,
}) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className='modal-close' onClick={() => setShowModal(false)}>
        <AiOutlineClose />
      </div>
      <div className='modal-head'>
        <h6>Fill in the fields below</h6>
      </div>
      <form>
        <div className='title-field'>
          <label htmlFor='title'>
            Group Title <span>(Compulsory)</span>{' '}
          </label>
          <input type='text' id='title' placeholder='i.e: My Google Account' required />
        </div>
        <div className='url-field'>
          <label htmlFor='url'>
            Website URL <span>(Compulsory)</span>{' '}
          </label>
          <input type='text' placeholder='i.e: www.google.com' id='url' />
        </div>
        <div className='email-field'>
          <label htmlFor='email'>
            Your Email Account <span>(Optional)</span>{' '}
          </label>
          <input type='email' placeholder='i.e: johnDoe@gmail.com' id='email' />
        </div>
        <div className='password-field'>
          <label htmlFor='pass'>
            Password <span>(Automatic)</span>{' '}
          </label>
          <input type='password' id='pass' readOnly />
        </div>
        <input type='submit' id='saveBtn' value='Save' />
      </form>
    </div>
  );
};

export default Modal;
