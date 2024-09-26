import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='sign-in' options={{headerShown: false}}/>
        <Stack.Screen name='sign-up' options={{headerShown: false}}/>        
        <Stack.Screen name='otp' options={{headerShown: false}}/>
        <Stack.Screen name='(docVerification)' options={{title: "Document Verification"}} />

      </Stack>

      <StatusBar />
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})