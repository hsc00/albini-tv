import React from 'react';
import StreamGrid from '@/components/StreamGrid';
import { streams } from '../../assets/links/streams3';

const App = () => (
  <StreamGrid
    streams={streams}
    brandLogo="https://piratetv.pro/wp-content/themes/Pirate%20TV%20PRO%20theme/assets/images/piratetv-logo.png"
    backgroundColor="#181818"
  />
);

export default App;
