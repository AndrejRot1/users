
import { Handlers,PageProps } from "$fresh/server.ts";
import  SearchForm   from "../components/Search.tsx";

// ned a handler with Get method to read a json file and return it to ctx
export const handler: Handlers = {
  async GET(req,ctx) {

    const url = new URL(req.url);
    const q = url.searchParams.get("q");

    console.log("q:", q);

    // if q is not null then return all books that contain q in their title or authors, use this code to open file const books = await Deno.readTextFile("./static/books.json");
    // if q is not null then return all books that contain q in their title or authors, use this code to open file const books = await Deno.readTextFile("./static/books.json");
    if(q){
      const books = await Deno.readTextFile("./static/books.json");
      const data = JSON.parse(books);
      const filteredData = data.filter((book: any) => {
        return book.title.includes(q) || book.authors.join(", ").includes(q);
      });
      return await ctx.render(filteredData);
    }
    

    


    const books = await Deno.readTextFile("./static/books.json");
    return await ctx.render(JSON.parse(books))
  }
};

// now I need data to be displayed in a nice grid and also authors in to be displayed separated by coma for every book in a return function
export default function ReadBooks({props,data}:PageProps) {
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

