import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
