import { useSession } from "next-auth/react"
import SignIn from "../__callback/unauthorized"
import Home from "../__callback/docs/link-authorized"


export default function LinksDoc() {
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