import { Handlers, PageProps } from "$fresh/server.ts";
import { NewPost } from "./new-post.tsx";

interface Post {
  id: number;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
  },
];

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    return ctx.render(posts);
  },
};

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <a href="/new-post">Create a new post</a>
    </div>
  );
}