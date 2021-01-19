import React from 'react';
import Input from './components/Input';

function App() {
  const [city, setCity] = React.useState('');

  return (
    <div>
      <h1>Weather Application</h1>
      <Input id="search" value={city} setValue={setCity} />
    </div>
  );
}

export default App;
