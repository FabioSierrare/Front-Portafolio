"use client";

import { useState } from "react";
import FetchData from "@/services/Api";

export default function page() {
  const [contador, setContador] = useState(1);
  const [valores, setValores] = useState([]);
  const [form, setForm] = useState(null);
  const [archivo, setArchivo] = useState(null);

  const Tecnologia = FetchData("/api/Tecnologia/GetTecnologia");

  const contar = (num, index) => {
    if (num === -1 && contador > 1) {
      setContador(contador + num);
      const nuevo = valores.filter((_, i) => i !== index);
      setValores(nuevo);
    } else if (num === 1) {
      setContador(contador + num);
    }
  };

  const handleChange = (index, value) => {
    const nuevos = [...valores];
    const repite = nuevos.some((elemento, indice) => {
      return elemento === parseInt(value) && indice !== index;
    });

    if (repite) {
      return;
    }
    nuevos[index] = parseInt(value);
    setValores(nuevos);
  };

  const handleinfo = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  console.log(form);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("Titulo", form.Titulo);
    formData.append("Descripcion", form.Descripcion);
    formData.append("UrlGitHub", form.UrlGitHub);
    if (form?.UrlDemo) {
      formData.append("UrlDemo", form.UrlDemo);
    }
    formData.append("Imagen", archivo);
    valores.forEach((id) => {
      formData.append("TecnologiaId", id);
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/Proyecto/PostProyectoCompleto`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!res.ok) {
        throw new Error("Error en la peticion: " + res.status + res.body);
      }

      const data = await res.text();
      alert("Se guardo correctamente");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={submit}
        className="max-w-3xl w-full flex flex-col bg-Abajo text-white rounded-2xl p-5 mt-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-5">
          Agregar proyecto
        </h2>
        <input
          type="text"
          placeholder="Titulo"
          maxLength={30}
          className="p-5 rounded-2xl border-white border outline-none mb-5 w-full"
          name="Titulo"
          required
          onChange={handleinfo}
        />
        <textarea
          placeholder="Descripcion"
          maxLength={400}
          className="p-5 outline-none border-white border rounded-2xl h-35 mb-5"
          name="Descripcion"
          required
          onChange={handleinfo}
        ></textarea>
        <div className="flex flex-col mb-5">
          <h3 className="text-xl mb-3">Añadir tecnologias usadas</h3>
          {[...Array(contador)].map((_, i) => (
            <div key={i} className="w-full flex justify-between mb-5">
              <select
                className="p-5 outline-none border border-white text-white rounded-2xl mr-5 flex-1"
                value={valores[i] || ""}
                onChange={(e) => handleChange(i, e.target.value)}
                required
              >
                <option value="" disabled className="bg-Abajo text-white">
                  Selecciona una tecnología
                </option>
                {Tecnologia && Tecnologia.length > 0 ? (
                  Tecnologia.map((tec) => (
                    <option
                      key={tec.id}
                      value={tec.id}
                      className="bg-Abajo text-white"
                    >
                      {tec.nombre}
                    </option>
                  ))
                ) : (
                  <option value="" disabled className="bg-Abajo text-white">
                    Cargando tecnologías...
                  </option>
                )}
              </select>

              <input
                type="button"
                value="x"
                className="text-2xl p-4 px-6 border border-white rounded-full cursor-pointer hover:bg-white hover:text-red-700"
                onClick={() => contar(-1, i)}
              />
            </div>
          ))}
          <input
            type="button"
            value="+"
            className="px-5 py-3 cursor-pointer text-3xl text-center border border-white rounded-full hover:bg-white hover:text-Abajo"
            onClick={() => contar(1)}
          />
        </div>
        <div className="flex justify-between mb-10">
          <input
            type="text"
            className="max-w-[300px] w-full mr-5 p-5 outline-none border border-white rounded-2xl"
            placeholder="Url GitHub"
            name="UrlGitHub"
            required
            onChange={handleinfo}
          />
          <input
            type="text"
            className="max-w-[300px] w-full mr-5 p-5 outline-none border border-white rounded-2xl"
            placeholder="Url Demo"
            name="UrlDemo"
            onChange={handleinfo}
          />
        </div>
        <h3 className="text-xl mb-3">Añadir imagen de fondo</h3>
        <input
          type="file"
          onChange={(e) => setArchivo(e.target.files[0])}
          name="Imagen"
          className="p-5 border border-white rounded-2xl w-full mb-10 outline-none cursor-pointer"
          required
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
