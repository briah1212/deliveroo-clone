import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({id, imgurl, title, rating, genre, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity className='bg-white shadow mr-3'>
        <Image 
        source={{
          uri: imgurl
        }}
        className='h-36 w-60 rounded-sm'
        />

        <View className='px-3 pb-4'>
            <Text className='font-bold text-lg pt-2'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={.5} size={22} />
                <Text className='text-xs text-gray-500'>
                    <Text className='text-green-500'>{rating} • {genre}</Text>
                </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <MapIcon color='gray' opacity={.4} size={22} />
                <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard