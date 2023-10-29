import {Outlet, useOutletContext} from '@remix-run/react'
import styles from '../styles/guitarras.css'
import stylesAlerta from '../styles/alerta.css'

export function links() {
  return[
    {rel: 'stylesheet', href: styles},
    {rel: 'stylesheet', href: stylesAlerta}
  ]
}

function Tienda() {

  return (
    <main className='contenedor'>
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda