import { Combobox, Listbox, Transition } from "@headlessui/react"
import { useState, Fragment, useCallback, useEffect } from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Plus } from "./_svg"


function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addDevice(item: string) {
    if(item.length != 0) {
        let isIn: boolean = false
        for(let obj of devices) {
            if(item.toLowerCase() == capitalize(obj.name)) {
                isIn = true
            }
        }

        if(!isIn) {
            devices.push({id: devices.length + 1, name: capitalize(item.toLowerCase())})
        }
    }
}

function has(query: string) {
    let isIn: boolean = false
    devices.forEach((item) => {
        if(item.name == query) {
            isIn = true
            return
        }
    })

    return isIn
}

async function nodeCallbackPOST(device: string) {
    const nodeFormLabel: HTMLTextAreaElement = document.querySelector("#node-form #label")!
    const nodeFormID: HTMLTextAreaElement = document.querySelector("#node-form #id")!

    await fetch(
        "http://localhost:3000/api/node",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                device: device,
                id: nodeFormID.value.length != 0 ? nodeFormID.value : undefined,
                label: nodeFormLabel.value.length != 0 ? nodeFormLabel.value : undefined
            })
        }
    )
}

async function nodeCallbackDELETE() {
    const nodeFormID: HTMLTextAreaElement = document.querySelector("#node-form #id")!

    if(nodeFormID.value.length == 0) {
        // error
        return
    }

    const resp: Response = await fetch(
        `http://localhost:3000/api/node?id=${nodeFormID.value}`,
        {
            method: "DELETE"
        }
    )
}

async function linkCallbackPOST(type: string) {
    const linkFormSource: HTMLTextAreaElement = document.querySelector("#link-form #source")!
    const linkFormTarget: HTMLTextAreaElement = document.querySelector("#link-form #target")!

    await fetch(
        "http://localhost:3000/api/link",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                source: linkFormSource.value,
                target: linkFormTarget.value,
                type: type
            })
        }
    )
}

async function linkCallbackDELETE() {
    const linkFormSource: HTMLTextAreaElement = document.querySelector("#link-form #source")!
    const linkFormTarget: HTMLTextAreaElement = document.querySelector("#link-form #target")!

    await fetch(
        `http://localhost:3000/api/link?source=${linkFormSource.value}&target=${linkFormTarget.value}`,
        {
            method: "DELETE",
        }
    )
}


