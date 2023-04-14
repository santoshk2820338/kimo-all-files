
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard () {

    return(
        <div  className="justify-between py-8 px-8  mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5 mb-3">
            <p className="text-2xl text-black font-semibold">
            Hadwin Malone
            </p>
            <p className="text-base font-normal">
            Guide since 2012
            </p>
        </div>
        <button className="px-4 py-1 text-sm text-green font-semibold rounded-lg border border-green offset-2">Contact</button>
    </div>
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/travelguide.svg" alt="Woman's Face" />

</div>
    )
}

