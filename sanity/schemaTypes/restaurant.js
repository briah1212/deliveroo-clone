import { defineType, defineField, defineArrayMember } from 'sanity'

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Restuarant Name",
      type: "string",
    }),
    defineField({
      name: "short_description",
      title: "Short Description",
      type: "string",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
    }),
    defineField({
      name: "lat",
      title: "Latitude", 
      type: "number",
    }),
    defineField({
      name: "long",
      title: "Longitude",
      type: "number",
    }),
    defineField({
      name: "address",
      title: "Restaurant Address", 
      type: "string",
      options: {
        source: "title",
        required: true,
      },
    }),
    defineField({
      name: "rating",
      title: "Rating from 1 to 5",
      type: "number",
    }),
    defineField({
      name: "type",
      title: "Type of Restaurant",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }),
  ],
});

