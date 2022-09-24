import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import Reducers from './CombineReduces'
import CartReducer from './reducers/CartReducer';


const store = createStore(
    Reducers,
    composeWithDevTools()
)

export default store;
