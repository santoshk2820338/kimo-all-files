import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

// Interface for Highlights Data
interface HighlightsProps {
    highlightData: any[];
}

export default function Cards({ highlightData }: HighlightsProps) {

    return (
        <div className="container lg:w-4/5 xsm:w-full mx-auto p-6 pb-12">
            <h2 className="text-base font-semibold mb-6">Highlights</h2>
            <div className="flex justify-between lg:gap-x-4 mb-2 xsm:overflow-scroll">
{/* Looping the Highlights Data  */}
                {highlightData?.map((data, index) => {
                    return (
                        <div key={index} className="relative min-w-260  w-full rounded-lg shadow-md lg:max-w-sm xsm:mr-5 ">
                            <Image
                                className="object-cover w-full h-44 rounded-t-lg"
                                src={`${data.image}`}
                                alt="image"
                                width={350}
                                height={170}
                            />
                            <div className="p-5 pt-4 xsm-overflow-hidden ">
                                <h4 className="text-xl mb-2 font-semibold tracking-tight color-lightgreen">
                                    {data.title}
                                </h4>
                                <p className="mb-2 text-base leading-normal xsm:whitespace-pre-line ">
                                    {data.description}
                                </p>
                                <div>
                                    <Link href={"/"} className="absolute right-2	bottom-2" >
                                        <Image src='/arrow_forward.svg' className="ml-auto light-bg rounded-full p-3" alt={"arrow"} width={40} height={40}></Image>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}




            </div>
        </div>
    );
};

