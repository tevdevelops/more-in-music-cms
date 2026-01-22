import { defineField, defineType } from "sanity";
import { MenuIcon } from '@sanity/icons'

export const navLink = defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Dropdown Only (No Link)', value: 'dropdownOnly' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { children?: unknown[] }
          const hasChildren = Array.isArray(parent?.children) && parent.children.length > 0
          
          // If no children exist, link type is required
          if (!hasChildren && !value) {
            return 'Link type is required when there are no dropdown items'
          }
          
          // If children exist but no link type selected, that's okay (dropdown-only)
          return true
        }),
    }),
    defineField({
      name: 'internalReference',
      title: 'Internal Page',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'homePage' },
      ],
      hidden: ({ parent }) => {
        const linkType = (parent as { linkType?: string })?.linkType
        return linkType !== 'internal'
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string; children?: unknown[] }
          const hasChildren = Array.isArray(parent?.children) && parent.children.length > 0
          
          // If linkType is internal, require the reference (unless it's a dropdown-only with children)
          if (parent?.linkType === 'internal' && !value && !hasChildren) {
            return 'Internal page reference is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => {
        const linkType = (parent as { linkType?: string })?.linkType
        return linkType !== 'external'
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string; children?: unknown[] }
          const hasChildren = Array.isArray(parent?.children) && parent.children.length > 0
          
          // If linkType is external, require the URL (unless it's a dropdown-only with children)
          if (parent?.linkType === 'external' && !value && !hasChildren) {
            return 'External URL is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'children',
      title: 'Dropdown Items',
      type: 'array',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { linkType?: string }
          // If dropdownOnly is selected, children are required
          if (parent?.linkType === 'dropdownOnly') {
            if (!Array.isArray(value) || value.length === 0) {
              return 'Dropdown items are required when "Dropdown Only" is selected'
            }
          }
          return true
        }),
      of: [
        {
          type: 'object',
          name: 'childLink',
          title: 'Child Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Internal Page', value: 'internal' },
                  { title: 'External URL', value: 'external' },
                ],
                layout: 'radio',
              },
              initialValue: 'internal',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'internalReference',
              title: 'Internal Page',
              type: 'reference',
              to: [
                { type: 'page' },
                { type: 'homePage' },
              ],
              hidden: ({ parent }) => parent?.linkType !== 'internal',
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as { linkType?: string }
                  if (parent?.linkType === 'internal' && !value) {
                    return 'Internal page reference is required'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
              hidden: ({ parent }) => parent?.linkType !== 'external',
              validation: (rule) =>
                rule.custom((value, context) => {
                  const parent = context.parent as { linkType?: string }
                  if (parent?.linkType === 'external' && !value) {
                    return 'External URL is required'
                  }
                  return true
                }),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              linkType: 'linkType',
            },
            prepare({ title, linkType }) {
              return {
                title: title || 'Untitled',
                subtitle: linkType === 'internal' ? 'Internal' : 'External',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      linkType: 'linkType',
      hasChildren: 'children',
    },
    prepare({ title, linkType, hasChildren }) {
      const childrenCount = Array.isArray(hasChildren) ? hasChildren.length : 0
      let subtitle = ''
      
      if (linkType === 'dropdownOnly' || (childrenCount > 0 && !linkType)) {
        subtitle = `Dropdown Only - ${childrenCount} item${childrenCount !== 1 ? 's' : ''}`
      } else if (childrenCount > 0) {
        subtitle = `${linkType === 'internal' ? 'Internal' : 'External'} - ${childrenCount} item${childrenCount !== 1 ? 's' : ''}`
      } else {
        subtitle = linkType === 'internal' ? 'Internal' : linkType === 'external' ? 'External' : 'No link'
      }
      
      return {
        title: title || 'Untitled',
        subtitle,
      }
    },
  },
})

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'navLink' }],
    }),
  ],
  preview: {
    select: {
      items: 'navigationItems',
    },
    prepare({ items }) {
      const itemsCount = Array.isArray(items) ? items.length : 0
      return {
        title: 'Header Navigation',
        subtitle: `${itemsCount} navigation item${itemsCount !== 1 ? 's' : ''}`,
      }
    },
  },
})