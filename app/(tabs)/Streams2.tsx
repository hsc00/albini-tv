import React from 'react';
import StreamGrid from '@/components/StreamGrid';
import { streams } from '../../assets/links/streams2';

const App = () => (
  <StreamGrid
    streams={streams}
    brandLogo="https://www.pirilampo.tv/uploads/system_logo/logo.png"
    backgroundColor="#181818"
  />
);

export default App;
