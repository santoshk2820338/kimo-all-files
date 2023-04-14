import Footer from "../../components/footer"
import Header from "../../components/header"
export default function Contact() {
    return (
        //Contact Page
        <>
            <div className="bg-white">
                <Header></Header>

                <div className="relative isolate px-6 pt-14 lg:px-8 activity-bg flex justify-center items-center">

                    <h1 className='lg:w-3/5 font-semibold whitespace-pre-line text-center text-white hero-text text-6xl'>
                        Contact
                    </h1>
                </div>

                <div className="mt-10 border bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 mb-5">
                    <h2 className="text-xl text-center mb-5 font-semibold">Fill the Form for Booking</h2>
                    <form action="">
                        <div className="mb-5">
                            <input type="text" id="name" name="name" placeholder="Full Name." className="border border-gray-300 shadow p-2 w-full rounded mb-" />
                        </div>
                        <div className="mb-5">
                            <input type="email" id="name2" name="name" placeholder="Email" className="border border-gray-300 shadow p-2 w-full rounded mb-" />
                        </div>
                        <div className="mb-5">
                            <input type="text" id="name3" name="name" placeholder="Phone Number" className="border border-gray-300 shadow p-2 w-full rounded mb-" />
                        </div>
                        <label htmlFor="countries" className=" block mb-2 text-sm font-medium  dark:text-white">Select an Activity</label>
                        <select id="countries" className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select an Activity</option>
                            <option value="US">Surfing</option>
                            <option value="CA">Traditional Festivals</option>
                            <option value="FR">Volcano</option>
                        </select>
                        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </>


    )


}