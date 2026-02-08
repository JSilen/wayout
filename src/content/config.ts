import { defineCollection, z } from 'astro:content';

const ajankohtaista = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    category: z.string(),
  }),
});

export const collections = { ajankohtaista };