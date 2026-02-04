import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogCardsBlock = defineType({
  name: 'blogCardsBlock',
  title: 'Blog Cards',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      description: 'Optional heading above the blog cards',
    }),
    defineField({
      name: 'limit',
      type: 'number',
      title: 'Limit',
      description: 'Max number of posts to show (leave empty for no limit)',
      initialValue: 6,
    }),
  ],
  preview: {
    select: {
      header: 'header',
      limit: 'limit',
    },
    prepare({ header, limit }) {
      const limitLabel = limit ? `${limit} posts` : 'All'
      let title = `Blog Cards (${limitLabel})`
      if (header) {
        title = header.length > 40 ? `${header.slice(0, 40)}...` : header
      }
      return {
        title,
        subtitle: `Blog Cards · ${limitLabel}`,
        media: DocumentTextIcon,
      }
    },
  },
})
