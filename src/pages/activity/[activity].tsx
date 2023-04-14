import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cards from "../../../components/cards";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { GetMethod } from "../api/app-services";

interface ActivityProps {
    activityData: any;
    activities: any[];
}
export default function SingleActivity() {

    // Using Router Hook to get the dynamic value from Pathname
    const router = useRouter();
    const { activity } = router.query;

    // UseState's
    const [activityData, setActivityData] = useState<any>({});
    // Endpoints
    const ActivityEndpoint = `https://web-dev.dev.kimo.ai/v1/activities/${activity}`

    // Note: i used cors anywhere to get accessible for api request, my host was got blocked as per the cors policy, i cant access the api's so i used this to create me a temporary api service to access those.
    // if you did get any data, kindly please open the url and start the temporary server.

    const corsUrl = 'https://cors-anywhere.herokuapp.com/'

    // Get Service to get the Activities Data
    const getActivity = async () => {
        try {
            const response = await GetMethod(corsUrl + ActivityEndpoint);
            setActivityData(response);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getActivity();
    }, [activity]);

    return (
        <div>
            <h1>
                <>
                    <div className="bg-white xsm:truncate">
                        <Header></Header>

                        <div className="relative isolate px-6 pt-14 lg:px-8 activity-bg flex justify-center items-center">

                            <h1 className='lg:w-3/5 font-semibold whitespace-pre-line text-center text-white hero-text text-6xl'>
                                {activityData.name}
                            </h1>
                        </div>

                        <div className="container w-3/4 mx-auto my-6" >
                            <div className="lg:flex lg:flex-row">
                                <div className="basis-1/2 xsm:mb-5">
                                    <Image loading="lazy" alt="" src={activityData?.image} width={400} height={400} ></Image>
                                </div>
                                <div className="align-items basis-1/2 flex items-center lg:ml-5">
                                    <div className="activity-details whitespace-pre-wrap">
                                        <h2 className="text-2xl font-semibold mb-4"> {activityData.name}</h2>
                                        <div className="detail-description mb-5 xsm:whitespace-pre-line">
                                            <p>
                                                {activityData?.description}
                                            </p>
                                        </div>
                                        <div className="activities">

                                            <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                                                {activityData?.activities?.map((data: any, index: any) => {
                                                    return (
                                                        <li key={index} className="flex items-center space-x-3 ease-in duration-300 hover:ml-5">
                                                            <Image src={'/arrow_forward.svg'} alt='' width={15} height={15} ></Image>
                                                            <span className="font-semibold text-green">{data.name}</span>
                                                        </li>
                                                    )
                                                })}


                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </>
            </h1>
        </div>
    );
}