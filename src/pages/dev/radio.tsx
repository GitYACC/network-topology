import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'


export default function MyRadioGroup() {
let [selected, setSelected] = useState('startup')

return (
    <div className='h-full flex items-center justify-center'>
    <RadioGroup 
        value={selected} 
        onChange={setSelected}
        className="flex flex-col gap-2"
    >
        <RadioGroup.Label hidden className="text-2xl text-bold">Plan</RadioGroup.Label>
        <RadioGroup.Option value="startup">
            {({ checked }) => (
                <span className={`flex w-[21rem] border-2 p-4 rounded-xl ${checked ? 'bg-sky-900 shadow-md' : ''}`}>
                    <div className="flex flex-col w-56">
                        <span className={`text-xl text-bold ${checked ? 'text-white' : 'text-black'}`}>Startup</span>
                        <p className="text-sm text-gray-400">Seeding phase of the company</p>
                    </div>
                    <div 
                        className={`ml-7 w-[5rem] flex items-center justify-center right-0 text-white ${!checked ? 'invisible' : ''}`}
                    >$0</div>
                </span>
            )}
        </RadioGroup.Option>
        <RadioGroup.Option value="business">
            {({ checked }) => (
                <span className={`flex w-[21rem] border-2 p-4 rounded-xl ${checked ? 'bg-sky-900 shadow-md' : ''}`}>
                <div className="flex flex-col w-56">
                    <span className={`text-xl text-bold ${checked ? 'text-white' : 'text-black'}`}>Business</span>
                    <p className="text-sm text-gray-400">Funding phase of the company</p>
                </div>
                <div 
                    className={`ml-5 w-[5rem] flex items-center justify-center right-0 text-white ${!checked ? 'invisible' : ''}`}
                >~$1M</div>
            </span>
            )}
        </RadioGroup.Option>
        <RadioGroup.Option value="enterprise">
            {({ checked }) => (
                <span className={`flex w-[21rem] border-2 p-4 rounded-xl ${checked ? 'bg-sky-900 shadow-md' : ''}`}>
                <div className="flex flex-col w-56">
                    <span className={`text-xl text-bold ${checked ? 'text-white' : 'text-black'}`}>Enterprise</span>
                    <p className="text-sm text-gray-400">Public phase of the company</p>
                </div>
                <div 
                    className={`ml-5 w-[5rem] flex items-center justify-center right-0 text-white ${!checked ? 'invisible' : ''}`}
                >+$10M</div>
            </span>
            )}
        </RadioGroup.Option>
    </RadioGroup>
    </div>
)
}
