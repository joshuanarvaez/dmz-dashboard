export default {
    name: 'drop',
    type: 'document',
      title: 'Dead Drops',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
      },
      {
        name: 'image',
        type: 'image',
        options : {
          hotspot: true,
        },
        title: 'Images',
      }
    ]
  }