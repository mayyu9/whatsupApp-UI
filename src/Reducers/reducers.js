import {
  LOAD_CHAT_INFO_SUCCESS,
  LOAD_STATUS_INFO_SUCCESS,
  LOAD_CALLS_INFO_SUCCESS,
} from '../Constants/constants';

import intialState from './initialState';

const whatsAppReducers = (state = intialState, action) => {

  switch(action.type){
    case LOAD_CHAT_INFO_SUCCESS:
      return {
        ...state,
          chats: action.chatData,
        }
    case LOAD_STATUS_INFO_SUCCESS:
      return {
        ...state,
          status: action.statusData,
        }
    case LOAD_CALLS_INFO_SUCCESS:
      return {
        ...state,
          calls: action.callsData,
        }
    default:
      return state;
  }

};

export default whatsAppReducers;
