import { CollectionConfig } from 'payload';

const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'cloudImageUrl',
      label: 'Main Image URL (Cloudinary)',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Paste Cloudinary image URL here',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
          admin: {
            placeholder: 'Paste Cloudinary gallery image URL',
          },
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'discount',
      type: 'group',
      fields: [
        {
          name: 'amount',
          type: 'number',
        },
        {
          name: 'percentage',
          type: 'number',
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
    },
  ],
};

export default Products;
