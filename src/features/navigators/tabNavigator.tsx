import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabBar } from '../components';
import { HomeStack, LiveTVStack, TVShowsStack, CategoriesStack } from './stackNavigators';

const Tab = createBottomTabNavigator();

function tabBarItem(name: string, component: () => JSX.Element, icon: string) {
  return {
    name,
    component,
    icon,
  };
}

const tabBarSources = [
  tabBarItem('Home', HomeStack, 'home'),
  tabBarItem('Live TV', LiveTVStack, 'tv'),
  tabBarItem('TV Shows', TVShowsStack, 'dvr'),
  tabBarItem('Categories', CategoriesStack, 'menu'),
];

function tabScreens() {
  return tabBarSources.map(({ name, component, icon }) => (
    <Tab.Screen key={name} name={name} component={component} options={{ tabBarLabel: icon }} />
  ));
}

export function TabBarNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={(props) => <BottomTabBar {...props} />}>
        {tabScreens()}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
