import { View, TouchableWithoutFeedback } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import TabBarItem from './tabBarItem';
import { Container } from './styles';

export function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const onPressNavigation = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPressNavigation = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const renderTabBar = (route, index) => {
    const { options } = descriptors[route.key];
    const label = route.name || options.title;
    const icon = options.tabBarLabel;
    const isFocused = state.index === index;

    return (
      <TouchableWithoutFeedback
        onPress={() => onPressNavigation(route, isFocused)}
        onLongPress={() => onLongPressNavigation(route)}
        key={label}
        style={{ height: 90, flex: 1 }}>
        <Container>
          <TabBarItem label={label} icon={icon} isFocused={isFocused} />
        </Container>
      </TouchableWithoutFeedback>
    );
  };

  return <View style={{ flexDirection: 'row' }}>{state.routes.map(renderTabBar)}</View>;
}
