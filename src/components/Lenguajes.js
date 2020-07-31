import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, EffectCoverflow } from "swiper"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "swiper/swiper-bundle.css"
import "swiper/components/effect-coverflow/effect-coverflow.scss"
SwiperCore.use([Pagination, EffectCoverflow])
const Lenguajes = () => {
  const {
    allDatoCmsLenguajeprogramacion: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsLenguajeprogramacion {
        nodes {
          titulo
          descripcion
          imagen {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container mx-auto mt-10  ">
      <Swiper
        effect="coverflow"
        slidesPerView={"auto"}
        css={css`
          height: 450px;
        `}
        loop
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch:30,
          depth: 50,
          modifier:1,
          slideShadows: false,
        }}
        centeredSlides
        pagination
      >
        {nodes.map(({ titulo, descripcion, imagen: { fluid } }) => (
          <SwiperSlide key={titulo} className="max-w-sm">
            <div className="shadow-lg max-w-xs mx-auto mt-5 ">
              <Image className="w-full " fluid={fluid} />
              <div className="px-6 py-4">
                <h2 className="font-bold text-lg mb-4 font-openSans">
                  {titulo}
                </h2>
                <p className="text-gray-700 text-base leading-normal text-left">
                  {descripcion}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Lenguajes
