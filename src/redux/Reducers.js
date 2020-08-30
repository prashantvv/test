import {combineReducers} from 'redux';
import {Platform} from 'react-native';


let initialState={

}
  const red_LoginData=(state=initialState, action)=> {

    if (action.type === 'login') {
    return Object.assign({}, state, action.payload )

  }
  return state;
  };


  const red_getData=(state = {data:[]}, action)=> {
      
    if (action.type === 'DATA_LOADED') {
        return JSON.parse(JSON.stringify(action.payload))
      }
    return state;
  };

  
  
  const rootReducer= combineReducers({
    red_LoginData,
    red_getData

  });  

  export default rootReducer;