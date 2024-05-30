import React from 'react';
import { WhatsappIcon } from './assets/icons/Whatsapp';
import Header from './sections/Header';
import Catalog from './sections/Catalog';
import Shipping from './sections/Shipping';

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Catalog resources={[]} />
      <Shipping />
      {/* Whatsapp icon */}
      <a href="https://wa.me/+543735463058" 
      target="_blank" 
      rel="noopener noreferrer" 
      className='whatsapp-icon'>
      <WhatsappIcon/>
      </a>
    </>
  );
};

export default App; 