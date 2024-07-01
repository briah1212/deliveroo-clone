import { defineType, defineField } from 'sanity'

export const featured = defineType({
  name: "featured",
  title: "Featured Menu Category",
  type: "document",
  fields: [
    defineField({
        name: "name",
        title: "Featured Category Name",
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
        name: "restaurants",
        title: "Restaurants",
        type: "array",
        of: [{ type: "reference", to: [{ type: "restaurant" }] }],


      }),
  ],
});

