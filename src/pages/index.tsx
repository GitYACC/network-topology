import { useSession } from "next-auth/react"
import Home from "./__callback/index/authorized"
import SignIn from "./__callback/unauthorized"



/(("(.+?)?"):(\[((("(.+?)?")+),?)+\]|("(.+?)?")+|{(("(.+?)?"):(\[((("(.+?)?")+),?)+\]|("(.+?)?")+),?)},+?),?)/g


export default function Website() {
    const {data: session, status} = useSession()

    if(status == "loading") {
        <div>Loading...</div>
    }

    if(session) {
        return <Home />
    } else {
        return <SignIn />
    }
}
