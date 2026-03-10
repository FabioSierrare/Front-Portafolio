import "./globals.css"

export default function page({ children }){
    return (
        <html>
            <body className="bg-gradient-to-b from-ArribaYBajo via-medio to-ArribaYBajo max-w-7xl min-h-screen mx-auto">
                {children}
            </body>
        </html>
    )
}