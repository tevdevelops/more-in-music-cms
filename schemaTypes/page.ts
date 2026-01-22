import { defineType, defineField } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      type: 'pageBuilder',
      title: 'Sections',
      description: 'Add reusable sections to build your page content',
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'SEO Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'SEO Description',
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'SEO Image',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug?.current ? `/${slug.current}` : 'No slug',
      }
    },
  },
})

