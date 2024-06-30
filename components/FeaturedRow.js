import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, id}) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center px-4 justify-between">
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' size={20} />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'>
        
        {/* Restaurant Card */}

        <RestaurantCard
            id={1}
            imgurl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg'
            title='Testing'
            rating={5}
            genre='Japanese'
            address='1234 Testing Ave'
            short_description='Testing'
            dishes={['Sushi', 'Sashimi']}
            long={-122.084}
            lat={37.422}
        />

        <RestaurantCard
            id={1}
            imgurl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg'
            title='Testing'
            rating={5}
            genre='Japanese'
            address='1234 Testing Ave'
            short_description='Testing'
            dishes={['Sushi', 'Sashimi']}
            long={-122.084}
            lat={37.422}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow