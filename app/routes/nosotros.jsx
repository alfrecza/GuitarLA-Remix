import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return[
    {title: 'GuitarLA - Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}

export function links() {
  return[
    {rel: 'stylesheet', href: styles },
    {rel: 'preload', href: imagen, as: 'image'}
  ]
}


function Nosotros() {



  return (
    <main className="nosotros contenedor">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre osotros"/>

        <div>
          <p>
          Quisque magna nisi, tristique quis est non, sollicitudin aliquam ligula. Suspendisse porttitor imperdiet dolor, vel sagittis nisi tincidunt quis. Vivamus tempus velit ut libero hendrerit, sed ultrices lacus accumsan. Aliquam ex elit, tincidunt nec ex sit amet, viverra euismod libero. Nullam rutrum risus eu turpis convallis venenatis sed vel eros. Aliquam eget massa in sapien ullamcorper imperdiet sed sit amet nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse rutrum venenatis neque, id pharetra augue fringilla ultrices. 
          </p>
          <p>
          Quisque magna nisi, tristique quis est non, sollicitudin aliquam ligula. Suspendisse porttitor imperdiet dolor, vel sagittis nisi tincidunt quis. Vivamus tempus velit ut libero hendrerit, sed ultrices lacus accumsan. Aliquam ex elit, tincidunt nec ex sit amet, viverra euismod libero. Nullam rutrum risus eu turpis convallis venenatis sed vel eros. Aliquam eget massa in sapien ullamcorper imperdiet sed sit amet nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse rutrum venenatis neque, id pharetra augue fringilla ultrices. 
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros