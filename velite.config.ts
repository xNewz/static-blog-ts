import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAtParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(200).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name].[hash][ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
