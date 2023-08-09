import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { 
    ArchiveInactiveIcon, 
    ArchiveActiveIcon, 
    EditActiveIcon, 
    EditInactiveIcon ,
    DeleteInactiveIcon,
    DeleteActiveIcon,
    DuplicateActiveIcon,
    DuplicateInactiveIcon,
    MoveActiveIcon,
    MoveInactiveIcon
} from './t2t'

export default function Home() {
    return (
        <div className='h-full flex items-center justify-center'>
            <Menu as="div" className="relative">
            <Menu.Button className="flex items-center justify-center gap-1 bg-gray-500 py-2 px-3 rounded-[10px] text-white hover:bg-gray-600 focus:ring-2">
                More
                <ChevronDownIcon className='w-5' aria-hidden="true"></ChevronDownIcon>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute flex flex-col mt-2 w-[16rem] shadow-lg rounded-lg divide-y border-2">
                <div className="px-1 py-1 flex flex-col">
                <Menu.Item className="p-2">
                    {({ active }) => (
                        <a
                        className={`flex items-center ${active ? 'bg-blue-500 rounded-lg text-white' : 'text-grey-900'}`}
                        href="/dev/combobox"
                        >
                            <div className='flex items-center flex-row px-1 gap-[0.5rem]'>
                            {active ? <ArchiveActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                            /> : <ArchiveInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                            />
                            }
                                Combobox
                            </div>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item className="p-2">
                    {({ active }) => (
                        <a
                        className={`flex items-center ${active ? 'bg-blue-500 rounded-lg text-white' : 'text-grey-900'}`}
                        href="/dev/modal"
                        >
                            <div className='flex items-center flex-row px-1 gap-[0.5rem]'>
                            {active ? <DuplicateActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                            /> : <DuplicateInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                            />
                            }
                                Modal
                            </div>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item className="p-2">
                    {({ active }) => (
                        <a
                        className={`${active ? 'bg-blue-500 rounded-lg text-white' : 'text-grey-900'}`}
                        href="/dev/radio"
                        >
                            <div className='flex items-center flex-row px-1 gap-[0.5rem]'>
                                {active ? 
                                <EditActiveIcon 
                                    className="mr-2 w-5 h-5"
                                    aria-hidden="true"
                                /> : <EditInactiveIcon 
                                    className="mr-2 w-5 h-5"
                                    aria-hidden="true"
                                />}
                                Radio
                            </div>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item className="p-2">
                    {({ active }) => (
                        <a
                        className={`${active ? 'bg-blue-500 rounded-lg text-white' : 'text-grey-900'}`}
                        href="/dev/tab"
                        >
                            <div className='flex items-center flex-row px-1 gap-[0.5rem]'>
                                {active ? 
                                <MoveActiveIcon 
                                    className="mr-2 w-5 h-5"
                                    aria-hidden="true"
                                /> : <MoveInactiveIcon 
                                    className="mr-2 w-5 h-5"
                                    aria-hidden="true"
                                />}
                                Tab
                            </div>
                        </a>
                    )}
                </Menu.Item>
                </div>
                <div className="px-1 py-1 flex flex-col bg-[rgb(245,245,245)] rounded-br-lg rounded-bl-lg">
                <Menu.Item className="p-2">
                    {({active}) => (
                        <a 
                            className={`${active ? 'bg-red-500 rounded-lg text-white' : 'text-grey-900'}`}
                            href="#"
                        >
                            <div className='flex items-center flex-row px-1 gap-[0.5rem]'>
                            {active ? (
                                <DeleteActiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                                ) : (
                                <DeleteInactiveIcon
                                    className="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true"
                                />
                            )}
                                Delete
                            </div>
                        </a>
                    )}
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
        </div>
    )
}