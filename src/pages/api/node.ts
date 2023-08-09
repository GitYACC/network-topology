import type { NextApiRequest, NextApiResponse } from 'next'
import { Device, Method, ApiExecutor } from "./_apiMethodHandler"
import { getData, setData } from './data'



// POST
async function POST(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(req.body.device === undefined) {
        res.status(400).json({error: "request body attribute 'device' required"})
        return
    }

    let id = req.body.id === undefined ? Date.now() : req.body.id
    let label = req.body.label === undefined ? "Unnamed" : req.body.label

    posts.nodes.push({
        id: id as string,
        device: req.body.device as string,
        label: label as string
    })

    await setData(posts)

    var posts = await getData()
    //res.status(200).json({nodes: posts.nodes})
    res.status(200).json(posts)
}


// GET
async function GET(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(req.query.id !== undefined) {
        for(let item of posts.nodes) {
            if(item.id == req.query.id as string) {
                res.status(200).json({nodes: item})
                return
            }
        }

        res.status(500).json({error: "invalid device id"})
    } else {
        res.status(200).json({nodes: posts.nodes})
    }
}


// DELETE
async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(Object.keys(req.query).length == 0) {
        posts.nodes = []
        await setData(posts)

        var posts = await getData()
        res.status(200).json(posts)
        return
    }

    var toRemove: Device | undefined = undefined
    for(let item of posts.nodes) {
        if(item.id == req.query.id) {
            toRemove = item
            break
        }
    }

    if(toRemove === undefined) {
        res.status(500).json({"error": "invalid device id"})
    }

    let index = posts.nodes.indexOf(toRemove!)
    if(index > -1) {
        posts.nodes.splice(index, 1)
    }

    await setData(posts)

    var posts = await getData()
    res.status(200).json({nodes: posts.nodes})
}



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    var methods = [
        new Method("POST", POST),
        new Method("GET", GET),
        new Method("DELETE", DELETE)
    ]

    new ApiExecutor(...methods).execute(req, res)
}