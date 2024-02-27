import { Handlers, PageProps } from "$fresh/server.ts";
import { posts }from "./posts.tsx";

interface FormData {
  title: string;
  content: string;
}

export const handler: Handlers<FormData> = {
  async GET(_req, ctx) {
    return ctx.render({ title: "", content: "" });
  },
  async POST(req, ctx) {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const newPost: Post = {
      id: Date.now(),
      title,
      content,
    };

    posts.push(newPost);

    return ctx.render(newPost, { status: 302, headers: { location: "/posts" } });
  },
};

export default function NewPost() {
  return (
    <form method="post">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" required />

      <label for="content">Content:</label>
      <textarea name="content" id="content" rows="10" cols="50" required></textarea>

      <button type="submit">Create Post</button>
    </form>
  );
}