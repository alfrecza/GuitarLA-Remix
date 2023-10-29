


const Alerta = ({tipo, mensaje}) => {
    return(
        <>
        <p className={tipo === 'error' ? 'alertaError' : 'alertaSucces'}>
            {mensaje}
        </p>
        </>
    )
}

export default Alerta