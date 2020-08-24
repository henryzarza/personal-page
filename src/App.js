import React, { useCallback, useState } from 'react';
import i18next from 'i18next';

import RadioBtnLng from './components/RadioBtnLng';
import Main from './sections/Main';
import WhoIAm from './sections/WhoIAm';
import WhatICanDo from './sections/WhatICanDo';
import Projects from './sections/Projects';
import { LANGUAGES } from './constants';

function App() {
  const [currentLng, setCurrentLng] = useState(LANGUAGES.EN);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    i18next.changeLanguage(value);
    setCurrentLng(value);
  }, []);

  return (
    <>
      <RadioBtnLng currentLng={currentLng} onChange={handleChange} />
      <main className='main-content'>
        <Main />
        <WhoIAm />
        <WhatICanDo />
        <Projects />
      </main>
    </>
  );
}

export default App;
