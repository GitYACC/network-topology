import type { NextApiRequest, NextApiResponse } from 'next'
import { TopologyJSON, Device, Method, ApiExecutor } from "./_apiMethodHandler"
import fs from "fs"
import { cwd } from 'process'
import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from 'next-auth'


export async function getData(): Promise<TopologyJSON> {
    return await (await fetch(
        "http://localhost:3000/api/data", 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer admin`
            }
        }
    )).json() as TopologyJSON
}

export async function setData(posts: TopologyJSON) {
    return await fetch(
        "http://localhost:3000/api/data", 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer admin`
            },
            body: JSON.stringify({
                nodes: posts.nodes,
                links: posts.links
            })
        }
    )
}

export async function resetData(token: string) {

    return await fetch(
        "http://localhost:3000/api/data",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer admin`
            }
        }
    )
}

function POST(req: NextApiRequest, res: NextApiResponse) {
    if(Object.keys(req.body).length == 0) {
        res.status(400).json({error: "request body attributes 'nodes' and 'links' are required"})
    }

    let body = req.body as TopologyJSON
    var topObject = JSON.stringify({
        nodes: body.nodes,
        links: body.links
    })

    fs.writeFileSync(`${cwd()}/src/pages/db.json`, topObject)

    res.status(200).json(JSON.parse(topObject))
}

function GET(req: NextApiRequest, res: NextApiResponse) {
    var obj = JSON.parse(
        fs.readFileSync(
            `${cwd()}/src/pages/db.json`
        ).toString()
    )

    res.status(200).json(obj)
}

function DELETE(req: NextApiRequest, res: NextApiResponse) {
    fs.writeFileSync(
        `${cwd()}/src/pages/db.json`, 
        JSON.stringify({
            nodes: [],
            links: []
    }))

    res.status(200).json({nodes: [], links: []})
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

    var methods = [
        new Method("POST", POST),
        new Method("GET", GET),
        new Method("DELETE", DELETE)
    ]

    if(session || req.headers.authorization == "Bearer admin") {
        new ApiExecutor(...methods).execute(req, res)
    } else {
        res.send({error: "invalid session"})
    }
}
