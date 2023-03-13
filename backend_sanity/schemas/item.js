export default {
    name: 'item',
    type: 'document',
      title: 'Items',
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
        name: 'image',
        type: 'image',
        options : {
          hotspot: true,
        },
        title: 'Images',
      }
    ]
  }