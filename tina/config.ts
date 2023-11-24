import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: '',
  clientId: '',
  token: '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Page',
        path: 'content/pages',
        format: 'md',
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
