import { z, defineCollection } from "astro:content";

const docsCollections = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        updated: z.date(),
        author: z.string(),
        tags: z.array(z.string())
    })
});

export const collections = {
    docs: docsCollections,
};