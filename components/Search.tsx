
import { Handlers, PageProps } from "$fresh/server.ts";

//need a handler if search button on the form is presses then wil render what i searched for 

// need to log 


export const handler: Handlers = {
  async GET(req, ctx) {
    const formData = await req.formData();
    const query = formData.get("q") as string;
    return ctx.render({query});
  },
};


export default function Search(props: PageProps<{ query?: string }>) {

  return (
    <div>
      <h1>Search</h1>
      <form method="get">
        <input type="text" name="q"  />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}