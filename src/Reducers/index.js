import { combineReducers } from 'redux';
import whatsAppReducers from '../Reducers/reducers';


const reducers = Object.assign({}, { whatsAppState: whatsAppReducers });
const rootReducers = combineReducers(reducers);

export default rootReducers;
