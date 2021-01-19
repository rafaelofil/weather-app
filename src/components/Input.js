import React from 'react';

function Input({ id, value, setValue, searchCity }) {
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
      />
    </div>
  );
}

export default Input;
