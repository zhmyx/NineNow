import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export function useDefaultNavigationHeader() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({});
  }, [navigation]);
}
