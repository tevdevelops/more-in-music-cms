import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const pageHeaderBlock = defineType({
  name: 'pageHeaderBlock',
  title: 'Page Header',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Optional header text (rendered as h1)',
    }),
    defineField({
      name: 'textAlignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Optional header image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      text: 'text',
      image: 'image',
    },
    prepare({ text, image }) {
      const hasText = !!text
      const hasImage = !!image
      
      let title = 'Page Header'
      if (hasText) {
        title = text.length > 50 ? `${text.slice(0, 50)}...` : text
      } else if (hasImage) {
        title = 'Page Header (Image only)'
      }
      
      return {
        title,
        subtitle: 'Page Header Block',
        media: image || DocumentTextIcon,
      }
    },
  },
})
