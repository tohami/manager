import { combineReducers } from 'redux';
import AuthReducer from 'AuthReducer';

//the key is the state that reducer return
export default combineReducers({
  //we say Auth state is preduced by authreducer
  Auth : AuthReducer 
});
