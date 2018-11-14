import { createMaterialTopTabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Follow from './Follow';

const TabFollow = createMaterialTopTabNavigator({
  Follow: {
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },
},
{
  tabBarOptions: {

    tabStyle: {
      padding: Constants.statusBarHeight,
    },
  },
});

export { TabFollow };
