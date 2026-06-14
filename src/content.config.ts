import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    project: z.string().optional(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    locale: z.enum(['fr', 'en']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    stack: z.array(z.string()),
    order: z.number(),
    locale: z.enum(['fr', 'en']),
    icon: z.enum(['satellite', 'aerospace', 'agriculture', 'gis', 'erp', 'urban', 'admin']).optional(),
  }),
});

export const collections = { experience, projects };