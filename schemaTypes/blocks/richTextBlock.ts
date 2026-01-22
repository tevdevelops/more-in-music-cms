import { defineType, defineField } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Rich Text',
  type: 'object',
  icon: TextIcon,
  fields: [
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
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      // Extract first block of text for preview
      const firstBlock = Array.isArray(content) 
        ? content.find((item: any) => item._type === 'block')
        : null
      
      const previewText = firstBlock?.children
        ?.map((child: any) => child.text)
        .join('')
        .slice(0, 50) || 'Rich Text Block'
      
      return {
        title: previewText,
        subtitle: 'Rich Text',
        media: TextIcon,
      }
    },
  },
})
