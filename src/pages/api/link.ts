import type { NextApiRequest, NextApiResponse } from 'next'
import { TopologyJSON, Link, Method, ApiExecutor } from './_apiMethodHandler'
import { getData, setData } from './data'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'



// GET
async function GET(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()
    if(req.query.target === undefined || req.query.source === undefined) {
        res.status(400).json({error: "source & target parameter required"})
        return
    }

    for(let link of posts.links) {
        if(link.source == req.query.source && link.target == req.query.target) {
            res.status(200).json(link)
            return
        }
    }

        res.status(400).json({error: "invalid source & target"})
}


// POST
async function POST(req: NextApiRequest, res: NextApiResponse) {
    var posts = await getData()

    if(Object.keys(req.body).length == 0) {
        res.status(400).json({error: "source & target parameters required"})
        return
    }
    
    let link = {
        source: (req.body as Link).source,
        target: (req.body as Link).target,
        type: (req.body as Link).type
    }

    posts.links.push(link)
    await setData(posts)
    res.status(200).json(link)
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
    const session = await getServerSession(req, res, authOptions)
    
    var methods = [
        new Method("GET", GET),
        new Method("POST", POST),
        new Method("DELETE", DELETE)
    ]

    if(session || req.headers.authorization == "Bearer admin") {
        new ApiExecutor(...methods).execute(req, res)
    } else {
        res.send({error: "invalid session"})
    }
}