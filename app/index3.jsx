import { StatusBar } from 'expo-status-bar';
import {ScrollView, TouchableOpacity, View, Image, Text } from 'react-native';
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
    <View className='w-full justify-between  items-center h-[80vh] px-4 '>

        <View className='items-center'>
        <Image 
              source={images.logo}
              className='h-[90px] w-[70px] mb-5'
              resizeMethod='contain'
            />
          <Text className='text-3xl font-pbold text-center'>Earn more as a Medical Practitioner</Text>
          <Text className='px-7 font-pregular text-lg text-center'><Text className='text-primary'>Sol</Text>care connects medical Practitioners with patient allowing them to earn outside traditional working hour.</Text>
        </View>

        <Image 
          source={images.doctorPatient}
          className='h-[50%] w-[80vw]'
          resizeMethod='contain'
        />

        <View className="w-full items-center">
          <CustomButton 
            title="Register Now"
            handlePress={() => router.push('/sign-up')}
            containerStyles="w-full mb-3 bg-primary"
          />
          <View className="flex-row items-center">
            <Text className="text-[16px] pr-1">Already have an Account?</Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text className="text-primary text-[16px]">Sign-In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <StatusBar style='dark'/>

      </View>
    </ScrollView>
  </SafeAreaView>

    
    
  );
}
