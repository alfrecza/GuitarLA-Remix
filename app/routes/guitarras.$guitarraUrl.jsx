import { useLoaderData, useOutletContext } from '@remix-run/react'
import {getGuitarra} from '../models/guitarras.server'
import { useState } from 'react'
import Alerta from '../components/alerta'

export function meta({data}) {

  return [
    {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
    {descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`}
  ]
  
}

export async function loader({params}) {
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0) {
      throw new Response('', {
        status: 404,
        statusText: 'Guitarra no encontrada',
        data: {}
      })
    }

    return guitarra
    
}




function Guitarra() {

  const {agregarCarrito} = useOutletContext()

  const [cantidad, setCantidad] = useState(0)
  const [alerta, setAlerta] = useState(['', ''])

  const guitarra = useLoaderData()
  const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad <= 0) {
      setAlerta(['error', 'Debes definir la cantidad'])
      setTimeout(() => {
        setAlerta(['', ''])
      }, [4000])
      return
    }
    setAlerta(['', ''])

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)


  }

  return (
    <>
    {alerta.length ? <Alerta tipo={alerta[0]} mensaje={alerta[1]}/> : ''}
    <div className='guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`}/>

      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>{`$${precio}`}</p>
        

        <form className='formulario' onSubmit={handleSubmit}>
          <label htmlFor='cantidad'>Cantidad</label>
          <select id='cantidad' onChange={e => setCantidad(Number(e.target.value))}>
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Añadir al carrito"/>
        </form>
      </div>
    </div>
    </>
  )
}

export default Guitarra