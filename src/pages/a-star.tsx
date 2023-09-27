import { ReactNode } from "react"

function range(start: number, end: number): number[] {
    var res: number[] = []

    for (let i = start; i <= end; i++) {
        res.push(i)
    }

    return res
}

interface BackdropProps {
    children: ReactNode
}

function Backing(props: BackdropProps) {
    return (
        <div>

        </div>
    )
}

interface DGProps {
    inner: (props: BackdropProps) => ReactNode,
    children: ReactNode
}

function DeviceGraph(props: DGProps) {
    const Backdrop = props.inner

    return (
        <Backdrop>{props.children}</Backdrop>
    )
}

export default function Home() {
    return (
        <div className="relative flex h-full w-full justify-center items-center">
            {/* <div className="absolute w-[10px] h-[100px] rounded-md bg-black"></div> */}
            {/* <div className="absolute w-[100px] h-[10px] rounded-md bg-black"></div> */}
            
        </div>
    )
}