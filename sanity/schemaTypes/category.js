import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
    }),
  ],
});

