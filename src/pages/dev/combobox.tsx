import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {id: 1, name: 'Samarth Shastry'},
    {id: 2, name: 'Sunaad Shastry'},
    {id: 3, name: 'Aruna Mysore'},
    {id: 4, name: 'Shashank Shastry'},
    {id: 5, name: 'Tyamagondalu Ramesh'},
    {id: 6, name: 'Aditya Mahajan'},
    {id: 7, name: 'Kaif Jeelani'}
]

export default function MyCombobox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) => 
            person.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
  
    return (
    <div className='h-full flex items-center justify-center'>
        <Combobox as="div" className="relative" value={selectedPerson} onChange={setSelectedPerson}>
            <div className="flex flex-row w-[20rem] p-3 rounded-lg border-[1px] shadow-sm">
                <Combobox.Input 
                    className="!outline-none w-56"
                    onChange={(event) => setQuery(event.target.value)} 
                />
                <Combobox.Button className="absolute right-0 mr-3 inset-y-0">
                    <ChevronUpDownIcon className="w-5"></ChevronUpDownIcon>
                </Combobox.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <Combobox.Options className="absolute w-[20rem] flex flex-col top-0 mt-[3.75rem] py-1 rounded-lg border-[1px] shadow-lg bg-white">
            {filteredPeople.length == 0 && query != '' ?
            (
            <Combobox.Option
                key={"ux-random-key"}
                value={"ux-random-value"}
                className='flex flex-row gap-3 p-2 opacity-50'
            >
                <CheckIcon className="w-4 invisible" />
                Nothing Found
            </Combobox.Option>
            ) : (
            filteredPeople.map((person) => (
                <Combobox.Option 
                    className="flex flex-row gap-3 p-2 hover:cursor-pointer hover:bg-gray-500 hover:text-white"
                    key={person.id} 
                    value={person.name}
                >
                    {({selected, active}) => (
                        <>
                            {active ? <>active</> : <>not active</>}
                            {selected ? <CheckIcon className="w-4" /> : <CheckIcon className="w-4 invisible" />}
                            {person.name}
                        </>
                    )}
                </Combobox.Option>
            )))}
            </Combobox.Options>
            </Transition>
        </Combobox>
    </div>
    )
  }