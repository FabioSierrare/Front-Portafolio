"use client"
import FetchData from "@/services/Api"
import Proyecto from "@/components/proyecto/proyectoInfo"

export default function page(){
    const pro = FetchData("/api/Proyecto/GetProyectoInfo")

    return pro ? (
        pro.map((info, index) => (<div key={index}>
            <Proyecto info={info} />
        </div>))
    ) : (<h1>No hay proyectos publicados</h1>)
}