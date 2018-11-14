import { createStackNavigator } from 'react-navigation';
import Author from './Profile';
import Search from './Search';
import Post from './Post';
import Comments from './Comments';

const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Post: {
    screen: Post,
  },
  Author: {
    screen: Author,
  },
  Comments: {
    screen: Comments,
  },
});

export { StackSearch };
