import type { NextApiRequest, NextApiResponse } from 'next'
import { TopologyJSON, Link, Method, ApiExecutor } from './_apiMethodHandler'
import { getData, setData } from './data'



// GET
async function GET(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(req.query.source === undefined) {
        res.status(200).json({links: posts.links})
    } else {
        for(let link of posts.links) {
            if(link.source == req.query.source) {
                res.status(200).json({links: link})
                return
            }
        }

        res.status(400).json({error: "invalid source"})
    }
}


// POST
async function POST(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(Object.keys(req.body).length == 0) {
        res.status(400).json({error: "request body attributes 'source' and 'target' are required"})
        return
    }
    
    posts.links.push({
        source: (req.body as Link).source,
        target: (req.body as Link).target,
        type: (req.body as Link).type
    })

    await setData(posts)

    var posts = await getData()
    //res.status(200).json({links: posts.links})
    res.status(200).json(posts)
}


// DELETE
async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()
    if(Object.keys(req.query).length == 0) {
        posts.links = []

        await setData(posts)

        var posts = await getData()
        res.status(200).json(posts)
        return
    }

    var toRemove: Link | undefined = undefined
    for(let link of posts.links) {
        if(req.query.source == link.source && req.query.target == link.target) {
            toRemove = link
            break
        }
    }

    if(toRemove === undefined) {
        res.status(400).json({error: "invalid link source and/or target"})
        return
    }

    let index = posts.links.indexOf(toRemove!)
    if(index > -1) {
        posts.links.splice(index, 1)
    }

    await setData(posts)

    var posts = await getData()
    res.status(200).json({links: posts.links})
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    var methods = [
        new Method("GET", GET),
        new Method("POST", POST),
        new Method("DELETE", DELETE)
    ]

    new ApiExecutor(...methods).execute(req, res)
}