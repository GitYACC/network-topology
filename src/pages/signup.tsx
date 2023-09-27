import { Icon } from "./__fragment/_svg"
import { signIn } from "next-auth/react"

export default function signup() {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-100">
            <div className="flex flex-col gap-6 m-8 mt-1 justify-center items-center">
                    <Icon 
                        className="w-12 h-12"
                        fill="blue"
                        stroke="blue"
                    />
                    <text className="font-bold text-2xl text-slate-800">Register your account</text>
            </div>
            <div className="relative flex flex-col divide-y bg-white shadow-md ring-1 ring-gray-900/5 rounded-lg p-1">
                <div>
                    <div className="flex gap-[4rem] px-8 pt-8 w-[45rem]">
                        <div className="flex flex-col w-full">
                            <text className="mb-3 text-sm font-medium text-gray-800">First Name</text>
                            <input className="ring-1 ring-gray-900/20 rounded-md w-full shadow-sm py-2 px-3 text-sm"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <text className="mb-3 text-sm font-medium text-gray-800">Last Name</text>
                            <input className="ring-1 ring-gray-900/20 rounded-md w-full shadow-sm py-2 px-3 text-sm"/>
                        </div>
                    </div>
                    <div className="flex gap-[4rem] px-8 pt-8 w-[45rem]">
                        <div className="flex flex-col w-full">
                            <text className="mb-3 text-sm font-medium text-gray-800">Username</text>
                            <input id="signupuser" className="ring-1 ring-gray-900/20 rounded-md w-full shadow-sm py-2 px-3 text-sm"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <text className="mb-3 text-sm font-medium text-gray-800">Password</text>
                            <input id="signuppass" className="ring-1 ring-gray-900/20 rounded-md w-full shadow-sm py-2 px-3 text-sm"/>
                        </div>
                    </div>
                    <div className="flex px-8 pt-8">
                        <div className="flex flex-col w-3/4">
                            <text className="mb-3 text-sm font-medium text-gray-800">Email Address</text>
                            <input className="ring-1 ring-gray-900/20 rounded-md w-full shadow-sm py-2 px-3 text-sm"/>
                        </div>
                    </div>
                    <div className="flex p-8">
                        <div className="flex flex-col w-1/2">
                            <text className="mb-3 text-sm font-medium text-gray-800">Phone Number</text>
                            <div className="flex shadow-sm">
                                <div className="flex justify-center items-center text-sm font-medium text-gray-800 bg-slate-100 px-4 border-y-[1px] border-l-[1px] border-gray-900/20 rounded-l-md">+1</div>
                                <div className="border-[1px] border-gray-900/20 w-56 rounded-r-md">
                                    <input className="py-2 px-3 w-3/4 text-sm w-full border-gray-900 rounded-r-md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-6 gap-7 justify-end">
                    <button className="text-slate-800">Cancel</button>
                    <button 
                        className="py-2 px-4 rounded-md bg-blue-700 text-white"
                        onClick={() => {
                            signIn(
                                "credentials", 
                                {
                                    callbackUrl: "/", 
                                    username: (document.querySelector("#signupuser")! as HTMLInputElement).value,
                                    password: (document.querySelector("#signuppass")! as HTMLInputElement).value
                                }
                            )
                        }}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}