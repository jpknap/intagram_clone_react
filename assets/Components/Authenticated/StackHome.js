import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Author from './Profile';
import Post from './Post';
import Comments from './Comments';

const StackHome = createStackNavigator({
  Home: {
    screen: Home,
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

export { StackHome };
