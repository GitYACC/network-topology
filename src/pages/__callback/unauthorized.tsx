import { signIn } from "next-auth/react"
import { Icon } from "../__fragment/_svg"

export default function SignIn() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <div className="flex flex-col">
                <div className="flex flex-col gap-5 m-10 mb-12 justify-center items-center">
                    <Icon 
                        className="w-12 h-12"
                        fill="blue"
                        stroke="blue"
                    />
                    <text className="font-bold text-2xl text-slate-800">Sign in to your account</text>
                </div>
                <div className="relative flex flex-col bg-white shadow-md ring-1 ring-gray-900/5 rounded-lg p-1">
                    <div className="flex flex-col mx-10 mt-9">
                        <span className="mb-3 text-sm font-medium text-gray-800">Username</span>
                        <input id="signinuser" className="ring-1 ring-gray-900/20 rounded-md w-[24rem] shadow-sm py-2 px-3 text-sm" />
                    </div>
                    <div className="flex flex-col mx-10 mt-7 mb-1">
                        <span className="mb-3 text-sm font-medium text-gray-800">Password</span>
                        <input id="signinpass" type="password" className="ring-1 ring-gray-900/20 rounded-md w-[24rem] shadow-sm py-2 px-3 text-sm" />
                    </div>
                    <div className="relative flex flex-col mx-10 mt-5">
                        <div className="flex absolute left-0 w-56 items-center gap-3">
                            <input disabled type="checkbox" className="border-white"></input>
                            <span className="text-sm font-light text-gray-800">Remember Me</span>
                        </div>
                    </div>
                    <div className="flex flex-col mx-10 mt-11 mb-12">
                        <button 
                            onClick={() => {
                                signIn(
                                    "credentials", 
                                    {
                                        callbackUrl: "/", 
                                        username: (document.querySelector("#signinuser")! as HTMLInputElement).value,
                                        password: (document.querySelector("#signinpass")! as HTMLInputElement).value
                                    }
                                )
                            }}
                            className="text-white bg-blue-600 hover:bg-blue-700 rounded-md w-[24rem] shadow-sm py-2 px-3 text-sm">
                            Sign In
                        </button>
                    </div>
                    <div className="flex justify-center items-center mx-10 mb-8 bg-slate-200 h-[1.5px]">
                        <div className="px-5 bg-white text-sm">
                            Or continue with
                        </div>
                    </div>
                    <div className="flex mx-10 mb-12 gap-5">
                        <button 
                            className="flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 rounded-md w-full shadow-sm py-2.5 px-3 text-sm"
                            onClick={() => signIn("google", {callbackUrl: "/"})}
                        >
                            <svg fill="#000000" width="15px" height="15px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                                <path d='M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z' />
                            </svg>
                            <span>Google</span>
                        </button>
                        <button 
                            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-sm text-white rounded-md w-full py-2.5 px-3"
                            onClick={() => signIn("discord", {callbackUrl: "/"})}
                        >
                        <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-480.000000, -144.000000)">
                                    <g transform="translate(480.000000, 144.000000)">
                                        <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" fillRule="nonzero"/>
                                        <path d="M15.0031,4 C15.74742,4 16.532444,4.2597504 17.2533144,4.5466496 L17.7803,4.76328 L17.7803,4.76328 C19.0402,5.29134 19.7484,6.39876 20.2975,7.61613 C21.1882,9.59078 21.8067,12.2238 22.0209,14.2256 C22.1227,15.1766 22.1483,16.1321 21.9647,16.7747 C21.76838,17.46166 21.0975,17.947788 20.4466008,18.3303128 L20.1251058,18.5133917 L20.1251058,18.5133917 L19.7907,18.6986 C19.61865,18.794725 19.442175,18.8900812 19.2660703,18.9830547 L18.7436625,19.2532125 L18.7436625,19.2532125 L18.0271553,19.610458 L18.0271553,19.610458 L17.4503,19.8944 L17.4503,19.8944 C16.9564,20.1414 16.3557,19.9412 16.1087,19.4472 C15.8617,18.9532 16.0619,18.3526 16.5559,18.1056 L17.3469,17.7158 L17.3469,17.7158 L16.7663,17.1071 C15.3765,17.6777 13.7389,18 12.0001,18 C10.2612,18 8.6236,17.6777 7.23378,17.1071 L6.65415,17.7148 L7.44727,18.1056 L7.44727,18.1056 C7.94124,18.3526 8.14147,18.9532 7.89448,19.4472 C7.64749,19.9412 7.04682,20.1414 6.55284,19.8944 L6.00922,19.6247 C5.60650667,19.4255667 5.20386444,19.2265222 4.80574963,19.0185 L3.87804989,18.5133917 L3.87804989,18.5133917 L3.55657432,18.3303128 C2.9057004,17.947788 2.234774,17.46166 2.03851,16.7747 C1.85493,16.1321 1.88051,15.1766 1.98227,14.2256 C2.19645,12.2238 2.81496,9.59078 3.70567,7.61613 C4.25479,6.39877 4.96296,5.29134 6.22289,4.76328 C7.05903,4.41284 8.07171,4 9.00004,4 C9.60303,4 10.0767,4.55523 9.98927,5.14727 C10.6366,5.05075 11.3099,5 12.0001,5 C12.6914,5 13.3657,5.05091 14.014,5.14774 C13.9263,4.55557 14.4,4 15.0031,4 Z M8.75006,10.5 C7.78356,10.5 7.00006,11.2835 7.00006,12.25 C7.00006,13.2165 7.78356,14 8.75006,14 C9.71656,14 10.5001,13.2165 10.5001,12.25 C10.5001,11.2835 9.71656,10.5 8.75006,10.5 Z M15.2501,10.5 C14.2836,10.5 13.5001,11.2835 13.5001,12.25 C13.5001,13.2165 14.2836,14 15.2501,14 C16.2166,14 17.0001,13.2165 17.0001,12.25 C17.0001,11.2835 16.2166,10.5 15.2501,10.5 Z" fill="white" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                            <span>Discord</span>
                        </button>
                    </div>
                </div>
                <div className="flex m-10 justify-center items-center">
                    <div className="flex gap-2">
                        <span className="font-light text-slate-400">Not a member?</span>
                        <a 
                            href="/signup"
                            className="text-blue-600 hover:cursor-pointer hover:text-blue-700"
                        >Register here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}