import { defineType, defineField, defineArrayMember } from 'sanity'
import { SplitVerticalIcon } from '@sanity/icons'
import { richTextBlock } from './richTextBlock'
import { videoEmbedBlock } from './videoEmbedBlock'
import { galleryBlock } from './galleryBlock'
import { pageHeaderBlock } from './pageHeaderBlock'

export const column = defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  icon: SplitVerticalIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineArrayMember({ type: 'richTextBlock' }),
        defineArrayMember({ type: 'videoEmbedBlock' }),
        defineArrayMember({ type: 'galleryBlock' }),
        defineArrayMember({ type: 'pageHeaderBlock' }),
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      const contentCount = Array.isArray(content) ? content.length : 0
      return {
        title: `Column with ${contentCount} content block${contentCount !== 1 ? 's' : ''}`,
        subtitle: 'Column',
        media: SplitVerticalIcon,
      }
    },
  },
})
