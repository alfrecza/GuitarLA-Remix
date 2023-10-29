import { useLoaderData, Links} from "@remix-run/react"
import { getPosts } from "../models/posts.server"

import ListaPosts from "../components/listaPosts.jsx"

import styles from '../styles/blog.css'
import Post from "../components/post"

export async function loader() {

  const posts = await getPosts()

  return posts.data
}

export function meta() {
  return[
    {title: 'GuitarLA - Blog'}
  ]
}

export function links() {
  return[
    {rel: 'stylesheet', href: styles}
  ]
}


function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <ListaPosts posts={posts}/>
    </main>
  )
}

export default Blog