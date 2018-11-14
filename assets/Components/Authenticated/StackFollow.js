import { createStackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Author from './Profile';
import Post from './Post';
import Comments from './Comments';

const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null,
    },
  },
  Author: {
    screen: Author,
  },
  Post: {
    screen: Post,
  },
  Comments: {
    screen: Comments,
  },
});

export { StackFollow };
