import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const buttonBlock = defineType({
  name: 'buttonBlock',
  title: 'Button',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Button Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Button Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'URL', value: 'url' },
          { title: 'Internal Page', value: 'reference' },
        ],
        layout: 'radio',
      },
      initialValue: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'string',
      hidden: ({ parent }) => {
        const linkType = (parent as { linkType?: string })?.linkType
        return linkType !== 'url'
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string }
          if (parent?.linkType === 'url' && !value) {
            return 'URL is required when link type is URL'
          }
          return true
        }),
    }),
    defineField({
      name: 'pageReference',
      title: 'Internal Page',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'homePage' },
      ],
      hidden: ({ parent }) => {
        const linkType = (parent as { linkType?: string })?.linkType
        return linkType !== 'reference'
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string }
          if (parent?.linkType === 'reference' && !value) {
            return 'Internal page reference is required when link type is Internal Page'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      text: 'text',
      size: 'size',
      linkType: 'linkType',
      url: 'url',
      pageTitle: 'pageReference.title',
      pageSlug: 'pageReference.slug.current',
    },
    prepare({ text, size, linkType, url, pageTitle, pageSlug }) {
      let subtitle = 'No link'
      if (linkType === 'url' && url) {
        subtitle = url
      } else if (linkType === 'reference') {
        if (pageSlug) {
          subtitle = `/${pageSlug}`
        } else if (pageTitle) {
          subtitle = pageTitle
        } else {
          subtitle = 'Internal Page'
        }
      }
      const sizeLabel = size ? `${size.charAt(0).toUpperCase() + size.slice(1)} · ` : ''
      return {
        title: text || 'Button',
        subtitle: sizeLabel + subtitle,
        media: LinkIcon,
      }
    },
  },
})
