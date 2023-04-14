import Image from "next/image";
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";

// Interface for Categories Data

interface CategoryProps {
    categoryData: any[];
}
function Categories({ categoryData }: CategoryProps) {

    // UseSTate's
    const [showCategory, setShowCategory] = useState<string | null>(null);

    // Onclicl Function to show the category details
    const showcate = (data: string) => {
        setShowCategory(data === showCategory ? null : data)
    }
    const CategorySelected = (data: string) => {
        return data === showCategory;
    }
    return (
        <>
            <h2 className="text-base font-semibold mb-4">Categories</h2>
            {/* Looping the Category Data */}
            {categoryData.map((data, index) => {
                return (
                    <div key={index} className="categories lg:mr-5 mb-3">

                        <div onClick={() => showcate(data?.name)} className="p-5 flex item-center justify-between bg-white rounded-lg">
                            <span className="text-base font-normal">{data?.name}</span>
                            <Image src={'/arrow_forward.svg'} width={18} height={18} alt='arrow' />
                        </div>
                        <div className={`bg-white mt-2 rounded-lg px-5 py-3 ease-in duration-500 ${CategorySelected(data?.name) ? 'block' : 'hidden'}`}>
                            <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                                {data?.activities?.map((active: { title: string }, index: string) => {
                                    return (
                                        <li key={index} className="flex items-center space-x-3 ease-in duration-300 hover:ml-5">
                                            <Image src={'/arrow_forward.svg'} alt='' width={15} height={15} ></Image>
                                            <span className="font-semibold text-green">{active?.title}</span>
                                        </li>
                                    );
                                })}


                            </ul>
                        </div>
                    </div>

                )

            })}

        </>



    )

}
export default Categories;