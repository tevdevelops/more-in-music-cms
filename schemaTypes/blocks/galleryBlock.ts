import { defineType, defineField } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const galleryBlock = defineType({
  name: 'galleryBlock',
  title: 'Gallery',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare({ images }) {
      const imageCount = Array.isArray(images) ? images.length : 0
      return {
        title: `Gallery (${imageCount} image${imageCount !== 1 ? 's' : ''})`,
        subtitle: 'Gallery Block',
        media: images?.[0] || ImageIcon,
      }
    },
  },
})
