import {createStore, combineReducers, applyMiddleware} from 'redux';
import {testReducer} from './reducers/test/testReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import {surveillanceReducer} from './reducers/surveillance/surveillanceReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  test: testReducer,
  surveillance: surveillanceReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
