
let posts = [
    {name:'andrej',surname:'rot'},
    {name:'gregor',surname:'rot'} 
  ]

// nedd a form to enter ne post with name and surname and then to push it in my array of posts
// need to make a form to enter name and surname and then to push it in my array of posts
export const handler: Handlers = {
  async GET(_req,ctx) {
    return ctx.render(posts)
  },
  async POST(req,ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString();
    const surname = form.get("surname")?.toString();
    const newPost = {name,surname}
    posts.push(newPost)
    return ctx.render(posts)
  }
}   
// need a form to enter name and surname and then to push it in my array of posts
export default function Test() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post,index) => (
          <li key={index}>
            <h2>{post.name}</h2>
            <p>{post.surname}</p>
          </li>
        ))}
      </ul>
      <form method="post">
        <input type="text" name="name" value="" />
        <input type="text" name="surname" value="" />
        <button type="submit">Create a new post</button>
      </form>
    </>
  );
}