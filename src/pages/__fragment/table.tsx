import { ReactNode } from "react"

interface TableProps {
    headings: string[],
    children: ReactNode
}

export function Table(props: TableProps) {
    return (
        <div className="border-2 border-gray-300 w-fit rounded-lg overflow-hidden">
            <table>
                <tbody>
                    <tr className="border-b-[1px]">
                        {props.headings.map(item => (
                            <td className="px-4 py-2 text-sm text-gray-700 font-medium">{item}</td>
                        ))}
                    </tr>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

function Row(props: { children: ReactNode }) {
    return (
        <tr className="odd:bg-white even:bg-slate-50">
            {props.children}
        </tr>
    )
}

function Item(props: { className?: string, children: ReactNode }) {
    return (
        <td className={`px-4 py-2 text-sm ${props.className}`}>
            {props.children}
        </td>
    )
}

Table.Row = Row
Table.Item = Item
