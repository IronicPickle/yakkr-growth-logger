import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    projectId: 'bbov375k',

    name: 'production',
    title: 'Production Dataset',

    dataset: 'production',
    basePath: '/production',

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: 'bbov375k',

    name: 'staging',
    title: 'Staging Dataset',

    dataset: 'staging',
    basePath: '/staging',

    plugins: [deskTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
])
