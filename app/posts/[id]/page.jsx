import PostPages from "../page"
import { Suspense } from "react"

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  console.log(data)
  return data
}

async function Page({ params }) {
  const postin = await loadPost(params.id)

  return (
    <div> <h1>{postin.id} {postin.title}</h1>
      <p>{postin.body}</p>
      <hr/>
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>
        Cargando contenido ! ....
      </div>}>
      <PostPages/>
      </Suspense>
    </div>
  )
}

export default Page