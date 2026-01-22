import { defineType, defineField } from 'sanity'
import { VideoIcon } from '@sanity/icons'

export const videoEmbedBlock = defineType({
  name: 'videoEmbedBlock',
  title: 'Video Embed',
  type: 'object',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'videoType',
      type: 'string',
      title: 'Video Type',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Direct Upload', value: 'upload' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      initialValue: 'youtube',
    }),
    defineField({
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube URL',
      hidden: ({ parent }) => (parent as { videoType?: string })?.videoType !== 'youtube',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { videoType?: string }
          if (parent?.videoType === 'youtube' && !value) {
            return 'YouTube URL is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'vimeoUrl',
      type: 'url',
      title: 'Vimeo URL',
      hidden: ({ parent }) => (parent as { videoType?: string })?.videoType !== 'vimeo',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { videoType?: string }
          if (parent?.videoType === 'vimeo' && !value) {
            return 'Vimeo URL is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Video File',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => (parent as { videoType?: string })?.videoType !== 'upload',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { videoType?: string }
          if (parent?.videoType === 'upload' && !value) {
            return 'Video file is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
  ],
  preview: {
    select: {
      videoType: 'videoType',
      youtubeUrl: 'youtubeUrl',
      vimeoUrl: 'vimeoUrl',
      caption: 'caption',
    },
    prepare({ videoType, youtubeUrl, vimeoUrl, caption }) {
      let title = 'Video Embed'
      if (videoType === 'youtube' && youtubeUrl) {
        title = `YouTube: ${youtubeUrl}`
      } else if (videoType === 'vimeo' && vimeoUrl) {
        title = `Vimeo: ${vimeoUrl}`
      } else if (videoType === 'upload') {
        title = 'Direct Upload'
      }
      
      return {
        title: caption || title,
        subtitle: `Video (${videoType || 'unknown'})`,
        media: VideoIcon,
      }
    },
  },
})
