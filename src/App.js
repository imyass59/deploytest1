import './App.css';
import NavBarCom from './Components/NavbarCom/NavBarCom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeCom from './Components/HomeCom/HomeCom';
import ProductsCom from './Components/ProductCom/ProductsCom';
import CartCom from './Components/CartCom/CartCom';
import ProductCom from './Components/ProductCom/ProductCom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Profile from './Components/UserCom/Profile';
import LoginUser from './Components/UserCom/LoginUser';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  const client_id = "ARvwdzawjVy5f0p3lXbmvnzjvlKo8fsTaET4Mzddb9Nh5w3EvryXpkQAvP_c3VX2rGN5jISebFLoVNr2";
  return (
    <PayPalScriptProvider options={{"client-id" : client_id}}>
    <div className="App">
      <BrowserRouter>
        <div className="z-50">
          <NavBarCom />
        </div>
        <CartCom />
        <Routes>
          <Route exact path='/' element={<HomeCom />}></Route>
          <Route path='/products' element={<ProductsCom />}></Route>
          <Route path='/products/:id' element={<ProductCom />}></Route>
          <Route path='/user/profile' element={<Profile />}></Route>
          <Route path='/login' element={<LoginUser />}></Route>
          {/*<Route path='/products/product' element={<ProductCom />}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
