import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage, LiveTVPage, TVShowsPage, CategoriesPage } from '../pages';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function LiveTVStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LiveTV" component={LiveTVPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function TVShowsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TVShows" component={TVShowsPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
