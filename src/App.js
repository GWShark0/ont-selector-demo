import React, { useState } from 'react';
import FontDemo from './FontDemo';
import FontSelect from './FontSelect';
import FontLoader from './FontLoader';
import fonts from './fonts';

import './App.scss';

function App() {
  const [selectedFontFamily, setSlectedFontFamily] = useState(fonts[4].family);

  return (
    <div className="app">
      <FontLoader selectedFontFamily={selectedFontFamily} />
      <FontSelect
        families={fonts.map(font => font.family)}
        selectedFontFamily={selectedFontFamily}
        onChange={event => setSlectedFontFamily(event.target.value)}
      />
      <FontDemo selectedFontFamily={selectedFontFamily} />
    </div>
  );
}

export default App;
