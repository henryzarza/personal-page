import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://henryzarza.vercel.app/',
      lastModified: new Date('2023-08-04'),
    },
    {
      url: 'https://henryzarza.vercel.app/30-days-of-code',
      lastModified: new Date('2023-08-04'),
    },
    {
      url: 'https://henryzarza.vercel.app/advent-of-css',
      lastModified: new Date('2023-08-04'),
    },
  ]
}