import { createBottomTabNavigator } from 'react-navigation';
import Add from './Add';
import Profile from './Profile';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';

const RutasAuthenticated = createBottomTabNavigator({
  Hola: {
    screen: StackHome,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Search: {
    screen: StackSearch,
    navigationOptions: { tabBarLabel: 'Search' },
  },
  Add: {
    screen: Add,
    navigationOptions: { tabBarLabel: 'Add' },
  },
  Follow: {
    screen: StackFollow,
    navigationOptions: { tabBarLabel: 'Follow' },
  },
  Profile: {
    screen: Profile,
    navigationOptions: { tabBarLabel: 'Profile' },
  },
},
{
  animationEnabled: true,
  // tabBarPosition: 'bottom',
});

export { RutasAuthenticated };
