import React from "react"
import { css } from "@emotion/core"
const Header = () => {
  return (
    <div
      className="w-full shadow-md bg-black "
      css={css`
        position: --webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 10;
      `}
    >
      <nav className="flex items-center justify-between px-3 py-2 self-center max-w-screen-xl mx-auto">
        <h1 className=" font-openSans text-white text-xl">Diego Zarate</h1>
        <div className="font-openSans text-white text-lg hidden md:inline-block ">
          <a className="mr-10 hover:text-gray-500" href="#">
            Inicio
          </a>
          <a className="mr-10 hover:text-gray-500" href="#">
            Proyectos
          </a>
          <a className="mr-10 hover:text-gray-500" href="#">
            Hobbys
          </a>
          <a className="mr-10 hover:text-gray-500" href="#">
            Lenguajes
          </a>
          <a className="hover:text-gray-500" href="#">
            Contactanos
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header
