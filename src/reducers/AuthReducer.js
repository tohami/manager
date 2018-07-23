//@flow
import {EMAIL_CHANGED} from '../actions/types'
const INIT_STATE = {
  email : '' ,
  Password : ''
};
//state must not return undefined
export default (state = INIT_STATE , action) = {
  switch (action.type) {
    case EMAIL_CHANGED:
    

      break;
    default:
      return state ;
  }
}
