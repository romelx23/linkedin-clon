import React from 'react';
import { CardMessage } from '../components/CardMessage/CardMessage';
import { Navbar } from '../components/Navbar/Navbar';

export const MessageScreen = () => {
  return <div>
      <Navbar/>
      <div className="bg-blue-700 min-h-screen pt-3">
        <div className="w-full h-message flex justify-center">
          <CardMessage/>
        </div>
      </div>
  </div>;
};
