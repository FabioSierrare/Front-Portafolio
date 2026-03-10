"use client";
import "./globals.css";

export default function page({ children }) {
  const logo = "< FABIO SIERRA />";
  console.log(4 % 10)
  return (
    <div className="w-full mx-auto">
      {/*Menu de navegación */}
      <nav className="flex p-5 justify-center">
        {/* logo */}
        <div className="flex text-white text-2xl">
          <h1>{logo}</h1>
        </div>

        {/* Links de navegación */}
        <div className="flex justify-between w-1/2 m-auto text-Links text-[16px]">
          <a href="" className="hover:text-white">
            SOBRE MI
          </a>
          <a href="" className="hover:text-white">
            PROYECTOS
          </a>
          <a href="" className="hover:text-white">
            SKILLS
          </a>
          <a href="" className="hover:text-white">
            EXPERIENCÍA
          </a>
          <a href="" className="hover:text-white">
            EDUCACIÓN
          </a>
          <a href="" className="hover:text-white">
            CONTACTO
          </a>
        </div>
      </nav>

      {/* Carrusel */}
      
    </div>
  );
}
