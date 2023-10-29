import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server"
import { formatearFecha } from "../utils/helpers"
import styles from '../styles/blog.css'

export async function loader({params}) {
    const post = await getPost(params.blogUrl)

    if(post.data.length === 0) {
        throw new Response('', {
          status: 404,
          statusText: 'Blog no encontrado',
          data: {}
        })
      }

    return post.data
}

export function meta({data}) {
    return [
        {title: `GuitarLA - ${data[0].attributes.titulo}`}
    ]
}

export function links() {
    return[
        {rel: 'stylesheet', href: styles}
    ]
}


function Blog() {

  const post = useLoaderData()
  const {titulo, contenido, imagen, url, publishedAt} = post[0].attributes

  return (
    <article className="contenedor post mt-3">
        <img src={imagen.data.attributes.url}  className="imagen" alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
        <a href="/blog" className="buttonVolver">Volver</a>
    </article>
  )
}

export default Blog