interface Callback {caller: () => void}
const devices: {id: number, name: string}[] = []
export function NodeForm({ caller }: Callback) {
    const [selectedDevice, setSelectedDevice] = useState(devices[0])
    const [query, setQuery] = useState('')
  
    const filteredDevice =
      capitalize(query.toLowerCase()) === ''
        ? devices
        : devices.filter((devices) => 
            devices.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (
        <form id="node-form">
            <div className="flex flex-col m-8 border-[1.5px] rounded-lg shadow-lg">
                <h1 className="text-xl text-gray-700 font-medium text-center m-3 mb-6">Nodes</h1>
                <div className="flex flex-col mx-6 border-[1.5px] rounded-lg divide-y mb-10">
                    <input className="p-2 rounded-t-lg !outline-none" id="label" placeholder="Label"></input>
                    <div className="flex divide-x">
                        <input className="p-2 rounded-bl-lg w-1/3 !outline-none" id="id" placeholder="ID"></input>
                        <Combobox as="div" className="relative w-full py-2 pl-3 flex rounded-br-lg" id="device" value={selectedDevice} onChange={setSelectedDevice}>
                            <Combobox.Input 
                                className="w-full !outline-none"
                                onChange={(event) => setQuery(event.target.value)} 
                            />
                            <Combobox.Button className="mr-3">
                                <ChevronUpDownIcon className="w-5"></ChevronUpDownIcon>
                            </Combobox.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-in duration-100"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Combobox.Options id="nodes-devices-options" className="absolute w-[14rem] flex flex-col left-0 top-0 mt-[2.75rem] py-1 rounded-lg border-[1px] shadow-lg bg-white">
                                    {query.length > 0 && !has(capitalize(query)) && (
                                        <Combobox.Option 
                                            onClick={(e) => addDevice(query)}
                                            value={{id: devices.length + 1, name: capitalize(query.toLowerCase())}}
                                            className='flex gap-3 p-2 text-sm opacity-50 hover:cursor-pointer'
                                        >
                                            <CheckIcon className="w-4 invisible" />
                                            <span className="left-0 mr-4">Create New Device</span>
                                            <Plus />
                                        </Combobox.Option>
                                    )}
                                    {filteredDevice.map((device) => (
                                        <Combobox.Option 
                                            className="flex gap-3 p-2 hover:cursor-pointer hover:bg-blue-700 hover:text-white text-sm"
                                            key={device.id} 
                                            value={device.name}
                                        >
                                            {({selected, active}) => (
                                                <>
                                                    {selected ? <CheckIcon className="w-4" /> : <CheckIcon className="w-4 invisible" />}
                                                    {device.name}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))}
                                    {filteredDevice.length == 0 && query.length == 0 && (
                                        <Combobox.Option disabled className="flex gap-3 p-2 text-sm opacity-50">
                                            <CheckIcon className="w-4 invisible" />
                                            Nothing Found...
                                        </Combobox.Option>
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </Combobox>
                    </div>
                </div>
                <div className="flex">
                    <button 
                        type="button" 
                        className="p-3 w-full border-[1px] mt-8 mb-4 rounded-lg mx-6 hover:bg-blue-700 hover:text-white"
                        onClick={(e) => {
                            nodeCallbackPOST(selectedDevice)
                            caller()
                            caller()
                            caller()
                            caller()
                        }}
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        className="p-3 w-full border-[1px] mt-8 mb-4 rounded-lg mx-6 hover:bg-red-600 hover:text-white"
                        onClick={(e) => {
                            nodeCallbackDELETE()
                            caller()
                            caller()
                            caller()
                            caller()
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </form>
    )
}


const types = ["One Way", "Two Way"]
export function LinkForm({ caller }: Callback) {
    const [selectedType, setSelectedType] = useState(types[0])

    return (
        <form id="link-form">
            <div className="flex flex-col m-8 border-[1.5px] w-[18rem] rounded-lg shadow-lg">
                <h1 className="text-xl text-gray-700 font-medium text-center m-3 mb-6">Links</h1>
                <div className="flex flex-col mx-6 border-[1.5px] rounded-lg divide-y">
                    <input className="p-2 rounded-t-lg !outline-none" id="source" placeholder="Source"></input>
                    <input className="p-2 rounded-bl-lg !outline-none" id="target" placeholder="Target"></input>
                    <Listbox as="div" className="relative p-2 rounded-br-lg" id="device" value={selectedType} onChange={setSelectedType}>
                        <Listbox.Button className="relative flex w-full right-0 mr-3 items-center">
                            {selectedType}
                            <ChevronUpDownIcon className="absolute w-5 right-1"></ChevronUpDownIcon>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-in duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options id="nodes-devices-options" className="absolute w-[14rem] flex flex-col left-0 top-0 mt-[2.75rem] py-1 rounded-lg border-[1px] shadow-lg bg-white">
                                <Listbox.Option 
                                    className="flex flex-row gap-3 p-2 hover:cursor-pointer hover:bg-blue-700 hover:text-white text-sm"
                                    key={1} 
                                    value={"One Way"}
                                >
                                    {({selected, active}) => (
                                        <>
                                            {selected ? <CheckIcon className="w-4" /> : <CheckIcon className="w-4 invisible" />}
                                            One Way
                                        </>
                                    )}
                                </Listbox.Option>
                                <Listbox.Option 
                                    className="flex flex-row gap-3 p-2 hover:cursor-pointer hover:bg-blue-700 hover:text-white text-sm"
                                    key={2} 
                                    value={"Two Way"}
                                >
                                    {({selected, active}) => (
                                        <>
                                            {selected ? <CheckIcon className="w-4" /> : <CheckIcon className="w-4 invisible" />}
                                            Two Way
                                        </>
                                    )}
                                </Listbox.Option>
                            </Listbox.Options>
                        </Transition>
                    </Listbox>
                </div>
                <div className="flex">
                    <button 
                        type="button" 
                        className="p-3 w-full border-[1px] mt-8 mb-4 rounded-lg mx-6 hover:bg-blue-700 hover:text-white"
                        onClick={(e) => {
                            linkCallbackPOST(selectedType == "One Way" ? "one-way" : "two-way")
                            caller()
                            caller()
                            caller()
                            caller()
                        }}
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        className="p-3 w-full border-[1px] mt-8 mb-4 rounded-lg mx-6 hover:bg-red-600 hover:text-white"
                        onClick={(e) => {
                            linkCallbackDELETE()
                            caller()
                            caller()
                            caller()
                            caller()
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </form>
    )
}