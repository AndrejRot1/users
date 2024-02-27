import { Handlers,PageProps } from "$fresh/server.ts";

// create a handler ro return ctx
export const handler: Handlers = {
  async GET(_req,ctx) {
    console.log("get is working");

    const names = [
      { name: "John" },
      { name: "Paul" },
      { name: "George" },
      { name: "Ringo" }
    ]
    return await ctx.render(names)
  },

  async POST(req,ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
  
   // console.log(name,email);

   // return ctx.render({name,email})

   return await new Response("Form submitted", {status: 200}  )

  },

};
  
export default function Home({params,data}:PageProps) {
  console.log("data",data)

  return (

  <>

      <div>
      {data.map((item:any) => (
        <h2>Name : {item.name} </h2>
      ))}
    </div>  


     <div>
      // need a nice form to get name and email add also a bit of style
      <form method="post">
      <input type="text" name="name" value="" />
        <input type="email" name="email" value="" />
        <button type="submit">Subscribe</button>
      </form>

    </div>

    <p>Hello,{data.name},your email is saved as {data.email}</p>
    
 
  </>
  );
}
