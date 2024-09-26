import { StatusBar } from 'expo-status-bar';
import {ScrollView, View, Image, Text } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="h-full flex-1 items-center justify-center" style={{backgroundColor: '#fff', position: 'relative'}}>
    <View className='absolute top-0 left-0' >
      <Image 
        source={images.bgAbsolute}
        resizeMode="contain"
        />
    </View>
    <ScrollView contentContainerStyle={{height: '100%', flex: 1, justifyContent: "center", alignContent: "center"}}>
      <View className='w-full justify-around between items-center h-[80vh] px-7 '>

        <View className='items-center'>
          <Text className='text-3xl font-pbold text-center mb-2'>Access Quality Healthcare from a single click.</Text>
          <Text className='px-7 font-pregular text-lg text-center'>Emporwing medical professionals with instant patient location, <Text className='text-primary font-psemibold'>Sol</Text>Care is a vital tool for timely emergency</Text>
        </View>

        <Image 
          source={images.tap}
          className='max-h-[59%]'
          resizeMethod='cover'
        />

        <CustomButton 
          title="Continue"
          handlePress={() => router.push('./index3')}
          containerStyles='w-full  bg-primary'
        />

        <StatusBar style='dark'/>

      </View>
    </ScrollView>
  </SafeAreaView>

    
    
  );
}
