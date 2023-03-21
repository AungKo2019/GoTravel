import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Restaurants ,Attractions, Castle, River} from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';


const Discover = () => {
  const navigation=useNavigation();

    const [type, setType] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setmainData] = useState([]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        }); 
    },[]);

    useEffect(() => {
      setIsLoading(true);
      setInterval(() => {
        setIsLoading(false);
      }, 5000);
    
    }, [])
    

  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <View className="flex-row items-center justify-between px-2 py-12">
        <View>
            <Text className="text-[36px] text-[#0B646B] font-bold">Discover</Text>
            <Text className="text-[#527873] text-[32px]">the Beauty Today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
            <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
        </View>
      </View> 

      <View className="flex-row items-center bg-white mx-4 -my-6 rounded-xl py-1 px-4 shadow-lg ">
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{fields:"geometry"}}
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(details?.geometry?.viewport);
            }}
            query={{
              key: 'YOUR API KEY',
              language: 'en',
            }}
          />
      </View>
      {/* Menu Container */}
      {isLoading ? (
        <View className="items-center justify-center mt-56">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ):(
        <ScrollView className="mt-8">
        <View className="flex-row items-center justify-between px-8 mt-12">
            <MenuContainer 
            key={"hotel"} 
            title="Hotels" 
            imageSrc={Hotels}
            type={type}
            setType={setType}
            />
           <MenuContainer 
            key={"attractions"} 
            title="Attractions" 
            imageSrc={Attractions}
            type={type}
            setType={setType}
            />
            <MenuContainer 
            key={"restaurants"} 
            title="Restaurants" 
            imageSrc={Restaurants}
            type={type}
            setType={setType}
            />

        </View>

        <View>
            <View className="flex-row items-center justify-between px-4">
              <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2" >
                <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                <FontAwesome name='long-arrow-right' size={24} color='#A0C4C7'/>
              </TouchableOpacity>
            </View>

            <View className="-px-6 mt-8 flex-row items-center justify-evenly">
                <ItemCardContainer key={"101"} imageSrc={'https://cdn.pixabay.com/photo/2018/09/20/15/13/church-3691120_960_720.jpg'} title="Lake" location="Italy"/>
                <ItemCardContainer key={"102"} imageSrc={'https://cdn.pixabay.com/photo/2020/04/02/09/03/tourism-4994192_960_720.jpg'} title="Hill" location="Georgia"/>
            </View> 
            <View className="-px-6 mt-2 flex-row items-center justify-evenly">
                <ItemCardContainer key={"102"} imageSrc={'https://cdn.pixabay.com/photo/2016/11/20/09/28/portovenere-1842345_960_720.jpg'} title="Night" location="Italy"/>
                <ItemCardContainer key={"101"} imageSrc={'https://cdn.pixabay.com/photo/2017/01/05/16/16/augsburg-1955582_960_720.jpg'} title="Castle" location="Germany"/>
            </View>
            <View className="-px-6 mt-2 flex-row items-center justify-evenly">
                <ItemCardContainer key={"101"} imageSrc={'https://cdn.pixabay.com/photo/2020/08/12/19/29/mutianyu-5483519_960_720.jpg'} title="Great Wall" location="China"/>
                <ItemCardContainer key={"102"} imageSrc={'https://cdn.pixabay.com/photo/2016/04/11/23/13/italy-1323383_960_720.jpg'} title="Binoculars" location="Italy"/>
            </View>
            
        </View>
      </ScrollView>
      )}
      
     
    </SafeAreaView>
  )
}

export default Discover;