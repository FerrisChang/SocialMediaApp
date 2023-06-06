import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'socialApp',

  projectId: 'ixxv11o8',
  dataset: 'user',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
