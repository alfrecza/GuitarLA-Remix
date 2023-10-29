import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '../models/guitarras.server'

import ListadoGuitarras from '../components/listadoGuitarras'

export async function loader() {
  const guitarras = await getGuitarras()
  
  return guitarras.data
}

export function meta() {
  return[
    {title: 'GuitarLA - Tienda'},
    {descripcion: 'GuitarLA, nuestra coleccion de guitarras'}
  ]
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <ListadoGuitarras guitarras={guitarras}/>
  )
}

export default Tienda