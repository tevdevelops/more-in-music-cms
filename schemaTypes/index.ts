import { event } from './event'
import { post } from './post'
import { page } from './page'
import { gallery } from './gallery'
import { homePage } from './homePage'
import { header, navLink } from './header'
import { section } from './section'
import { pageBuilder } from './pageBuilder'
import { richTextBlock } from './blocks/richTextBlock'
import { videoEmbedBlock } from './blocks/videoEmbedBlock'
import { column } from './blocks/column'

export const schemaTypes = [
  event,
  post,
  page,
  gallery,
  homePage,
  navLink,
  header,
  section,
  pageBuilder,
  richTextBlock,
  videoEmbedBlock,
  column,
]
