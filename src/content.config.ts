import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()).default([]),
        description: z.string(),
    }),
});

const about = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
    schema: z.object({}),
});

export const collections = { blog, about };