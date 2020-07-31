import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Lenguajes from "../components/Lenguajes"
const IndexPage = () => {
  // console.log(data)
  //https://hoy.lasalle.mx/lasallistas-top10-de-programacion/

  return (
    <Layout>
      <Hero />
      <Lenguajes />
    </Layout>
  )
}

export default IndexPage
