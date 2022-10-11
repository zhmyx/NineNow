import AsyncStorage from '@react-native-async-storage/async-storage';

// refer: https://react-native-async-storage.github.io/async-storage/docs/usage

export async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(`Failed to store ${key} and ${value}`);
  }
}

export async function getDate(key: string): Promise<string | null> {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (e) {
    console.error(`Failed to get data with key: ${key}`);
  }

  return null;
}
