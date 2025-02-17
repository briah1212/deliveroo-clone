import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow' 
import client from '../sanity'

const HomeScreen = () => {

  const navigation = useNavigation();
  const [FeaturedCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  useEffect(() => {
    client.fetch(
      `*[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...,
            type[]->{
              name
            }
          }
        }
      }`
    ).then((data) => {
      setFeaturedCategories(data);
   })
  }, [])
  

  return (
    // something kinda wrong with SafeAreaView, has weird padding on bottom
    <View className='bg-white pt-14 '>
        {/* {Header} */}
        <View className="flex-row items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
             Current Location
            <ChevronDownIcon color='#00CCBB' size={20} />
          </Text>
        </View>

        <UserIcon color='#00CCBB' size={35} />

        </View>

      {/* Search & filter */}

      <View className='flex-row items-center space-x-2 pt-3 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 pt-2 pb-2 pl-2 bg-gray-200'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput 
          placeholder='Restaurants and Cuisines'
          keyboardType='default' />
        </View>

        <AdjustmentsHorizontalIcon color='00CCBB' size={20} />
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100'>
        {/* Categories */}
        <Categories />

        {/* Features */}
        <FeaturedRow 
          id={1}
          title='Featured'
          description='Paid Placement from our partners' 
         />

        <FeaturedRow 
          id={2}
          title='Tasty Discounts'
          description='Enjoy the best deals in town'
         />

        <FeaturedRow 
          id={3}
          title='Offers Near You'
          description='Super deals from local restaurants'
         />
        
      </ScrollView>
    </View>


  )
}

export default HomeScreen