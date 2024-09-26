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
      <View className='w-full justify-between  items-center h-[85vh] px-4 '>
        

        <View className='items-center'>
          <Image 
              source={images.logo}
              className='h-[90px] w-[70px] mb-5'
              resizeMethod='contain'
            />
          <Text className='text-3xl font-pbold'>Welcome to <Text className='text-primary'>Sol</Text>care</Text>
          <Text className='px-7 font-pregular text-lg text-center'>Ushering the era of Decentralized Health Care System</Text>
        </View>

        <Image 
          source={images.doctorGif}
          className='h-[53%] w-[80vw]'
          resizeMethod='contain'
        />

        <CustomButton 
          title="Get Started"
          handlePress={() => router.push('./index2')}
          containerStyles='w-full m-7 bg-primary'
        />

        <StatusBar style='dark'/>

      </View>
    </ScrollView>
  </SafeAreaView>

    
    
  );
}
