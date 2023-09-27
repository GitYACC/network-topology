import { useState, Fragment, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function project(
    idx: number, 
    name: string, 
    user: string,
    url: string,
    contact: string,
    date: Date
) {
    return {
        index: idx,
        name: name,
        username: user,
        url: url,
        contact: contact,
        date: date
    }
}

const test = [
    project(1, "Network Topology", "yacc1", "https://nettop.com", "925-719-5667", new Date()),
    project(2, "VSCode", "yacc1", "https://vscode.com", "931-719-5847", new Date()),
    project(3, "Bingo Board", "yacc1", "https://vercel/bingo-board", "925-739-2687", new Date()),
    project(4, "Minecraft Drugs Mod", "yacc1", "https://curseforge/mcdrugs", "915-799-0697", new Date()),
    project(5, "Cisco Systems", "yacc1", "https://cisco.com", "512-729-5697", new Date()),
    project(6, "Company Idea", "yacc1", "https://localhost:3000", "535-719-5007", new Date()),
    project(7, "Company 7", "yacc1", "https://localhost:3000", "408-406-1538", new Date()),
    project(8, "Company 8", "yacc1", "https://localhost:3000", "510-719-5667", new Date()),
    project(9, "Company 9", "yacc1", "https://localhost:3000", "925-474-5667", new Date()),
    project(10, "Company 10", "yacc1", "https://localhost:3000", "925-719-5119", new Date()),
    project(11, "Future Lib", "yacc1", "https://pypi-test/futurelib", "362-719-5667", new Date()),
    project(12, "Samarium62", "yacc1", "https://pypi/samarium62", "925-719-1053", new Date())
]

export default function Command() {
    const [selectedItem, setSelectedItem] = useState(test[0])
    const [query, setQuery] = useState('')

    const [activeCommand, setActiveCommand] = useState(test[0])

    const filteredItems =
      query === ''
        ? test
        : test.filter((item) => 
            item.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    
    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-100">
            <Combobox as="div" className="flex flex-col divide-y bg-white rounded-2xl shadow-md" value={selectedItem} onChange={setSelectedItem}>
                <div className="flex flex-row w-[50rem] p-3 gap-3 bg-white items-center m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <Combobox.Input 
                        className="!outline-none w-full"
                        placeholder='Search...'
                        onChange={(event) => {
                            setQuery(event.target.value)
                            setActiveCommand(test[0])
                        }} 
                    />
                </div>
                {activeCommand != undefined ? (
                <div className='flex divide-x'>
                    <Combobox.Options static className="w-1/2 overflow-scroll h-[25rem] py-1 bg-white mt-2">
                        <>{query.length != 0 && filteredItems.length == 0 && setActiveCommand(undefined)}</>
                        {query.length == 0 ? (
                            test.map((item) => (
                                <Combobox.Option
                                    className="mx-4"
                                    key={item.index}
                                    value={item.name}
                                >
                                    {({selected, active}) => (
                                        <div className={`relative group flex gap-4 items-center ${activeCommand.index == item.index && "bg-gray-100"} hover:bg-gray-100 p-2 rounded-lg w-full`}>
                                            <>{active && setActiveCommand(item)}</>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                            </svg>
                                            <span className='text-sm text-slate-900'>{item.name}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-4 h-4 right-5 stroke-white ${activeCommand.index == item.index && "stroke-black"} group-hover:stroke-black`}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                        </div>
                                    )}
                                </Combobox.Option>
                            ))
                        ) : (
                            filteredItems.map((item) => (
                                <Combobox.Option
                                    className="mx-4"
                                    key={item.index}
                                    value={item.name}
                                >
                                    {({selected, active}) => (
                                        <div className={`relative group flex gap-4 items-center ${activeCommand.index == item.index && "bg-gray-100"} hover:bg-gray-100 p-2 rounded-lg w-full`}>
                                            <>{active && setActiveCommand(item)}</>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-gray-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                            </svg>
                                            <span className='text-sm text-slate-900'>{item.name}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-4 h-4 right-5 stroke-white ${activeCommand.index == item.index && "stroke-black"} group-hover:stroke-black`}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                        </div>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                    <div className='flex flex-col w-1/2 divide-y'>
                        <div className='flex flex-col h-1/2 justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lg font-bold">{activeCommand.name}</span>
                            <span className='text-sm text-gray-600 font-light'>{activeCommand.username}</span>
                        </div>
                        <div className='flex flex-col h-1/2 gap-2'>
                            <div className='flex'>
                                <div className='flex flex-col my-4 gap-2'>
                                    <span className='font-bold text-sm mx-10'>Contact</span>
                                    <span className='font-bold text-sm mx-10'>URL</span>
                                    <span className='font-bold text-sm mx-10'>Date Created</span>
                                </div>
                                <div className='flex flex-col my-4 gap-2'>
                                    <span className='font-light text-sm'>{activeCommand.contact}</span>
                                    <a href="#" className='font-light text-sm text-blue-500 underline'>{activeCommand.url}</a>
                                    <span className='font-light text-sm'>{activeCommand.date.getFullYear()}</span>
                                </div>
                            </div>
                            <button className='bg-blue-700 mx-10 p-2 text-white rounded-lg'>
                                Open Project
                            </button>
                        </div>
                    </div>
                </div>) : (
                    <Combobox.Options static className="flex w-full justify-center items-center h-[12rem]">
                        <Combobox.Option className={"flex flex-col gap-4 justify-center items-center"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <div className="flex flex-col gap-1 justify-center items-center">
                                <span className="font-bold">No project found</span>
                                <span className="text-gray-500">There is not a project with this name in the database</span>
                            </div>
                        </Combobox.Option>
                    </Combobox.Options>
                )}
            </Combobox>
        </div>
    )
}