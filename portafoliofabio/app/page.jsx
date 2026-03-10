"use client";
import "./globals.css";
import { useState, useEffect } from "react";

export default function page({ children }) {
  const logo = "< FABIO SIERRA />";
  const images = ["/img/game.jpg", "/img/game2.jpg", "/img/games3.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

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
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
        <img
          src={images[index]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="ml-15 pr-80 my-auto">
            <p className="text-white mt-21">
              <span className="text-white font-bold">
                REGISTRO TURNOS CONSULTORIO JURIDICO:
              </span>{" "}
              Sistema desarrollado para optimizar la asignación y gestión de
              turnos de estudiantes de una universidad de Derecho, encargados de
              brindar consultorías jurídicas a distintos usuarios.
            </p>

            <button className="w-48 py-3 mt-7 text-white bg-gradient-to-b from-ArribaYBajo via-medio to-ArribaYBajo rounded-2xl cursor-pointer">
              VER MÁS
            </button>
          </div>
        </div>

        {/* botón anterior */}
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded cursor-pointer"
        >
          ‹
        </button>

        {/* botón siguiente */}
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded cursor-pointer"
        >
          ›
        </button>
      </div>

      {/* Perfil */}
      <div className="w-full mt-13 flex">
        {/* contenedor con borde degradado */}
        <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 to-yellow-500 mr-10">
          {/* fondo blanco para separar la imagen del gradiente */}
          <div className="bg-white rounded-full p-1">
            <img
              src="./img/FotoPerfil.jpg"
              alt="foto de perfil"
              className="object-cover block w-75 h-75 rounded-full"
            />
          </div>
        </div>
        <div className="text-white flex-1 m-auto">
          <h3 className="mb-1 text-3xl ">
            /* BACKEND DEVELOPER */
            <br />
            FABIO SIERRA REDONDO
            <br />
            .NET & NEXT.JS
          </h3>
          <hr />
          <div className="mt-2 flex justify-between w-40">
            <img
              src="./icons/GitHub.png"
              alt="GitHub"
              className="object-cover block w-10 h-10 rounded-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              viewBox="0 0 640 640"
            >
              <path
                fill="rgb(5, 4, 8)"
                d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              viewBox="0 0 640 640"
            >
              <path
                fill="rgb(5, 4, 8)"
                d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
              />
            </svg>
          </div>
          <p className="p-2 mt-4 border w-70 text-center rounded-2xl text-xl">fabiosierra281@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
