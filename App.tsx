import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import FirePrepScreen from './screens/FirePrepScreen';
import AlertsScreen from './screens/AlertsScreen';
import SettingsScreen from './screens/SettingsScreen';

export type RootTabParamList = {
  'Fire Prep': undefined;
  Home: undefined;
  Alerts: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Fire Prep':
                iconName = focused ? 'clipboard' : 'clipboard-outline';
                break;
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Alerts':
                iconName = focused ? 'warning' : 'warning-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                iconName = 'ellipse';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',

          tabBarStyle: {
            height: 80, 
            paddingBottom: 13, 
            paddingTop: 13,
          },
          tabBarLabelStyle: {
            fontSize: 14, 
          },
        })}
      >
        <Tab.Screen name="Fire Prep" component={FirePrepScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Alerts" component={AlertsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>


    </NavigationContainer>
  );
}
