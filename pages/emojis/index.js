import { promises as fs } from "fs";
import path from "path";

export default function EmojiPage({ posts }) {
  return (
    <div>
      <div className="m-10 flex justify-center">
        <a
          href="/zip/emojis.zip"
          class="flex-shrink-0 bg-red-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        >
          Download ZIP File
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        {posts.map((post, index) => (
          <img
            src={`/img/emojis/${post.filename}`}
            alt={post.filename}
            key={index}
          />
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
