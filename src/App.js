import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//Component
import Store from './component/Store';
import Details from './component/Details';
import Navbar from './component/Navbar';
import ShopCart from './component/shared/ShopCart';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/userbasket' element={<ShopCart />} />
            <Route path='/products' element={<Store />} />
            <Route path='/products/:id' element={<Details />} />
            <Route path='/*' element={<Navigate to={`/products`} />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
