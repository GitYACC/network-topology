import { ReactNode, useCallback, useEffect, useState } from "react"
import { getData } from "../api/data"
import { TopologyJSON } from "../api/_apiMethodHandler"

interface CodeProps {
    idx: number,
    tab: number,
    children: React.ReactNode,
    id: string
}
function Code(props: CodeProps) {
    return (
        <div id={props.id} className="flex p-2 pb-0">
            <span className={`text-gray-300 left-0 mr-${props.tab}`}>{props.idx}</span>
            <span id="code-child" className="ml-8">{props.children}</span>
        </div>
    )
}

interface ListProps {
    prevIndex: number,
    tab: number,
    array: any[],
    id: string
}
function ListCode(props: ListProps) {
    console.log(props.id)

    var res = (
        props.array.map((item, idx) => {
            return (
                <Code id={`${props.id}-${idx}`} tab={props.tab + 8} idx={props.prevIndex + 1}>
                    {
                        Array.isArray(item) && item.length != 0
                        ? <ListCode 
                            id={`${props.id}-${idx}`}
                            prevIndex={props.prevIndex + 1} 
                            tab={props.tab + 8}
                            array={item}
                        />
                        : typeof item == "object"
                            ? <ObjectCode 
                                id={`${props.id}-${idx}`} 
                                prevIndex={props.prevIndex + 1} 
                                tab={props.tab + 8}
                                object={item}
                            />
                            : <Code 
                                id={`${props.id}-${idx}`}
                                tab={props.tab + 8} 
                                idx={props.prevIndex + 1}
                            >
                                {item}
                            </Code>
                    },
                </Code>
            )
        })
    )

    //document.querySelector(`#${props.id} #code-child`)!.innerHTML += " ["

    return res
}

function ObjectCode() {

}

export default function JSONCode({ children }) {
    const topology: TopologyJSON = JSON.parse(children)

    return (
        <div className="flex flex-col h-full w-[25rem] overflow-scroll font-mono">
            <Code id="start" tab={0} idx={1}>{"{"}</Code>
            {Object.keys(topology).map((item, idx) => {
                return (
                    <Code id={`cde-${idx}`} tab={8} idx={idx + 2}>
                        {item}: 
                        {
                            Array.isArray(topology[item]) && topology[item].length != 0
                            ? <ListCode 
                                id={`cde-${idx}`}
                                prevIndex={idx + 2}
                                array={topology[item]}
                                tab={8}
                            />
                            : topology[item]
                        }
                    </Code>
                )
            })}
            <Code id="end" tab={0} idx={0}>{"}"}</Code>
        </div>
    )
}