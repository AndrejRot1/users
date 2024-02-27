
import { Handlers,PageProps } from "$fresh/server.ts";
import  SearchForm   from "../components/Search.tsx";

// ned a handler with Get method to read a json file and return it to ctx
export const handler: Handlers = {
  async GET(_req,ctx) {
    const books = await Deno.readTextFile("./static/books.json");
    return await ctx.render(JSON.parse(books))
  }
};

// now I need data to be displayed in a nice grid and also authors in to be displayed separated by coma for every book in a return function
export default function ReadBooks({ data }: PageProps) {
  return (
    <>
    <div>
      <h1>Books</h1>
      <SearchForm />
      <div>
        {data.map((book: any) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>Authors: {book.authors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

