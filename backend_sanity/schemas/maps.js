export default {
  name: 'maps',
  type: 'document',
  title: 'Maps',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
