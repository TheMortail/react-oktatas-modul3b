import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import ZooComponent from './components/ZooComponent';

function App() {
  return (
    <>
      <ZooComponent />
      <hr style={{ margin: '50px 0' }} />
      <ProductsContainer />
    </>
  );
}

export default App;
