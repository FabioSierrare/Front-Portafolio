"use client"

import Link from "next/link"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Menu(){
    const logo = "< FABIO SIERRA />";
    const [scroll, setScroll] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [index, setIndex] = useState(0);

    return <nav className={`w-full sticky top-0 z-50 flex items-center transition-all duration-300
      ${scroll ? "bg-black/80 backdrop-blur-md shadow-lg rounded-2xl" : "bg-transparent"}`}>
        {/* logo */}
        <div className="w-60 text-white text-2xl mr-10">
          <h1>{logo}</h1>
        </div>

        {/* Links de navegación */}
        <div className="flex justify-between text-Links mx-auto text-[16px] text-center items-center">
          <Link href="/" className={`hover:text-white p-4 hover:bg-Abajo rounded-2xl mr-5 ${pathname === "/" ? "bg-Abajo text-white" : ""}`}>
            PORTAFOLIO
          </Link>
          <Link href="/admin" className={`hover:text-white p-4 hover:bg-Abajo rounded-2xl mr-5 ${pathname === "/admin" ? "bg-Abajo text-white" : ""}`}>
            AGREGAR TECNOLOGIA
          </Link>
          <Link href="/admin/agregar-proyecto" className={`hover:text-white p-4 hover:bg-Abajo rounded-2xl mr-5 ${pathname === "/admin/agregar-proyecto" ? "bg-Abajo text-white" : ""}`}>
            AGREGAR PROYECTO
          </Link>
          <Link href="/admin/mis-proyectos" className={`hover:text-white p-4 hover:bg-Abajo rounded-2xl mr-5 ${pathname === "/admin/ver-imagen" ? "bg-Abajo text-white" : ""}`}>
            MIS PROYECTOS
          </Link>
        </div>
      </nav>
}