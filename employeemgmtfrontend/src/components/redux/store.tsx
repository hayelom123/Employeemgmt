import { createStore ,combineReducers,applyMiddleware} from 'redux';
import { userReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './mysaga';

const rootReducer = combineReducers({users: userReducer });
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(mySaga);