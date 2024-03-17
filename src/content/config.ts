import { defineCollection, z } from 'astro:content';
import {db, defineDb, defineTable, column } from 'astro:db';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const Comments = defineTable({
	columns: {
	  authorId: column.text(),
	  postId: column.text(),
	  body: column.text(),
	}
  })
  

export default defineDb({
	tables: { Comment },
  })


export const collections = { blog };




