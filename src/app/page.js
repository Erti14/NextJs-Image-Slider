'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import './slideshow.css';







export default function Home() {
  const images = [
    "images/spiderman.jpg",
    "images/spiderman2.jpg",
    "images/spiderman3.jpg",
    "images/spiderman4.jpg",
    "images/spiderman5.jpg",

  ];

  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinity: true,
    indicators: true,



    prevArrow: (
      <div className='ml-10 top-1/2'>
        <ArrowLeftIcon className='h-8 w-8 font-normal text-white cursor-pointer'></ArrowLeftIcon>
      </div>
    ),


    nextArrow: (
      <div className='mr-10 top-1/2'>
        <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer'></ArrowRightIcon>
      </div>
    ),
  }


  return (
    <main className="min-h-screen max-w-screen flex justify-center items-center position-relative">

      <div className='w-2/4 h-3/5 relative'>
        <Zoom {...zoomInProperties} >
          {images.map((each, index) => (



            <div key={index} className='flex items-center justify-center h-full w-full  '>

              <img className='w-full h-full rounded-lg' src={each} />
            </div>
          ))}
        </Zoom>
      </div>



    </main>



  )
};

