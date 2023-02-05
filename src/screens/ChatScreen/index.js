import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatListScreen} from '../ChatListScreen';
import {ContactListScreen} from '../ContactListScreen';
import {SettingsScreen} from '../SettingsScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Navigator>
      <Screen name="ChatList" component={ChatListScreen} />
      <Screen name="ContactList" component={ContactListScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
