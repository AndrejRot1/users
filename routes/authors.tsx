import { Handlers,PageProps } from "$fresh/server.ts";

// need a handler to get all authors from a json file and return it to ctx
export const handler: Handlers = {
  async GET(_req,ctx) {
    const authors = await Deno.readTextFile("./static/authors.json");
    return await ctx.render(JSON.parse(authors))
  }
};

// need a list of authors to be displayed
export default function Authors({params,data}:PageProps) {
  return (
    <>
      <div>
        {data.map((item:any) => (
          <h3>Name : {item} </h3>
        ))}
      </div>  
    </>

  );
}