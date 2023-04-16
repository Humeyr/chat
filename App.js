import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from  './screens/Chats';
import Settings from  './screens/Settings';
import {Ionicons} from  '@expo/vector-icons'
import {colors} from  './config/constants'
import SignUp from "./screens/SignUp"
import Chat from  './screens/Chat'

const ChatsStack = createStackNavigator()

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats}/>
      <ChatsStack.Screen name="Chat" component={Chat}/>
    </ChatsStack.Navigator>
  );
};

const SettingsStack = createStackNavigator()

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings}/>
    </SettingsStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()

const TabsScreenn = () => (
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Chats') {
        iconName = focused
          ? 'chatbubbles'
          : 'chatbubbles-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: colors.primary
    
  }}

  >
    <Tabs.Screen name="SignUp" component={SignUp} />
    <Tabs.Screen name="Settings" component={SettingsScreen}/>
  </Tabs.Navigator>
)

const MainStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" >
        <MainStack.Screen name="Tabs" mode="modal" component={TabsScreenn}/>
        <MainStack.Screen name="SignUp" mode="modal" component={SignUp}/>
      </MainStack.Navigator>

    </NavigationContainer>
  )
}

export default App;