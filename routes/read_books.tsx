
import { Handlers,PageProps } from "$fresh/server.ts";

// ned a handler with Get method to read a json file and return it to ctx
export const handler: Handlers = {
  async GET(_req,ctx) {
    const books = await Deno.readTextFile("./static/books.json");
    return await ctx.render(JSON.parse(books))
  }
};

// need a books to be displayd
export default function ReadBooks({params,data}:PageProps) {
  return (
    <>
      <div>
        {data.map((item:any) => (
          <h3>Title : {item.title} </h3>
        ))}
      </div>  
    </>
  );
}

