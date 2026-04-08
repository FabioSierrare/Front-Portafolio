
"use client"
import FetchPost from "@/services/ApiPost";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const TituloLogin = "< MI PORTAFOLIO />";
  const [data, setData] = useState(null)
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  const submit = async () => {
    try{
      const respuesta = await FetchPost("/api/Auth/Login", data)

      if(!respuesta?.token){
        setConfirm(true)
        return
      }

      const token = respuesta.token;

      document.cookie = `token=${token}; path=/;`
      localStorage.setItem("token", token)
      router.push("/admin")

    }catch(error){
      alert("ERROR")
    }
  }

  const handlerChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value,
    })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center box-border">
      <div className="w-[500px] p-5 flex flex-col ">
        <h3 className="text-white text-2xl mb-15 mx-auto">{TituloLogin}</h3>
        <input
          type="email"
          name="Correo"
          placeholder="Correo"
          autoComplete="new-email"
          onChange={handlerChange}
          className="w-full p-5 text-Abajo rounded-2xl outline-none border border-transparent bg-white mb-7.5 focus:border-Abajo focus:text-black"
        />

        <input
          type="password"
          name="Contraseña"
          onChange={handlerChange}
          placeholder="Contraseña"
          autoComplete="current-password"
          className={`w-full p-5 text-Abajo rounded-2xl outline-none bg-white border border-transparent focus:border-Abajo ${confirm ? "mb-4" : "mb-15"}`}
        />
        <p className={confirm ? `text-red-700 text-xl mb-10` : "hidden"}>Correo o contraseña incorrectos</p>
        <input
          type="button"
          onClick={() => submit()}
          value="INICIAR SESIÓN"
          className="w-full p-5 text-white rounded-2xl outline-none bg-Abajo cursor-pointer hover:text-Abajo hover:bg-white transition-all duration-400"
        />
      </div>
    </div>
  );
}
