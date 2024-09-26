import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { router } from 'expo-router'

import { images } from '../../../constants'
import CustomButton from '../../../components/CustomButton'
import PickerSelect from '../../../components/PickerSelect'

const verifyInfo = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const pickerItems = [
      { label: "NIN", value: "nin" },
      { label: "International Passport", value: "intPassport" },
      { label: "Driving License", value: "drLicense" },
    ];

  return (
    <ScrollView contentContainerStyle={{height: '100%', flex: 1, justifyContent: "center", alignContent: "center"}}>
        <View className='items-center min-h-[80vh] justify-center'>

            <View className='mb-8'>
                <Text className='text-3xl font-pbold text-center text-primary'>Document Verification </Text>
                <Text className='text-lg font-pregular text-center px-5'>Please upload your verified documents for better access to our services.</Text>
            </View>            

            <View className='w-full'>
                <PickerSelect
                    title="Please select the document you want to upload"
                    selectedValue={selectedOption}
                    handleValueChange={setSelectedOption}
                    items={pickerItems}
                    mode="dialog" 
                    prompt="Please select the document you want to upload" 
                    otherStyles="px-5" // Additional styles
                  />


            </View>

            <View className='px-5 w-full mt-5'>
                <CustomButton 
                title='Submit'
                handlePress={() => router.push('./upload-doc')}
                containerStyles='bg-primary '
                />
            </View>

        </View>
    </ScrollView>
  )
}

export default verifyInfo