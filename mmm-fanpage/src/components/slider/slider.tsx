"use client"

import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

import { useState } from "react";

export default function Slider() {

    const slides =[
        {url: '/assets/nombre de imagen'},
    ]

    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = ()=>{
        const lastSlide = currentImage === slides.length-1;
        const newIndex = lastSlide ? 0 : currentImage+1;
        setCurrentImage(newIndex);
    }
    const prevSlide = ()=>{
        const firstSlide = currentImage === 0;
        const newIndex = firstSlide?  slides.length-1 : currentImage -1;
        setCurrentImage(newIndex);
    }
    const goToSlide = (index:number)=>{
        setCurrentImage(index);
    }

    return(
        <article className=" max-w-[36.8rem] h-[23rem]  w-full mx-auto py-8 px-4 relative group">
            <div style={{backgroundImage:`url(${slides[currentImage].url})`}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease">
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 rounded-full mx-2 bg-black/20 cursor-pointer"
            onClick={prevSlide}>
                <ArrowLeftRoundedIcon className='text-white text-7xl'></ArrowLeftRoundedIcon>
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 rounded-full mx-2 bg-black/20 cursor-pointer"
            onClick={nextSlide}>
                <ArrowRightRoundedIcon className='text-white text-7xl'></ArrowRightRoundedIcon>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, i)=>(
                    <div 
                    key={i}
                    onClick={()=>goToSlide(i)}
                    className="p-2 cursor-pointer"
                    >
                    <CircleRoundedIcon className='p-0.5 text-base 
                     hover:text-sky-500  h-[1rem] w-[1rem]'></CircleRoundedIcon>
                    </div>
                ))
                }
            </div>
            
        </article>
    )
}