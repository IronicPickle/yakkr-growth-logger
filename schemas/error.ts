import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'error',
  type: 'document',
  title: 'Error',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      readOnly: true,
      validation: (Rule) => Rule.required().length(36),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailedInfo',
      type: 'text',
      title: 'Detailed Info',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timestamp',
      type: 'date',
      title: 'Timestamp',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'user',
      type: 'object',
      title: 'User',
      readOnly: true,
      fields: [
        defineField({
          name: 'id',
          type: 'string',
          title: 'ID',
          validation: (Rule) => Rule.required().length(11),
        }),
        defineField({
          name: 'displayName',
          type: 'string',
          title: 'Display Name',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          type: 'string',
          title: 'Email',
          validation: (Rule) => Rule.required().email(),
        }),
      ],
    }),
  ],
})
