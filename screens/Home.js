import { View, Text ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable'

const Home = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        });
    },[]);


  return (
    <SafeAreaView className="bg-white-100 flex-1 relative">
        {/* First Section with Logo and Travel text */}
     <View className="flex-row px-6 mt-14 items-center space-x-2" >
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
     </View>

     {/* Second Section Text */}
     <View className="px-6 mt-6 space-y-3">
        <Text className="text-[#3C6072] text-[38px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
     </View>
     {/* Circle Section */}
     <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 left-36"></View>
     <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-20 right-36"></View>

     {/* Image Container */}
     <View className="flex-1 relative items-center justify-center ">
        <Animatable.Image
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          source={HeroImage}
          className="w-full h-full object-cover"
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Discover")} className="absolute bottom-20 w-24 h-24 rounded-full border-r-2 border-t-4 border-l-2 border-[#00BCC9] items-center justify-center">
          <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]" >
              <Text className="text-gray-50 text-[34px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
     </View>
     
    </SafeAreaView>
  )
}

export default Home