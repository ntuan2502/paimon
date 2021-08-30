import Head from "next/head";
import { promises as fs } from "fs";
import path from "path";
import { DownloadIcon } from "@heroicons/react/outline";

export default function EmojiPage({ posts }) {
  return (
    <div>
      <Head>
        <title>Genshin | Emoji</title>
      </Head>
      <div className="m-10 flex justify-center">
        <a
          href="/zip/emojis.zip"
          className="flex-shrink-0 bg-red-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        >
          Download ZIP File
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        {posts.map((post, index) => (
          <div className="relative" key={index}>
            <img
              className="hover:shadow-2xl hover:bg-gray-500 rounded-3xl m-5"
              src={`/img/emojis/${post.filename}`}
              alt={post.filename}
            />
            <a
              href={`/img/emojis/${post.filename}`}
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <DownloadIcon
                className="flex-shrink-0 h-9 w-9 text-indigo-600"
                aria-hidden="true"
              ></DownloadIcon>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "/public/img/emojis");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    return {
      filename,
    };
  });
  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
