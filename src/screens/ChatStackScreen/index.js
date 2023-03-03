import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatSingleScreen} from '../ChatSingleScreen';
import {ChatListScreen} from '../ChatListScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export function ChatStackScreen() {
  return (
    <Navigator>
      <Screen name="ChatList" component={ChatListScreen} />
      <Screen name="ChatSingle" component={ChatSingleScreen} />
    </Navigator>
  );
}
