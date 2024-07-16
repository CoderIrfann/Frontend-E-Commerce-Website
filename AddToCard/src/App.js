import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Shope from './Components/Shope';
import ShowingCard from './Components/ShowingCard';

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show  , setShow] = useState(false);

  function handelClick(item) {
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <div className='bg-slate-300'>
      <NavBar size={cart.length}  setShow={setShow}/>
      {
        show? <Shope handelClick={handelClick}/> : <ShowingCard cart={cart} setCart={setCart}></ShowingCard>
      }
      <Shope handelClick={handelClick} /> 
      {warning && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-sm font-semibold text-black">Warning</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              Item already in the cart
            </h1>
            <p className="mt-4 text-gray-500">
              The item you are trying to add is already in the cart.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
