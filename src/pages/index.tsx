import { useState, Fragment, useEffect, useCallback } from "react"
import { Graph, JSONIcon } from './[fragment]/_svg'
import Navigation from "./[fragment]/navigation"
import { NodeForm, LinkForm } from "./[fragment]/forms"
import { 
    Transition, 
    Tab, 
    Menu 
} from "@headlessui/react"
import { getData } from "./api/data"
import JSONCode from "./[fragment]/json"


export default function Home() {
    const [systemTheme, setSystemTheme] = useState(false)
    const [json, setJson] = useState('{}')

    const reload = useCallback(async () => {
        setJson(JSON.stringify(await getData()))
    }, [json])

    reload()

    return (
        <div className={`flex flex-col relative h-full divide-y ${systemTheme ? "bg-black divide-gray-900" : "text-black bg-white divide-gray-200"}`}>
            <title>Network Topology Viewer</title>
            <Navigation systemTheme={systemTheme} setSystemTheme={setSystemTheme}></Navigation>
            <div className="flex h-full">
                <Tab.Group>
                    <div className={`w-[30rem] h-full border-r-[1px] ${systemTheme ? "border-gray-900" : ""}`}>
                        <Tab.List className="flex flex-col gap-1 m-10">
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <div className={`flex gap-5 ${selected ? (systemTheme ? "bg-gray-900" : "bg-blue-700") : ""} p-3 rounded-xl font-medium hover:cursor-pointer`}>
                                        <div className="mt-[.2rem] ml-1"><Graph fill={systemTheme ? "#EEEEEE" : selected ? "white" : "black"} stroke=""/></div>
                                        <span className={selected || systemTheme ? "text-white" : ""}>Graph Viewer</span>
                                    </div>
                                )}
                                
                            </Tab>
                            <Tab as={Fragment}>
                                {({selected}) => (
                                    <div className={`flex gap-5 ${selected ? (systemTheme ? "bg-gray-900" : "bg-blue-700") : ""} p-3 rounded-xl font-medium hover:cursor-pointer`}>
                                        <div className="mt-[.2rem] ml-1"><JSONIcon fill={systemTheme ? "#EEEEEE" : selected ? "white" : "#333333"} stroke=""/></div>
                                        <span className={selected || systemTheme ? "text-white" : ""}>JSON Editor</span>
                                    </div>
                                )}
                            </Tab>
                        </Tab.List>
                    </div>
                    <div className={`relative w-full h-full bg-white`}>
                        <Tab.Panels>
                            <Tab.Panel className={`absolute h-full w-full ${systemTheme ? "bg-gray-900" : "bg-white"}`}>
                                HI!!
                            </Tab.Panel>
                            <Tab.Panel className={`flex absolute h-full w-full`}>
                                <div className="flex flex-col w-full">
                                    <NodeForm caller={reload}></NodeForm>
                                </div>
                                <div className="flex flex-col w-full">
                                    <LinkForm caller={reload}></LinkForm>
                                </div>
                                <div className="flex flex-col w-full">
                                    {json}
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}
