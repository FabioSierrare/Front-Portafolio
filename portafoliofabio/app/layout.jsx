import "./globals.css"

export default function page({ children }){
    return (
        <html>
            <body className="bg-gradient-to-b from-Arriba via-[#575555cc] to-Abajo max-w-7xl min-h-screen mx-auto bg-fixed outline-none">
                {children}
            </body>
        </html>
    )
}