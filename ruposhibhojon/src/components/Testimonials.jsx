import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [rating, setRating] = useState(4)
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div>
            <div className="space-y-6 text-center hidden lg:block">
                <h1 className="text-2xl lg:text-4xl font-bold text-center">Hear what our partners have to say</h1>
                <p className="text[#737373] text-base px-96">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='lg:flex space-y-4 w-full gap-8 items-center lg:mt-24'>
                <div className='basis-1/4 space-y-4'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-center lg:text-left'>See what our clients says</h1>
                    <p className='text-gray-400 font-bold text-center lg:text-left'>Explore our clients feedback for better understandability</p>
                </div>

                <div ref={sliderRef} className="keen-slider w-full lg:basis-3/4">
                    <div className="keen-slider__slide number-slide1">
                        <div className="card bg-base-100 w-[500px] shadow-sm border border-[#F3F3F3] p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                            <div className='flex flex-col items-center justify-center w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='btn-circle btn object-cover h-20 w-20' src="/src/assets/header3.jpg" alt="" />
                                        <div>
                                            <h2 className='font-bold text-[#151515] text-xl'>Awlad Hossain</h2>
                                            <p className='text-lg font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fill-opacity="0.2" />
                                        <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fill-opacity="0.2" />
                                    </svg>
                                </div>
                                <div className="card-body px-0 text-justify items-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    <Rating className='fe' style={{ maxWidth: 150 }} value={rating} onChange={setRating} readOnly={true} itemStyles={myStyles} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="card bg-base-100 w-[500px] shadow-sm border border-[#F3F3F3] p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                            <div className='flex flex-col items-center justify-center w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='btn-circle btn object-cover h-20 w-20' src="/src/assets/header1.jpg" alt="" />
                                        <div>
                                            <h2 className='font-bold text-[#151515] text-xl'>Awlad Hossain</h2>
                                            <p className='text-lg font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fill-opacity="0.2" />
                                        <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fill-opacity="0.2" />
                                    </svg>
                                </div>
                                <div className="card-body px-0 text-justify items-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    <Rating className='fe' style={{ maxWidth: 150 }} value={rating} onChange={setRating} readOnly={true} itemStyles={myStyles} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="card bg-base-100 w-[500px] shadow-sm border border-[#F3F3F3] p-6 hover:transform hover:scale-105 transition ease-in-out hover:cursor-pointer">
                            <div className='flex flex-col items-center justify-center w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex gap-4 items-center'>
                                        <img className='btn-circle btn object-cover h-20 w-20' src="/src/assets/header2.jpg" alt="" />
                                        <div>
                                            <h2 className='font-bold text-[#151515] text-xl'>Awlad Hossain</h2>
                                            <p className='text-lg font-semibold'>Businessman</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                        <path d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z" fill="#FF3811" fill-opacity="0.2" />
                                        <path d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z" fill="#FF3811" fill-opacity="0.2" />
                                    </svg>
                                </div>
                                <div className="card-body px-0 text-justify items-start">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    <Rating className='fe' style={{ maxWidth: 150 }} value={rating} onChange={setRating} readOnly={true} itemStyles={myStyles} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;