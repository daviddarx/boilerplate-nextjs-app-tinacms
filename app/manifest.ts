import translations from '@/content/translations';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: translations.metaData.title(),
    short_name: translations.metaData.title(),
    description: translations.metaData.description,
    start_url: '/',
    display: 'fullscreen',
    background_color: '#fff',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
