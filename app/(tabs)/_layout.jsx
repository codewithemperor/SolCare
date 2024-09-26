import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import {icons} from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image 
        source={icon}
        resizeMethod='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarActiveBackgroundColor: '#5b6ce6',
          tabBarInactiveTintColor: '#5b6ce6',
          tabBarStyle: {
            backgroundColor: "#f2f2f2",
            borderTopWidth: 1,
            borderTopColor: '#f2f2f2',
            height: 65,
          }
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: 'home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='hospital'
          options={{
            title: 'hospital',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.hospital}
                color={color}
                name="Hospital"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='pharmacy'
          options={{
            title: 'pharmacy',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.pharmacy}
                color={color}
                name="Pharmacy"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='profile'
          options={{
            title: 'profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout