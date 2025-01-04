import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import "../../global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (

    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className=' text-red-600'>Home Screen</Text>
    </SafeAreaView>
  );
}


