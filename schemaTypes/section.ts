import { defineType, defineField, defineArrayMember } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'
import { column } from './blocks/column'

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Internal title for identifying this section in Studio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fullWidth',
      type: 'boolean',
      title: 'Full Width',
      description: 'Make this section span the full width of the viewport',
      initialValue: false,
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      description: 'Choose a background color for this section',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Light Gray', value: 'gray-100' },
          { title: 'Dark Gray', value: 'gray-800' },
          { title: 'Black', value: 'black' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
        layout: 'radio',
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      description: 'Optional background image for this section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      description: 'Add 1 or 2 columns to this section',
      validation: (rule) => rule.min(1).max(2),
      of: [
        defineArrayMember({ type: 'column' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      columns: 'columns',
      backgroundColor: 'backgroundColor',
      fullWidth: 'fullWidth',
    },
    prepare({ title, columns, backgroundColor, fullWidth }) {
      const columnCount = Array.isArray(columns) ? columns.length : 0
      const subtitle = `${columnCount} column${columnCount !== 1 ? 's' : ''}${fullWidth ? ' • Full Width' : ''}${backgroundColor ? ` • ${backgroundColor}` : ''}`
      
      return {
        title: title || 'Untitled Section',
        subtitle,
        media: BlockContentIcon,
      }
    },
  },
})
