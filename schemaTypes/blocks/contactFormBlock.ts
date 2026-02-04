import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactFormBlock = defineType({
  name: 'contactFormBlock',
  title: 'Contact Form',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'formDescription',
      type: 'text',
      title: 'Form description',
      description: 'Intro text shown above the form (e.g. how to reach you)',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Form',
        media: EnvelopeIcon,
      }
    },
  },
})
