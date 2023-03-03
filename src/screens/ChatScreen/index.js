import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatStackScreen} from '../ChatStackScreen';
import {ContactListScreen} from '../ContactListScreen';
import {SettingsScreen} from '../SettingsScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Navigator>
      <Screen
        options={{headerShown: false, tabBarLabel: 'Chat'}}
        name="ChatStack"
        component={ChatStackScreen}
      />
      <Screen
        options={{tabBarLabel: 'Contacts'}}
        name="ContactList"
        component={ContactListScreen}
      />
      <Screen
        options={{tabBarLabel: 'Settings'}}
        name="Settings"
        component={SettingsScreen}
      />
    </Navigator>
  );
}
