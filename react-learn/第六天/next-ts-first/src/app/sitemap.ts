import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.example.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: { // 指定多个语言
        languages: {
          'en-US': 'https://www.example.com/en',
          'zh-CN': 'https://www.example.com/zh',
        },
      },
    },
    {
      url: 'https://www.example.com/user',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.example.com/news',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.example.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ];
}

