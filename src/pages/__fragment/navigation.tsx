import { Switch } from '@headlessui/react'
import { Icon, Moon, Sun, ThreeDBox } from "./_svg"
import { Dispatch, SetStateAction } from 'react'

interface NavProps { 
    systemTheme: boolean, 
    setSystemTheme: Dispatch<SetStateAction<boolean>>,
    signOut: () => void
}
export default function Navigation(props: NavProps) {
    return (
        <nav className="flex relative top-0">
                <a className={`flex gap-2 text-lg ${props.systemTheme ? "bg-gray-900 text-white" : "bg-gray-100"} m-5 ml-10 p-2 px-3 rounded-lg cursor-pointer`}>
                    <Icon 
                        fill={props.systemTheme ? "black" : "white"}
                        stroke={props.systemTheme ? "white" : "black"}
                    />
                    <span className="font-bold mr-1">Network Topology Viewer</span>
                </a>
                <div className="absolute flex right-0">
                    <a 
                        href="/docs"
                        className={`group text-lg m-5 p-2 cursor-pointer ${props.systemTheme ? "hover:text-blue-700 text-white" : "hover:text-blue-700"} rounded-lg`}
                    >
                        <span 
                            className="flex relative gap-2 pr-1"
                        >
                            <div className="mt-1">
                                <ThreeDBox 
                                    fillClassName="group-hover:fill-blue-700"
                                    fill={props.systemTheme ? "white" : "black"}
                                    strokeClassName="group-hover:stroke-blue-700"
                                    stroke={props.systemTheme ? "white" : "black"}
                                />
                            </div>
                            API Documentation
                        </span>
                    </a>
                    <Switch
                        checked={props.systemTheme}
                        onChange={props.setSystemTheme}
                        className={`relative flex w-16 h-9 p-1 rounded-3xl ${props.systemTheme ? "bg-gray-900" : "bg-gray-100"} m-6 pl-1`}
                    >
                        {({checked}) => (
                            <span 
                                className={`absolute ${checked ? "translate-x-7" : "translate-x-0"} p-1 transform rounded-full transition`}
                            >
                                {
                                    props.systemTheme 
                                    ? <Moon /> 
                                    : <Sun />
                                }
                            </span>
                        )}
                    </Switch>
                    <div className={`border-l-[1px] ${props.systemTheme ? 'border-gray-900' : 'border-gray-200'}`}>
                        <button 
                            onClick={() => props.signOut()}
                            className={`text-lg m-5 ml-9 mr-9 p-2 rounded-lg font-semibold ${props.systemTheme ?  "text-white hover:text-blue-700" : "hover:text-blue-700"}`}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>
    )
}