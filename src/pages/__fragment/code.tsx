import { ReactNode, Children } from "react"

interface CodeProps {
    fileName: string,
    removeIndex?: boolean,
    children: ReactNode
}

export function Code(props: CodeProps) {
    const indices: number[] = []
    Children.forEach(
        props.children, (item, index) => indices.push(index + 1)
    )

    return (
        <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
            <div className="relative flex items-center">
                <span className="py-2 px-4 bg-gray-200/50 w-full">
                    <span className="py-1 px-2 flex w-fit gap-4 border-[0.5px] border-gray-400 rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span>{props.fileName}</span>
                    </span>
                </span>
                <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                </button>
            </div>
            <div className="text-gray-600 py-4 px-8 flex gap-8 overflow-x-scroll">
                {!props.removeIndex && (
                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                        {indices.map(val => <span>{val}</span>)}
                    </div>
                    )
                }
                <div className="flex flex-col gap-1">
                    {props.children}
                </div>
            </div>
        </div>
    )
}