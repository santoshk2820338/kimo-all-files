import Image from "next/image";

export default function Footer () {
return (
<>
<div className="bg-black p-6 ">
    <div className="lg:w-4/5 xsm:w-full mx-auto">
    <Image alt='Logo-white' width={50} height={50} src={'/logo-white.svg'} ></Image>

    </div>
</div>
</>
)
}