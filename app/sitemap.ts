//@ts-nocheck

import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/utils";
import { posts } from "#site/content";

const slugs = getAllPostSlugs(posts);
const tags = posts.map((post) => post.tags).flat();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const postEntries: MetadataRoute.Sitemap[] = slugs.map((slug) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      lastModified: new Date().toISOString(),
    }));
    const tagEntries: MetadataRoute.Sitemap[] = tags.map((tag) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tags/${tag}`,
      lastModified: new Date().toISOString(),
    }));
    return [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/tags`,
        lastModified: new Date().toISOString(),
      },
      ...postEntries.map((entry: any) => ({
        url: entry.url,
        lastModified: new Date().toISOString(),
      })),
      ...tagEntries.map((entry: any) => ({
        url: entry.url,
        lastModified: new Date().toISOString(),
      })),
    ];
  } catch (error) {
    return [];
  }
}
