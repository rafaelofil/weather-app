import React from 'react';

function Input({ id, value, setValue }) {
  return (
    <div>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

export default Input;
