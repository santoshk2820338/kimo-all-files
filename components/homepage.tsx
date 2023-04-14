import { useEffect, useState } from 'react'
import Cards from './cards'
import Categories from './categories'
import ProfileCard from './profilecard'
import Footer from './footer'
import Header from './header'
import { GetMethod } from '../src/pages/api/app-services'


export default function Homepage() {
  // UseState's 
const [ categoryData, setCategoryData ] = useState<any[]>([]);
const [highlightData, setHighlightData] = useState<any[]>([]);

// Endpoints
const HighlightsEndpoint = 'https://web-dev.dev.kimo.ai/v1/highlights'
const CategoriesEndpoint = 'https://web-dev.dev.kimo.ai/v1/categories'

// Note: i used cors anywhere to get accessible for api request, my host was got blocked as per the cors policy, i cant access the api's so i used this to create me a temporary api service to access those.
// if you did get any data, kindly please open the url and start the temporary server.

const corsUrl = 'https://cors-anywhere.herokuapp.com/'

// GetService for Highlights
const getHighlights = async () => {
    try{
    const response = await GetMethod(corsUrl + HighlightsEndpoint);
    setHighlightData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    getHighlights();
  }, []);

// Get Service for Categories
  const getCategories = async () => {
    try{
    const response = await GetMethod(corsUrl + CategoriesEndpoint);
    setCategoryData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
    getCategories();
  }, [])


  return (
    <>
      <div className="bg-white">
      <Header></Header>

        <div className="relative isolate px-6 pt-14 lg:px-8 hero-bg flex justify-center items-center">

          <h1 className='lg:w-3/5 font-semibold whitespace-pre-line text-center text-white hero-text text-6xl lg:text-9xl'>
            Welcome to Hawaii
          </h1>
        </div>

      </div>
      <Cards highlightData= {highlightData} />
      <div className=' pt-2 light-bg'>
        <div className='lg:flex lg:flex-row container xsm:w-full lg:w-4/5 mx-auto p-6'>
          <div className='xsm:basis-1 lg:basis-1/2'>
            <Categories categoryData={categoryData}  />
          </div>
          <div className='xsm:basis-1 lg:basis-1/2 '>
          <h2 className="text-base font-semibold mb-4">Travel Guide</h2>
            <ProfileCard></ProfileCard>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
