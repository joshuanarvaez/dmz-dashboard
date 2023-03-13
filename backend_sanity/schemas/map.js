export default {
    name: 'map',
    type: 'document',
      title: 'Maps',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options : {
          hotspot: true,
        },
      }
    ]
  }