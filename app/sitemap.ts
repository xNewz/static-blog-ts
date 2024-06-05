//@ts-nocheck

import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/utils";
import { posts } from "#site/content";

const slugs = getAllPostSlugs(posts);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const postEntries: MetadataRoute.Sitemap[] = slugs.map((slug) => ({
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
        lastModified: new Date().toISOString(),
    }));

    return [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
          lastModified: new Date().toISOString(),
        },
        ...postEntries.map((entry: any) => ({
          url: entry.url,
          lastModified: new Date().toISOString(),
        })),
      ];
  } catch (error) {
    return [];
  }
}
