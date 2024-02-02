import { defineConfig } from 'tinacms';
import type { Template } from 'tinacms';

const slugify = (value = 'no-value') => {
  return `${value
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\u0300-\u036f]/g, '')}`;
};

const richTextTemplates: Template[] = [
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

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
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
          { name: 'title', label: 'Title', type: 'string', isTitle: true, required: true },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [
              {
                name: 'hero',
                label: 'Hero',
                ui: {
                  itemProps: (item) => {
                    return { label: `Hero: ${item.title}` };
                  },
                  defaultItem: {
                    title: 'Hero title',
                  },
                },
                fields: [
                  { name: 'title', label: 'Title', type: 'string', required: true },
                  {
                    name: 'description',
                    label: 'Description',
                    type: 'rich-text',
                    templates: richTextTemplates,
                  },
                  {
                    name: 'links',
                    label: 'Links',
                    type: 'object',
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label };
                      },
                    },
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
              {
                name: 'featureList',
                label: 'Feature-List',
                ui: {
                  itemProps: (item) => {
                    return { label: `Feature-List: ${item.title}` };
                  },
                  defaultItem: {
                    title: 'Feature-List title',
                  },
                },
                fields: [
                  { name: 'title', label: 'Title', type: 'string', required: true },
                  {
                    name: 'description',
                    label: 'Description',
                    type: 'rich-text',
                    templates: richTextTemplates,
                  },
                  {
                    name: 'feature',
                    label: 'Feature',
                    type: 'object',
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.title };
                      },
                      defaultItem: {
                        title: 'Feature title',
                        description: 'Feature description',
                      },
                    },
                    fields: [
                      { name: 'title', label: 'Title', type: 'string', required: true },
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
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'navigation',
        label: 'Navigation',
        path: 'content/navigation',
        format: 'md',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true /* Prioritize it back in the side-bar of the detail pages admin */,
        },
        fields: [
          {
            name: 'links',
            label: 'Links',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.label };
              },
            },
            fields: [
              { name: 'label', label: 'Label', type: 'string', required: true },
              { name: 'link', label: 'Link', type: 'string', required: true },
            ],
          },
        ],
      },
      {
        name: 'category',
        label: 'Categories',
        path: 'content/categories',
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string',
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'mdx',
        defaultItem: () => {
          return {
            createdAt: new Date(),
            published: true,
          };
        },
        ui: {
          router: (props) => {
            return `/blog/${props.document._sys.filename}`;
          },
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
        },
        fields: [
          { name: 'title', label: 'Title', type: 'string', isTitle: true, required: true },
          {
            name: 'createdAt',
            label: 'Created at',
            type: 'datetime',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'HH:mm',
            },
          },
          {
            name: 'published',
            label: 'Published',
            type: 'boolean',
          },
          {
            name: 'category',
            label: 'Category',
            type: 'reference',
            collections: ['category'],
            required: true,
          },
          { name: 'image', label: 'Image', type: 'image' },
          { name: 'body', label: 'Body', type: 'rich-text', templates: richTextTemplates },
        ],
      },
    ],
  },
});
