import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"
const Hero = () => {
  const {
    image: {
      sharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1360, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={fluid}
      className="w-full bg-fixed"
      css={css`
        background-attachment: fixed;
        height: 100vh;
      `}
    >
      <div className="container  h-screen max-w-screen-xl mx-auto my-0">
        <h1
          css={css`
            position: absolute;
            /* bottom:1000px; */
            bottom: 50px;
            
          `}
          className="text-white p-6 s rounded-lg mt-0 text-left text-3xl leading-snug font-openSans  border-gray-100 border-4"
        >
          Frontend <br />
          Backend <br />
          Mobile <br />
          Developer
        </h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero
