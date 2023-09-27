import { Menu, Transition } from "@headlessui/react"
import { Fragment, ReactNode } from "react"

interface PopoverProps {
    message: string,
    className?: string,
    children: ReactNode
}

export function Popover(props: PopoverProps) {
    return (
        <Menu as="div" className="relative">
            {({open}) => (
                <>
                    <Menu.Button 
                        className="focus:outline-none"
                        onMouseEnter={(event) => event.currentTarget.click()}
                        onMouseLeave={(event) => open ? event.currentTarget.click() : null}
                    >
                        {props.children}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 translate-y-1"
                        enterTo="transform opacity-100 translate-y-0"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 translate-y-0"
                        leaveTo="transform opacity-0 translate-y-1"
                    >
                        <Menu.Items as="div" className="absolute -top-8 left-1 focus:outline-none">
                            <Menu.Item as="div" className={`flex whitespace-nowrap ${props.className} rounded-md px-2 py-1 text-xs text-white`}>{props.message}</Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}