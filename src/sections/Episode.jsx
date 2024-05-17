export default function Episode() {
    return (
        <>
            <div className='bg-transparent'>
                <div className='text-center p-6 my-8 space-y-5'>
                    <h2 className='text-5xl font-medium'>Our episodes</h2>
                    <p className='italic text-lg'>"Do what makes you happy and don't look at anything else."</p>
                </div>

                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mx-3 xl:mx-[20%]'>
                    <div className="ep-fade grid row-start-1 row-end-1 col-start-1 col-end-1 items-center justify-center">
                        <img className="aspect-[2/2] md:aspect-[16/9] lg:aspect-[2/3] lg:max-w-[26rem] object-cover object-center" src='./39-3456x2304.jpg' alt='img_3' loading='lazy' />
                    </div>
                    <div className="ep-fade grid row-start-1 row-end-1 col-start-1 col-end-1 justify-center md:justify-start lg:justify-start lg:translate-y-3/4 lg:-translate-x-6">
                        <div className='bg-white w-fit px-5'>
                            <h3 className='text-3xl md:text-4xl'>Listen episode on</h3>
                        </div>
                        <ul className='mt-10 space-y-2 flex flex-col ml-6 md:ml-24 text-white'>
                            <a className="drop-light"><li>iTunes</li></a>
                            <a className="drop-light"><li>Youtube</li></a>
                            <a className="drop-light"><li>Stitcher</li></a>
                            <a className="drop-light"><li>SoundCloud</li></a>
                            <a className="drop-light"><li>Spotify</li></a>
                        </ul>
                    </div>
                    <div className='grid lg:col-start-2 lg:col-end-2 col-span-2 space-y-6 my-6'>
                        <a><label>EPISODE 10</label></a>
                        <h4 className='text-3xl'>Why empathy is key to your business & your future</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos a repellat saepe quisquam, placeat minus nobis eaque rem. Vitae, possimus quibusdam! Vero dolorem pariatur, ab sequi quam quae sit.</p>
                        <a><label>Read More</label></a>
                    </div>

                </div>

                <div className='flex justify-start overflow-hidden my-6'>
                    <h2 className='phrase text-5xl'>You have to understand your own personal DNA. Don't do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.</h2>
                    <h2 className='phrase text-5xl'>You have to understand your own personal DNA. Don't do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.</h2>
                    <h2 className='phrase text-5xl'>You have to understand your own personal DNA. Don't do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.</h2>
                    <h2 className='phrase text-5xl'>You have to understand your own personal DNA. Don't do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.</h2>
                </div>

            </div>
        </>
    );
}