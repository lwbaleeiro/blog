import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string()
      })
    ).optional(),
    wip: z.boolean().default(false)
  }),
});

const whoamiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    experience: z.array(
      z.object({
        date: z.string(),
        title: z.string(),
        company: z.string(),
        description: z.string().optional()
      })
    ).optional(),
    education: z.array(
      z.object({
        date: z.string(),
        title: z.string(),
        company: z.string(),
        description: z.string().optional()
      })
    ).optional(),
    stack: z.array(z.string()).optional(),
    contact: z.array(
      z.object({
        method: z.string(),
        value: z.string(),
        url: z.string()
      })
    ).optional()
  })
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
  'whoami': whoamiCollection,
};
