import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const token = request.cookies.get("token")?.value;

    if(!token){
        return NextResponse.redirect(new URL("/", request.url))
    }

    try{
        const payload = await jwtVerify(token, secret);
        return NextResponse.next();
    }catch(error){
        return NextResponse.redirect(new URL("/", request.url))
    }
    
}

export const config = {
    matcher: ["/admin/:path*"]
}