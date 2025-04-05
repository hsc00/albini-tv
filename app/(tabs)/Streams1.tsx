import React from 'react';
import StreamGrid from '@/components/StreamGrid';
import { streams } from '../../assets/links/streams1';

const App = () => (
  <StreamGrid
    streams={streams}
    brandLogo="https://daddylivehd1.click/wp-content/uploads/2024/10/daddylive.webp"
    backgroundColor="#9768D1"
  />
);

export default App;
