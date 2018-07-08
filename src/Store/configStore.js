import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../Reducers/index';
import sagas from '../Saga/whatsAppSaga';


const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware)),
);

sagas.map(saga => (sagaMiddleware.run(saga)));


export default configureStore;
