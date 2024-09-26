
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{title: 'Document Verification'}}>
        <Stack.Screen name='verify-info' options={{headerShown: false}}/>
        <Stack.Screen name='upload-doc' options={{headerShown: false}}/>        

      </Stack>

      <StatusBar />
    </>
  )
}

export default AuthLayout

