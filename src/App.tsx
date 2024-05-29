import React from 'react';
import Header from './sections/Header';
import Catalog from './sections/Catalog';
import Shipping from './sections/Shipping';


const App: React.FC = () => {

  return (
    <>
      <Header />
      <Catalog resources={[]} />
      <Shipping />
    </>
  );
};

export default App; 