import type { Template, TinaField } from 'tinacms';

export const slugify = (value = 'no-value') => {
  return `${value
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\u0300-\u036f]/g, '')}`;
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = src;
  });
};

export const addImagesDimensions = async (obj: any): Promise<any> => {
  if (Array.isArray(obj)) {
    return Promise.all(obj.map(async (item: any) => addImagesDimensions(item)));
  } else if (obj && typeof obj === 'object') {
    const keys = Object.keys(obj);
    await Promise.all(
      keys.map(async (key: string) => {
        // add dimensions for image fields
        if (key === 'image') {
          if (obj[key]) {
            const { width, height } = await getImageDimensions(obj[key]);
            obj.imageWidth = width;
            obj.imageHeight = height;
          } else {
            obj.imageWidth = 0;
            obj.imageHeight = 0;
          }
          // add dimensions for images in rich-text
        } else if (key === 'type' && obj[key] === 'img') {
          const { width, height } = await getImageDimensions(obj.url);
          obj.caption = `${width}x${height}`;
        } else {
          await addImagesDimensions(obj[key]);
        }
      }),
    );
  }
  return obj;
};

export const richTextTemplates: Template[] = [
  {
    name: 'CTA',
    label: 'CTA',
    fields: [
      {
        name: 'url',
        label: 'URL',
        type: 'string',
      },
      {
        name: 'label',
        label: 'Label',
        type: 'string',
      },
      {
        name: 'blank',
        label: 'External link',
        type: 'boolean',
      },
    ],
  },
];

export const imageFields: TinaField[] = [
  { name: 'image', label: 'Image', type: 'image' },
  { name: 'imageWidth', label: 'Image width', type: 'number' },
  { name: 'imageHeight', label: 'Image height', type: 'number' },
];
