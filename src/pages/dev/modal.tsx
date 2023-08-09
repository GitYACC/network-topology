import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <div className='h-full flex items-center justify-center'>
    <button onClick={() => setIsOpen(true)} className="p-2 border-[1px] rounded-lg hover:cursor-pointer">Deactivate</button>
    <Transition
        appear
        show={isOpen}
        as={Fragment}
    >
    <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        className="z-50"
    >
        <Transition.Child
            enter="transition ease-in duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25 blur-md"/>
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
        <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-[28rem] p-7 border-[1px] rounded-3xl bg-white">
            <Dialog.Title className="text-2xl">Deactivate account</Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mb-3">
            This will permanently deactivate your account
            </Dialog.Description>

            <p className="border-2 rounded-xl p-3 border-red-300 flex flex-col bg-amber-100/50 mb-4">
            <span className='mb-2'>
                Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
            </span>
            <span className="text-red-500 font-semibold">This action cannot be undone.</span>
            </p>

            <div className="flex gap-5 w-56">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 border-[1px] border-gray-500 rounded-lg text-white bg-red-500 hover:bg-red-600"
                >
                    Deactivate
                </button>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 border-[1px] border-gray-500 rounded-lg bg-blue-100 hover:bg-blue-200"
                >
                    Cancel
                </button>
            </div>
        </Dialog.Panel>
        </div>
        </div>
    </Dialog>
    </Transition>
    </div>
  )
}