import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'


const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })

  const [isSubmitting, setSubmitting] = useState(false);

  const submit = () => {
    createUser();
  }


  return (
    <ScrollView >

      <View className='relative h-[22vh] mb-10'>
        <Image 
          source={images.authHeader}
          className='w-[100%] h-[19vh]'
          resizeMode='cover'
        />
        <View className=' items-center'>
          <Image source={images.whiteBorderLogo} className='h-[23vw] w-[23vw] absolute bottom-[-50px]'/>
        </View>
      </View>

      <View className=' items-center'>
        <Text className='text-4xl text-primary font-pextrabold'>WELCOME BACK!</Text>
        <Text className='text-md text-center'>Enter your credentials to login into your account</Text>
      </View>

      <View className=' items-center'>

        <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles="mt-7 px-5"
          keyboardType="email-address"
          placeholder='Enter your Email Address'
        />

        <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles="mt-7 px-5"
          placeholder='Enter your Password'
        />

        <View className="px-5 w-full">
          <CustomButton 
            title='Login'
            handlePress={submit}
            containerStyles='bg-primary  w-full mt-7'
            isLoading={isSubmitting}
          />

          <Text className='mt-3 text-center text-base font-pmedium'>Don't have an account yet? 
            <Link href='./sign-up' className='text-primary text-lg font-psemibold'> Sign Up</Link>
          </Text>

          <Text className='my-4 mt-6 text-center text-base font-pmedium'>------------- OR CONTINUE WITH: -------------</Text>

          {/* <CustomButton 
          title='Login with T-Link'
          containerStyles=' w-full border-primary border-2' 
          textStyles='text-primary'
          /> */}

          <View className='flex flex-row items-center justify-center gap-x-6 mb-10'>
            <Image 
              source={images.google} 
              className='w-[30px] h-[30px]'
              resizeMethod='cover'
            />
            <Image 
              source={images.x} 
              className='w-[30px] h-[30px]'
              resizeMethod='cover'
            />
            <Image 
              source={images.telegram} 
              className='w-[30px] h-[34px]'
              resizeMethod='cover'
            />
          </View>
        </View>

      </View>

      
    </ScrollView>
    
  )
}

export default SignIn

const styles = StyleSheet.create({})