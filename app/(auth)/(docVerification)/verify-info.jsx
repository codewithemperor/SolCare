import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import { images } from '../../../constants'
import CustomButton from '../../../components/CustomButton'

const verifyInfo = () => {
  return (
    <ScrollView contentContainerStyle={{height: '100%', flex: 1, justifyContent: "center", alignContent: "center"}}>
        <View className='items-center min-h-[60vh] justify-around'>

            <View className='h-[30vh] w-[30vh]'>
                <Image 
                    source={images.documentVerify}
                    className='h-full w-full'
                    resizeMethod='contain'
                />
            </View>

            <View>
                <Text className='text-3xl font-pbold text-center text-primary'>Document Verification </Text>
                <Text className='text-lg font-pregular text-center px-5'>Please upload your verified documents for better access to our services.</Text>
            </View>

            <View className='px-5 w-full mt-5'>
                <CustomButton 
                title='Upload your documents'
                handlePress={() => router.push('./upload-doc')}
                containerStyles='bg-primary '
                />
            </View>

        </View>
    </ScrollView>
  )
}

export default verifyInfo