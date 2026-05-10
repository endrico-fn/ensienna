import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paintings = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "src/content/paintings" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: image(),
    date: z.coerce.date(),
    medium: z.string().default('Oil on canvas'),
    dimensions: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  paintings,
};
