import { createAppContainer } from 'react-navigation';
  
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen  from '../modules/home/HomeScreen';  

import { Navigations } from '../constants';
  
const AppStack = createStackNavigator(
  {
    [Navigations.HomeScreen]: { screen: HomeScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Navigations.HomeScreen,
    navigationOptions: {
      backgroundColor: 'white'
    }
  }
);
  
export default createAppContainer(AppStack);
  
