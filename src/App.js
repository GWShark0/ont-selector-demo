import React, { useState } from 'react';

import FontDemo from './FontDemo';
import FontSelect from './FontSelect';

import './App.scss';

const fonts = [
  'Lobster',
  'Montserrat',
  'Open Sans',
  'Roboto',
];


function App() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <div className="app">
      <FontSelect
        fonts={fonts}
        selectedFont={selectedFont}
        onChange={event => setSelectedFont(event.target.value)}
      />
      <FontDemo fontFamily={selectedFont} />
    </div>
  );
}

export default App;
