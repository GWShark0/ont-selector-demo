import React, { useState } from 'react';
import FontDemo from './FontDemo';
import FontSelect from './FontSelect';
import FontLoader from './FontLoader';
import fonts from './fonts';

import './App.scss';

function App() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <div className="app">
      <FontLoader selectedFont={selectedFont} />
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
