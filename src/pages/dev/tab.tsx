import { Tab } from '@headlessui/react'

export default function MyTabs() {
    var TABS = [
        {
            id: 1,
            name: "Tab 1"
        },
        {
            id: 2,
            name: "Tab 2"
        },
        {
            id: 3,
            name: "Tab 3"
        }
    ]


    return (
        <div className='h-full flex items-center justify-center'>
            <Tab.Group as="div" className="flex flex-col">
            <Tab.List className="w-[20rem] flex space-x-1 bg-gray-100 p-1 rounded-xl border-[1px]">
                {TABS.map((post, idx) => (
                    <Tab 
                        key={idx}
                        className=
                        {({selected}) => `
                            w-full py-2.5 rounded-lg px-8 text-sm focus:outline-none
                            ${selected ? 'bg-gray-500 text-white' : ''}
                        `}
                    >
                        {post.name}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel className="bg-red-900 top-0 left-0 absolute w-full h-full z-[-1] overflow-hidden">Content 1</Tab.Panel>
                <Tab.Panel className="bg-blue-900 top-0 left-0 absolute w-full h-full z-[-1] overflow-hidden">Content 2</Tab.Panel>
                <Tab.Panel className="bg-amber-900 top-0 left-0 absolute w-full h-full z-[-1] overflow-hidden">Content 3</Tab.Panel>
            </Tab.Panels>
            </Tab.Group>
        </div>
    )
}