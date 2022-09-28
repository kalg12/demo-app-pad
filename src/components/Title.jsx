import React, {useEffect} from 'react'

const Title = () => {
  const array = [
    {
      nombre: 'Kevin',
      apellido: 'Luciano',
      edad: 27
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 30
    },
    {
      nombre: 'Pedro',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      edad: 25
    }
  ]

/*   const disparaUnAlert = () => {
    alert("Hola")
  } */

/*   useEffect(() => {
    disparaUnAlert()
  }) */

  return (
    <>
      <ul>
        {array.map((listado, index) => {
          return (
            <li key={index}>{listado.nombre} {listado.apellido} {listado.edad}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Title