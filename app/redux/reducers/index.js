import { combineReducers } from 'redux';
import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppNavigation from '../../navigation/AppNavigation';

const navReducer = createNavigationReducer(AppNavigation);

// Imports: Reducers
import peopleReducer from './People';

// Redux: App Reducer
const appReducer = combineReducers({
  nav: navReducer,
  people: peopleReducer
});


// Redux: Root Reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Exports
export default rootReducer;
