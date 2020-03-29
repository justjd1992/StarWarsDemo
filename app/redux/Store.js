import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/index';
import rootSaga from '../saga/index';
import AsyncStorage from '@react-native-community/async-storage';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { StorageKeys } from '../constants';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleWare = [sagaMiddleware];

const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

const middleWareNav = [navMiddleware];

const persistConfig = {
  key: StorageKeys.redux,
  storage: AsyncStorage,
  blacklist: ['nav', 'navigation', 'events']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add middleware to redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(...middleWare, ...middleWareNav);
 
const enhancers = __DEV__
  ? composeEnhancers(middlewares, console.tron.createEnhancer())
  : compose(middlewares);

const store = createStore(
  persistedReducer,
  enhancers
);
 
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

// Enable persistence
export default { store, persistor };
