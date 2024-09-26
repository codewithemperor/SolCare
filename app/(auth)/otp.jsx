import { View, Image, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'


const otp = () => {
    const [Otp, setOtp] = useState("");

  return (
    <SafeAreaView className='h-full flex-1 items-center justify-center'>
        <ScrollView contentContainerStyle={{height: '100%', flex: 1, justifyContent: "center", alignContent: "center"}}>
            <View className='items-center'>

                <View className='h-[30vh] w-[30vh] '>
                    <Image 
                        source={images.otp}
                        className='h-full w-full'
                        resizeMethod='contain'
                    />
                </View>

                <View className='items-center px-4'>
                  <Text className='text-4xl font-pbold text-center mb-1 text-primary'>Account Created Successfully!</Text>
                  <Text className='px-4 font-pregular text-lg text-center'>Check your email and enter the OTP sent to you.</Text>
                </View>

                <View className='mt-7 w-full'>

                    <FormField 
                    title='Enter the OTP code'
                    value={Otp}
                    handleChangeText={setOtp}
                    otherStyles="mt-7 px-5"
                    placeholder='Enter your Email Address'
                    />

                    <View className='px-5 w-full mt-5'>
                        <CustomButton 
                        title='Verify Code'
                        handlePress={() => router.push('./verify-info')}
                        containerStyles='bg-primary '
                        />
                    </View>

                </View>

            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default otp