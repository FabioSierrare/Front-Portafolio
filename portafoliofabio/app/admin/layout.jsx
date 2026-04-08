"use client"

import "@/app/globals.css"
import Menu from "@/components/nav"

export default function layoutAdmin({children}){
    return <div className="w-full h-screen px-5">
        <Menu></Menu>
        {children}
    </div>
}