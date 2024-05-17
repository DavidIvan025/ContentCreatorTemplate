import { useEffect, useRef, useState } from "react";

export default function About() {
    const [isScrolled, setIsScrolled] = useState(false);
    const viewScroll = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = viewScroll.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible && !isScrolled) {
                setIsScrolled(true);
                setTimeout('', 3000);
            }
        };

        window.addEventListener('scroll', handleScroll );
        return () => {
            window.removeEventListener('scroll', handleScroll );
        }
    }, [isScrolled]);
    return (
        <>
            <div className='bg-black text-white relative p-1 md:p-20'>

                <img className="img-fade absolute hidden md:block top-0 translate-x-full -translate-y-20 aspect-[1/1] md:max-w-[10rem] lg:max-w-[15rem] object-cover object-center" src='./232-3000x1987.jpg' alt='img_22' loading='lazy' />
                <img className="img-fade absolute top-0 -translate-y-1/2 lg:translate-y-[20%] inset-x-2/4 md:inset-x-3/4 aspect-[2/3] max-w-[6rem] md:max-w-[10rem] lg:max-w-[15rem] object-cover object-center" src='./154-3264x2176.jpg' alt='img_23' loading='lazy' />
                <div className='grid grid-cols-1 my-24 lg:grid-cols-[40rem,auto]'>
                    <div className='flex flex-col space-y-6'>
                        <h2 className='text-5xl'>This is a podcast for those bold enough to take the small steps</h2>
                        <p>With over 2 million downloads, these candid conversations
                            have helped inspire thousands of listeners to pursue a meaninful life.
                        </p>
                        <a className="drop-light">About our show</a>
                    </div>

                </div>
                <img className="img-fade absolute z-10 bottom-0 right-[10%] lg:right-[20%] translate-y-1/4 lg:translate-y-1/4 aspect-[2/4] lg:aspect-[3/4]  max-w-[6rem] md:max-w-[10rem] lg:max-w-[12rem] object-cover object-center" src='./164-1200x800.jpg' alt='img_24' loading='lazy' />
                <img className="img-fade absolute hidden z-10 md:block left-0 translate-x-3/4 lg:translate-x-[90%] -translate-y-2/4 lg:-translate-y-28 aspect-[1/1] md:max-w-[10rem] lg:max-w-[15rem] object-cover object-bottom" src='./235-5000x3333.jpg' alt='img_25' loading='lazy' />


            </div>
            <div className="bg-black text-white text-center p-1 md:p-24 xl:px-[30%]">
                <div className="mx-5 flex flex-col space-y-6">
                    <div className="flex justify-center items-start min-h-[4rem]">
                        <div ref={viewScroll} className={`line bg-white w-[1px] ${isScrolled ? 'animate' : ''}`}></div>
                    </div>
                    <h3 className="text-4xl">We have a simple goal</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur vel optio sequi minima iure fugit incidunt error nam corrupti obcaecati quaerat illum ab perferendis ad, adipisci nesciunt assumenda veniam velit.</p>
                    <div className="flex items-center justify-center">
                        <iframe className="aspect-video w-full min-h-[22rem]" src="https://www.youtube.com/embed/F7XGddoTxrA?si=AtfAO6lgcA3LiZ2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div className="about-media bg-white/90 hover:bg-white transition-all duration-300 text-black w-fit mx-auto">
                        <ul className="flex flex-wrap items-center justify-center space-x-6 p-5">
                            <li><a>ITunes</a></li>
                            <li><a>Youtube</a></li>
                            <li><a>Stitcher</a></li>
                            <li><a>SoundCloud</a></li>
                            <li><a>Spotify</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    );
}
