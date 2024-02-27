// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $new_post from "./routes/new-post.tsx";
import * as $posts from "./routes/posts.tsx";
import * as $test from "./routes/test.tsx";
import * as $thanks_for_subscribing from "./routes/thanks-for-subscribing.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/new-post.tsx": $new_post,
    "./routes/posts.tsx": $posts,
    "./routes/test.tsx": $test,
    "./routes/thanks-for-subscribing.tsx": $thanks_for_subscribing,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;