import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'event',
      type: 'reference',
      title: 'Related Event',
      to: [{ type: 'event' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
})

