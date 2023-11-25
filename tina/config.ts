import { defineConfig } from 'tinacms';

const slugify = (value = 'no-value') => {
  return `${value
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\u0300-\u036f]/g, '')}`;
};

export default defineConfig({
  branch: '',
  clientId: '',
  token: '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Page',
        path: 'content/pages',
        format: 'md',
        ui: {
          router: (props) => {
            if (props.document._sys.filename === 'home') {
              return '/';
            } else {
              return `/${props.document._sys.filename}`;
            }
          },
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
        fields: [
          { name: 'title', label: 'Title', type: 'string' },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              {
                name: 'hero',
                label: 'Hero',
                fields: [
                  { name: 'title', label: 'Title', type: 'string' },
                  { name: 'description', label: 'Description', type: 'rich-text' },
                  {
                    name: 'links',
                    label: 'Links',
                    type: 'object',
                    list: true,
                    fields: [
                      { name: 'href', label: 'Href', type: 'string', required: true },
                      { name: 'label', label: 'Label', type: 'string', required: true },
                      {
                        name: 'style',
                        label: 'Style',
                        type: 'string',
                        options: ['primary', 'secondary'],
                        required: true,
                      },
                    ],
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label };
                      },
                    },
                  },
                ],
              },
              {
                name: 'featureList',
                label: 'Feature List',
                fields: [
                  { name: 'title', label: 'Title', type: 'string' },
                  { name: 'description', label: 'Description', type: 'rich-text' },
                  {
                    name: 'feature',
                    label: 'Feature',
                    type: 'object',
                    list: true,
                    fields: [
                      { name: 'title', label: 'Title', type: 'string' },
                      { name: 'image', label: 'Image', type: 'image' },
                      {
                        name: 'description',
                        label: 'Description',
                        type: 'string',
                        ui: {
                          component: 'textarea',
                        },
                      },
                    ],
                    ui: {
                      itemProps: (item) => {
                        return { label: item.title };
                      },
                      defaultItem: {
                        title: 'Feature title',
                        description: 'Feature description',
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
