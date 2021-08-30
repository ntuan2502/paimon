import { promises as fs } from "fs";
import path from "path";

export default function EmojiPage({ posts }) {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <img
          src={`/img/emojis/${post.filename}`}
          alt={post.filename}
          key={index}
        />
      ))}
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
