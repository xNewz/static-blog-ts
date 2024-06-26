import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const DISPLAY_POSTS = 3;

export default function Home() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const latestPosts = sortedPosts.slice(0, DISPLAY_POSTS);
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <Avatar className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <AvatarImage src="/avatar.webp" alt={siteConfig.author} />
            <AvatarFallback className="text-4xl"></AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col justify-center">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
            Hi! My name is
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-purple-500 to-pink-500">
            {siteConfig.name}
          </div>
          <div className="text-lg md:text-xl lg:text-2xl mt-4 mb-2 text-gray-800 dark:text-gray-200">
            #{siteConfig.occupation}
          </div>
          <div className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200">
            {siteConfig.description}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Latest Posts
        </div>
        {latestPosts?.length > 0 ? (
          <>
            <ul className="flex flex-col">
              {latestPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <Link
                href="/blog"
                className="text-lg text-gray-800 dark:text-gray-200 hover:underline"
              >
                See more posts →
              </Link>
            </div>
          </>
        ) : (
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Blog posts coming soon...
          </p>
        )}
      </div>
    </div>
  );
}
