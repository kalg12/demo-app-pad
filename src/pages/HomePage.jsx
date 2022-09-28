import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Title from '../components/Title'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Title nombre="Kevin" apellido="Luciano" edad={27} />
    <Footer/>
    </>
  )
}

export default HomePage