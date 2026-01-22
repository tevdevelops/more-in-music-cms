import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  // __experimental_actions: [
  //   // Disable delete and duplicate actions for singleton
  //   'create',
  //   'update',
  // ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'overlay_logo',
          type: 'image',
          title: 'Overlay Logo',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'content_position',
          type: 'string',
          title: 'Content Position',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' },
            ],
          },
          validation: (rule) => rule.required(),
          initialValue: 'center',
        }),
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Heading',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'SEO Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'SEO Description',
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'SEO Image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home Page',
        subtitle: 'Home Page',
      }
    },
  },
})

