export default async function FetchPost(url, login){

    if(!url) return console.error("Url no digitada")
    try{
        const ApiUrl = process.env.NEXT_PUBLIC_API;

        const res = await fetch(ApiUrl+url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })

        if(!res.ok){
            return res
        }

        const data = await res.json();

        return data
    } catch(error){
        console.error("Error en el servidor", error)
    }
}