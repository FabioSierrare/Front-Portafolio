"use client";

import { useState } from "react";

export default function SubirImagen() {
  const [archivo, setArchivo] = useState(null);
  const [nombre, setNombre] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Imagen", archivo);
    formData.append("Nombre", nombre);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/Tecnologia/PostTec`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    console.log("URL:", data.url);
  };

  console.log(nombre);
  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full flex flex-col bg-Abajo text-white rounded-2xl p-5 mt-50"
      >
        <h2 className="text-2xl font-semibold text-center mb-5">
          Agregar tecnologia
        </h2>
        <input
          type="text"
          placeholder="Nombre tecnologia"
          onChange={(e) => setNombre(e.target.value)}
          className="p-5 rounded-2xl border-white border outline-none mb-5"
        />
        <input
          type="file"
          onChange={(e) => setArchivo(e.target.files[0])}
          className="p-5 border border-white rounded-2xl w-1/2 mb-10 outline-none cursor-pointer"
          accept="image/*"
        />
        <button
          type="submit"
          className="p-5 border border-white rounded-2xl w-1/3 mx-auto cursor-pointer hover:text-Abajo hover:border-black hover:bg-white"
        >
          Subir
        </button>
      </form>
    </div>
  );
}
