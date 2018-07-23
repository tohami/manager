//@flow
import {EMAIL_CHANGED} from './types'
//export emailChanged action creatore
//when acton creator called it return an action
export const emailChangedAC = (text) => {
  //return emailChanged action whenever action creator called
  // we user { } not () because action is plain javascript opject {}
  return {
    type : EMAIL_CHANGED,
    payload : text
  };
};
