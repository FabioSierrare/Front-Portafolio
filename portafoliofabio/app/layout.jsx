import "./globals.css"

export default function page({ children }){
    return (
        <html>
            <body className="bg-gradient-to-b from-Arriba via-black to-Abajo max-w-7xl min-h-screen mx-auto">
                {children}
            </body>
        </html>
    )
}