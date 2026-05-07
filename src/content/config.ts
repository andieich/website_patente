import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    lang: z.enum(['en', 'fr']),
    /** slug shared between EN/FR versions of the same post (for language switcher) */
    translationKey: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
