import { defineType, defineField, defineArrayMember } from 'sanity'

export const dish = defineType({
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
    }),
    defineField({
      name: "short_description",
      title: "Short Description of Dish",
      type: "string",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "image",
      title: "Dish Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Price in USD", 
      type: "number",
    }),
  ],
});

