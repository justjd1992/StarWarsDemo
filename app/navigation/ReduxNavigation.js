import React from 'react';
import { BackHandler, Platform } from 'react-native';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigation from '../navigation/AppNavigation';

createReactNavigationReduxMiddleware(state => state.nav);

const ReduxAppNavigator = createReduxContainer(AppNavigation);

// create nav component
class ReduxNavigation extends React.Component {

  // gets the current screen from navigation state
  getCurrentRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  };

  componentDidMount() {
    if (Platform.OS === 'ios') return;
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;
      const currentRoute = this.getCurrentRouteName(nav);
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if ( currentRoute === 'HomeScreen' || currentRoute === 'LoginScreen') {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' });
      return true;
    });
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return;
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <ReduxAppNavigator
        dispatch={this.props.dispatch}
        state={this.props.nav}
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(ReduxNavigation);
