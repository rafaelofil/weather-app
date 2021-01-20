import React from 'react';
import { BiFontSize } from 'react-icons/bi';
import { MdPermPhoneMsg } from 'react-icons/md';
import './Input.css';

function Input({ id, value, setValue, searchCity, ...props }) {
  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') searchCity();
        }}
        {...props}
        className="input"
      />
    </div>
  );
}

export default Input;
