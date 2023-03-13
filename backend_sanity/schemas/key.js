export default {
    name: 'key',
    type: 'document',
      title: 'Keys',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      }, 
      {
        name: 'map',
        type: 'string',
        title: 'Map',
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
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
      },
      {
        name: 'loot',
        type: 'string',
        title: 'Potential Loot'
      }
    ]
  }