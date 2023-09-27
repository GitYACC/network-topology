import { ReactNode, useCallback, useEffect, useState } from "react"
import { TopologyJSON, Device, Link } from "../api/_apiMethodHandler"
import { Code } from "./code"

interface JSONCodeProps {
    obj: string
}

export default function JSONCode(props: JSONCodeProps) {
    const obj = JSON.parse(props.obj)

    return (
        <>
            {Object.keys(obj).map(value => (
                <>
                <code>
                    <span className="tab-1 py-string">{value}</span>
                    <span>: [</span>
                    <span>{obj[value].length == 0 ? "]," : ""}</span>
                </code>
                {obj[value].length != 0 
                    ? <JSONList obj={obj[value]}/> 
                    : null
                }
                <code>
                    <span className="tab-1">{obj[value].length != 0 ? "]," : ""}</span>
                </code>
                </>
            ))}
        </>
    )
}

interface JSONListProps {
    obj: Link[] | Device[]
}

function JSONList(props: JSONListProps) {
    return props.obj.map((item) => <>
            <code>
                <span className="tab-2">{'{'}</span>
            </code>
            <JSONObject obj={item}/>
            <code>
                <span className="tab-2">{'}'}{props.obj.length > 1 ? "," : ""}</span>
            </code>
        </>)
}

interface JSONObjectProps {
    obj: object
}

function JSONObject(props: JSONObjectProps) {
    return (
        <>
            {Object.keys(props.obj).map((key) => 
            <code>
                <span className="tab-3 py-string">{key}</span>
                <span>: </span>
                <span className="py-string">{props.obj[key]}</span>
                <span>,</span>
            </code>
            )}
        </>
    )
}