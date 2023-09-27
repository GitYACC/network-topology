import { Dispatch, SetStateAction, useState } from "react"
import { Icon } from "../../__fragment/_svg"
import { signOut } from "next-auth/react"

export default function Home() {
    const [systemTheme, setSystemTheme] = useState(false)

    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-100">
            <div className="flex flex-col divide-y h-full w-full">
                <div className="relative flex items-center px-4 h-[8%]">
                    <div className={`flex gap-2 text-lg ${systemTheme ? "bg-gray-900 text-white" : "bg-gray-100"} rounded-lg`}>
                        <Icon 
                            fill={systemTheme ? "black" : "white"}
                            stroke={systemTheme ? "white" : "black"}
                        />
                        <span className="font-bold mr-1">Network Topology Viewer</span>
                    </div>
                    <a href="/" className="absolute right-[10rem] flex gap-3 items-center group hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:drop-shadow-lg group-hover:stroke-blue-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <div className="group-hover:text-blue-700">Home</div>
                    </a>
                    <button 
                        className="absolute right-5 px-4 py-2 bg-red-500 rounded-lg text-white text-sm"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
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
                        <a href="/docs/nodes" className="flex items-center gap-8 group hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:drop-shadow-lg group-hover:stroke-blue-700 group-hover:translate-y-[-0.5px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="group-hover:text-blue-700">Fetching Nodes</div>
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
                            <span id="python" className="text-3xl font-medium">Python</span>
                            <p className="text-gray-800/75">To install the api into a python environment, you can copy the following command into your terminal</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="py-1 px-2 flex w-fit gap-4 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            <span>terminal</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8 overflow-x-scroll">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                    </div>
                                    <code>pip install nettop</code>
                                </div>
                            </div>
                            <p className="text-gray-800/75">After installation, you can insert it into your code as such to be able to make requests to the endpoint</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="flex gap-4 w-fit py-1 px-2 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            <span>./your_file.py</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <code>
                                            <span className="py-keyword before:content-['']">import</span>
                                            <span>nettop</span>
                                            <span className="py-keyword">as</span>
                                            <span>nt</span>
                                        </code>
                                        <code className="code-empty">.</code>
                                        <code>
                                            <span>variable = nt</span>
                                            <span className="py-method">GET</span>
                                            <span>client_secret)</span>
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="api-box flex-col gap-4">
                            <span id="javascript" className="text-3xl font-medium">Javascript</span>
                            <p className="text-gray-800/75">To install the api into a nodejs environment, you can copy the following command into your terminal</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="py-1 px-2 flex w-fit gap-4 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            <span>terminal</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                    </div>
                                    <code>npm install nettop</code>
                                </div>
                            </div>
                            <p className="text-gray-800/75">After installation, you can insert it into your code as such to be able to make requests to the endpoint</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="flex gap-4 w-fit py-1 px-2 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            <span>./your_file.js</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <code>
                                            <span className="py-keyword before:content-['']">import</span>
                                            <span>{'{ Nettop }'}</span>
                                            <span className="py-keyword">from</span>
                                            <span className="py-string">nettop</span>
                                        </code>
                                        <code className="code-empty">.</code>
                                        <code>
                                            <span className="py-keyword before:content-['']">const</span>
                                            <span>variable = Nettop</span>
                                            <span className="py-method">GET</span>
                                            <span>{'{secret: client_secret})'}</span>
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="api-box flex-col gap-4">
                            <span id="typescript" className="text-3xl font-medium">Typescript</span>
                            <p className="text-gray-800/75">To install the api into a nodejs environment, you can copy the following command into your terminal</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="py-1 px-2 flex w-fit gap-4 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            <span>terminal</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                    </div>
                                    <code>npm install nettop</code>
                                </div>
                            </div>
                            <p className="text-gray-800/75">After installation, you can insert it into your code as such to be able to make requests to the endpoint</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="flex gap-4 w-fit py-1 px-2 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            <span>./your_file.ts</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <code>
                                            <span className="py-keyword before:content-['']">import</span>
                                            <span>{'{ Nettop, Topology }'}</span>
                                            <span className="py-keyword">from</span>
                                            <span className="py-string">nettop</span>
                                        </code>
                                        <code className="code-empty">.</code>
                                        <code>
                                            <span className="py-keyword before:content-['']">const</span>
                                            <span>variable:</span>
                                            <span className="py-keyword">Topology</span>
                                            <span>= Nettop</span>
                                            <span className="py-method">GET</span>
                                            <span>{'{secret: client_secret})'}</span>
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="api-box flex-col gap-4">
                            <span id="java" className="text-3xl font-medium">Java</span>
                            <p className="text-gray-800/75">To install the api into a java environment, you can copy the following command into your terminal</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="py-1 px-2 flex w-fit gap-4 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                            <span>terminal</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                    </div>
                                    <code>javac -i nettop</code>
                                </div>
                            </div>
                            <p className="text-gray-800/75">After installation, you can insert it into your code as such to be able to make requests to the endpoint</p>
                            <div className="flex flex-col divide-y border-[1.25px] rounded-lg">
                                <div className="relative flex items-center">
                                    <span className="py-2 px-4 bg-gray-200/50 w-full">
                                        <span className="flex gap-4 w-fit py-1 px-2 border-[0.5px] border-gray-400 rounded-lg items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            <span>./your_file.java</span>
                                        </span>
                                    </span>
                                    <button className="absolute right-2 py-1 px-2 border-[1px] border-gray-400  rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                    
                                </div>
                                <div className="text-gray-600 py-4 px-8 flex gap-8">
                                    <div className="flex flex-col gap-1 h-auto text-gray-500/50">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <code>
                                            <span className="py-keyword before:content-['']">import</span>
                                            <span>com.nettop.Topology;</span>
                                        </code>
                                        <code>
                                            <span className="py-keyword before:content-['']">import</span>
                                            <span>com.nettop.NetworkResult;</span>
                                        </code>
                                        <code className="code-empty">.</code>
                                        <code>
                                            <span className="py-keyword before:content-['']">class</span>
                                            <span>NetworkTopology {'{'}</span>
                                        </code>
                                        <code>
                                            <span className="py-keyword tab-1 before:content-['']">public static void main</span>
                                            <span>(String[] args) {'{'}</span>
                                        </code>
                                        <code>
                                            <span className="py-keyword tab-2 before:content-['']">Topology</span>
                                            <span>variable =</span>
                                            <span className="py-keyword">new</span>
                                            <span>Topology(client_secret);</span>
                                        </code>
                                        <code>
                                            <span className="py-keyword tab-2 before:content-['']">NetworkResult</span>
                                            <span>result = variable</span>
                                            <span className="py-method">GET</span>
                                            <span>);</span>
                                        </code>
                                        <code>
                                            <span className="tab-1">{'}'}</span>
                                        </code>
                                        <code>
                                            <span>{'}'}</span>
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6 pt-5 p-6 flex flex-col gap-4">
                        <span className="font-bold">Languages</span>
                        <div className="flex gap-8 item">
                            <div className="w-[1px] h-auto bg-slate-300"></div>
                            <div className="flex flex-col gap-2">
                                <a href="#python"className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">Python</span>
                                </a>
                                <a href="#javascript" className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">Javascript</span>
                                </a>
                                <a href="#typescript" className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">Typescript</span>
                                </a>
                                <a href="#java" className="group relative hover:cursor-pointer">
                                    <div className="absolute invisible translate-x-[-33px] w-[1px] h-full bg-black group-hover:visible"></div>
                                    <span className="text-slate-600 group-hover:text-black">Java</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}