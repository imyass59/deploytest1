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
import store from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarCom />
        <Routes>
          <Route exact path='/' element={<HomeCom />}></Route>
          <Route path='/products' element={<ProductsCom />}></Route>
          <Route path='/products/product/:id' element={<ProductCom />}></Route>
          {/*<Route path='/products/product' element={<ProductCom />}></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const ApplyStore = () =>
{
  return <Provider store={store}><App/> </Provider>
}

export default App;
