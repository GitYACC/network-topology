import { useSession } from "next-auth/react"
import Home from "./__callback/docs/authorized"
import SignIn from "./__callback/unauthorized"


export default function Documentation() {
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