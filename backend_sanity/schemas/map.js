export default {
  name: 'map',
  type: 'document',
  title: 'Map',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Map Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Map Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
