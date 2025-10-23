
import React, { Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScene from './components/MainScene';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#111827] via-[#1a1a2e] to-[#2a2a40]">
      <Suspense fallback={<LoadingScreen />}>
        <MainScene />
      </Suspense>
    </div>
  );
};

export default App;
