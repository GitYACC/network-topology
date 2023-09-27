import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export interface TopologyJSON {
    nodes: Device[],
    links: Link[]
}

export interface Device {
    id: string,
    device: string,
    label: string
}

export interface Link {
    source: string,
    target: string | string[],
    type: ("one-way" | "two-way")[]
}

export class Method {
    type: string
    callback: (
        req: NextApiRequest,
        res: NextApiResponse
    ) => Promise<void> | void

    constructor(
        type: string, 
        callback: (
            req: NextApiRequest, 
            res: NextApiResponse
        ) => Promise<void> | void
    ) {
        this.type = type
        this.callback = callback
    }
}

export class ApiExecutor {
    methods: Method[]

    constructor(...methods: Method[]) {
        this.methods = methods
    }

    async execute(
        req: NextApiRequest, 
        res: NextApiResponse, 
        error = {error: "unsupported method"}
    ) {
        for(let method of this.methods) {
            if(method.type == req.method) {
                await method.callback(req, res)
                return
            }
        }

        res.status(400).json(error)
    }
}