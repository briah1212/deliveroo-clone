import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* Category Card */}
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
      <CategoryCard imgUrl='https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg' title='Testing'/>
    </ScrollView>
  )
}

export default Categories