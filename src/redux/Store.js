import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './Reducers';
import thunk from "redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const middleware=[thunk]
const store = createStore(
    rootReducer,
    // storeEnhancers(applyMiddleware(...middleware)) 
     // applyMiddleware(...middleware));
     );
   
export default store;






