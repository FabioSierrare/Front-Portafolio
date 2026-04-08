"use client"

import { useEffect, useState } from "react"

export default function FetchData(url){
    const [json, SetJson] =  useState();

    useEffect(() => {
        const GetData = async () => {
            const ApiUrl = process.env.NEXT_PUBLIC_API;
            if(!ApiUrl) return console.error("No se puedo encontrar la ruta de la api");
            if(!url) return console.error("Url no se pudo encontrar");

            try{
                const respuesta = await fetch(`${ApiUrl}${url}`);
                if(!respuesta.ok) return console.error("");
                SetJson(await respuesta.json())
            }catch(error){
                return console.error("Error del servidor o en la peticion")
            }
        }
        GetData()
    }, [url])

    return json
}