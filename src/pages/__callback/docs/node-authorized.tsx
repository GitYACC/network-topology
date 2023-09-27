import { useState } from "react"
import { Icon } from "../../__fragment/_svg"
import { signOut } from "next-auth/react"
import { Code } from "../../__fragment/code"
import { Table } from "../../__fragment/table"
import { Popover } from "../../__fragment/popover"

export default function Home() {
    const [systemTheme, setSystemTheme] = useState(false)

    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-100">
            <div className="flex flex-col divide-y h-full w-full">
                <div className="relative flex gap-4 items-center px-4 h-[8%]">
                    <div className={`flex gap-2 text-lg ${systemTheme ? "bg-gray-900 text-white" : "bg-gray-100"} rounded-lg`}>
                        <Icon 
                            fill={systemTheme ? "black" : "white"}
                            stroke={systemTheme ? "white" : "black"}
                        />
                        <span className="font-bold mr-1">Network Topology Viewer</span>
                    </div>
                    <div className="flex absolute right-5 gap-10">
                        <a href="/docs" className="flex gap-3 items-center group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:drop-shadow-lg group-hover:stroke-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                            <div className="group-hover:text-blue-700">Docs</div>
                        </a>
                        <a href="/" className="flex gap-3 items-center group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:drop-shadow-lg group-hover:stroke-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <div className="group-hover:text-blue-700">Home</div>
                        </a>
                        <button 
                            className="px-4 py-2 bg-red-500 rounded-lg text-white text-sm"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="h-[92%] flex divide-x">
                    <div className="w-[250px] flex flex-col p-6 gap-4 pt-5">
                        <a href="/docs/data" className="flex items-center gap-8 group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:drop-shadow-lg group-hover:stroke-blue-700 group-hover:translate-y-[-0.5px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="group-hover:text-blue-700">Topology Data</div>
                                <code className="text-blue-500 text-xs">/api/data</code>
                            </div>
                        </a>
                        <a className="flex items-center gap-8 group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 drop-shadow-lg stroke-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="text-blue-700">Fetching Nodes</div>
                                <code className="text-blue-500 text-xs">/api/node</code>
                            </div>
                        </a>
                        <a href="/docs/links" className="flex items-center gap-8 group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:drop-shadow-lg group-hover:stroke-blue-700 group-hover:translate-y-[-0.5px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="group-hover:text-blue-700">Fetching Links</div>
                                <code className="text-blue-500 text-xs">/api/link</code>
                            </div>
                        </a>
                    </div>
                    <div className="w-2/3 pt-5 p-6 flex flex-col gap-8 overflow-scroll">
                        <div className="api-box flex-col gap-4">
                            <span id="types" className="text-3xl font-medium">Types</span>
                            <span id="Node" className="text-xl font-medium">Node Object</span>
                            <Code fileName="...">
                                <code>{'{'}</code>
                                <code className="flex">
                                    <span className="tab-1 py-string">id</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other links" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">device</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code>
                                    <span className="tab-1 py-string">label</span>
                                    <span>:</span>
                                    <span className="py-keyword after:content-['']">string</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                            <span id="Link" className="text-xl font-medium">Link Object</span>
                            <Code fileName="...">
                                <code>{'{'}</code>
                                <code className="flex">
                                    <span className="tab-1 py-string">source</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other links" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">target</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other links" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code>
                                    <span className="tab-1 py-string">type</span>
                                    <span>:</span>
                                    <span className="py-keyword after:content-['']">(</span>
                                    <span className="py-string">one-way</span>
                                    <span className="py-keyword">|</span>
                                    <span className="py-string">two-way</span>
                                    <span className="py-keyword before:content-['']">)</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                        </div>
                        <div className="api-box flex-col gap-4">
                            <span id="get" className="text-3xl font-medium text-green-500">GET</span>
                            <span className="text-xl font-medium">Headers</span>
                            <Table headings={["Header", "Type", "Description"]}>
                                <Table.Row>
                                    <Table.Item>id</Table.Item>
                                    <Table.Item className="text-purple-500">UniqueString</Table.Item>
                                    <Table.Item className="text-gray-600">Allows selection of a single node object in the network</Table.Item>
                                </Table.Row>
                            </Table>
                            <span className="text-xl font-medium">Response</span>
                            <Code fileName="response">
                                <code>{'{'}</code>
                                <code className="flex">
                                    <span className="tab-1 py-string">id</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other links" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">device</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code>
                                    <span className="tab-1 py-string">label</span>
                                    <span>:</span>
                                    <span className="py-keyword after:content-['']">string</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                        </div>
                        <div className="api-box flex-col gap-4">
                            <span id="post" className="text-3xl font-medium text-green-500">POST</span>
                            <span className="text-xl font-medium">Request Body</span>
                            <Code fileName="request">
                                <code>{'{'}</code>
                                <code className="flex">
                                    <span className="tab-1 py-string">id</span>
                                    <span>: </span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>?,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">device</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">label</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">string</span>
                                    <span>?,</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                            <span className="text-xl font-medium">Response</span>
                            <Code fileName="response">
                                <code>{'{'}</code>
                                <code className="flex">
                                    <span className="tab-1 py-string">id</span>
                                    <span>: (</span>
                                    <span className="py-keyword flex before:content-['']">
                                        <Popover message="Default randomized ID" className="bg-blue-500">
                                            RandomID
                                        </Popover>
                                    </span>
                                    <span>|</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>),</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">device</span>
                                    <span>:</span>
                                    <span className="py-keyword flex after:content-['']">
                                        <Popover message="String needs to differ from other nodes" className="bg-blue-500">
                                            UniqueString
                                        </Popover>
                                    </span>
                                    <span>,</span>
                                </code>
                                <code className="flex">
                                    <span className="tab-1 py-string">label</span>
                                    <span>:</span>
                                    <span className="py-keyword after:content-['']">(</span>
                                    <span className="py-string">Unnamed</span>
                                    <span className="py-keyword after:content-['']">| string</span>
                                    <span>)</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                        </div>
                        <div className="api-box flex-col gap-4 border-red-500 border-2">
                            <div className="flex gap-4 items-baseline">
                                <span id="delete" className="text-3xl font-medium text-red-500">DELETE</span>
                                <Popover className="bg-red-500" message="This action cannot be undone">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </Popover>
                            </div>
                            <span className="text-xl font-medium">Headers</span>
                            <Table headings={["Header", "Type", "Description"]}>
                                <Table.Row>
                                    <Table.Item>id</Table.Item>
                                    <Table.Item className="text-purple-500">UniqueString</Table.Item>
                                    <Table.Item className="text-gray-600">Allows deletion of a single node object in the network</Table.Item>
                                </Table.Row>
                            </Table>
                            <span className="text-xl font-medium">Response</span>
                            <Code fileName="response">
                                <code>{'{'}</code>
                                <code>
                                    <span className="tab-1 py-string">nodes</span>
                                    <span>: [</span>
                                    <a href="#Node" className="py-keyword after:content-[''] before:content-[''] hover:underline">Node</a>
                                    <span>],</span>
                                </code>
                                <code>
                                    <span className="tab-1 py-string">links</span>
                                    <span>: [</span>
                                    <a href="#Link" className="py-keyword after:content-[''] before:content-[''] hover:underline">Link</a>
                                    <span>]</span>
                                </code>
                                <code>{'}'}</code>
                            </Code>
                        </div>
                    </div>
                    <div className="w-1/6 pt-5 p-6 flex flex-col gap-4">
                        <span className="font-bold">Request Method</span>
                        <div className="flex gap-8 item">
                            <div className="w-[1px] h-auto bg-slate-300"></div>
                            <div className="flex flex-col gap-2">
                                <a href="#types"className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">Types</span>
                                </a>
                                <a href="#get"className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">GET</span>
                                </a>
                                <a href="#post" className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">POST</span>
                                </a>
                                <a href="#delete" className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">DELETE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}