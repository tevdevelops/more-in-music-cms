import { defineType, defineField } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const eventCardsBlock = defineType({
  name: 'eventCardsBlock',
  title: 'Event Cards',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
      description: 'Optional heading above the event cards',
    }),
    defineField({
      name: 'filter',
      type: 'string',
      title: 'Show events',
      options: {
        list: [
          { title: 'All', value: 'all' },
          { title: 'New', value: 'new' },
          { title: 'Past', value: 'past' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      header: 'header',
      filter: 'filter',
    },
    prepare({ header, filter }) {
      const filterLabel =
        filter === 'all' ? 'All' : filter === 'past' ? 'Past' : 'New'
      let title = `Event Cards (${filterLabel})`
      if (header) {
        title =
          header.length > 40 ? `${header.slice(0, 40)}...` : header
      }
      return {
        title,
        subtitle: `Event Cards · ${filterLabel}`,
        media: CalendarIcon,
      }
    },
  },
})
