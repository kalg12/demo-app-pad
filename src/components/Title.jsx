import React from 'react'

const Title = (props) => {
  return (
    <>
    <h1>Datos del coach</h1>
    <h4>Nombre del coach: {props.nombre}</h4>
    <h4>Apellido del coach: {props.apellido}</h4>
    <h4>Edad del coach: {props.edad}</h4>
    </>
  )
}

export default Title