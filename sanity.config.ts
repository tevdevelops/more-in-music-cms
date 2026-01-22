import {defineConfig} from 'sanity'
import {structureTool, ListItemBuilder, StructureBuilder} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'moreinmusic',

  projectId: '8tuq4s4o',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            // Homepage as singleton
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // Header as singleton
            S.listItem()
              .title('Header')
              .id('header')
              .child(
                S.document()
                  .schemaType('header')
                  .documentId('header')
              ),
            // Other document types
            ...S.documentTypeListItems().filter(
              (listItem: ListItemBuilder) => !['homePage', 'header'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

  document: {
    actions: (prev, context) => {
      // Singleton behavior is enforced via structure tool configuration
      // Document actions here can be customized if needed
      if (context.schemaType === 'homePage' || context.schemaType === 'header') {
        // Optionally filter out delete action to prevent accidental deletion
        return prev.filter((action) => action.action !== 'delete')
      }
      return prev
    },
  },

  schema: {
    types: schemaTypes,
  },
})
