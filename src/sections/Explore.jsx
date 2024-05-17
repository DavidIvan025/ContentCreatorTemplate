export default function Explore() {
    return (
        <>
            <div className='bg-primary lg:p-14'>
                <div className='flex flex-col lg:flex-row lg:items-center border-b border-b-black/20'>
                    <h5 className='text-2xl'>Explore all</h5>
                    <a className='pod-media lg:ml-5 mb-4'>podcast episodes in one place</a>
                </div>
                <div className='pod-container grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 p-2'>
                    <div className='pod-episode grid grid-cols-1 md:grid-cols-[20rem] lg:grid-cols-[26rem,auto] xl:grid-cols-[36rem,auto]'>
                        <div className="grid md:grid-cols-subgrid">
                            <div className='fade-imgs relative row-start-1'>
                                <img src='./274-3824x2520.jpg' alt='img_5' loading='lazy' />
                                <div className='absolute top-0 right-0 lg:translate-x-3 lg:translate-y-3 bg-white w-fit px-2'>
                                    <a><label>EPISODE 9</label></a>
                                </div>
                            </div>
                            <div className="row-start-2 self-end">
                                <div className='flex flex-col space-y-6 my-6 border-b border-b-black/20'>
                                    <h4 className='text-3xl'>How to make an extra $30,332 with your podcast template</h4>
                                    <a>Read More</a>
                                </div>
                                <div className='flex space-x-3 flex-wrap'>
                                    <a className="pod-media">ITUNES</a>
                                    <a className="pod-media">YOUTUBER</a>
                                    <a className="pod-media">STITCHER</a>
                                    <a className="pod-media">SOUNCLOUD</a>
                                    <a className="pod-media">SPOTIFY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pod-episode grid grid-cols-1 md:grid-cols-[20rem] lg:grid-cols-[26rem,auto] xl:grid-cols-[36rem,auto]'>
                        <div className="grid md:grid-cols-subgrid">
                            <div className='fade-imgs relative row-start-1'>
                                <img src='./7-4728x3168.jpg' alt='img_6' loading='lazy' />
                                <div className='absolute top-0 right-0 lg:translate-x-3 lg:translate-y-3 bg-white w-fit px-2'>
                                    <a><label>EPISODE 8</label></a>
                                </div>
                            </div>
                            <div className="row-start-2 self-end">
                                <div className='flex flex-col space-y-6 my-6 border-b border-b-black/20'>
                                    <h4 className='text-3xl'>Tips to sell without selling anything</h4>
                                    <a>Read More</a>
                                </div>
                                <div className='flex space-x-3 flex-wrap'>
                                    <a className="pod-media">ITUNES</a>
                                    <a className="pod-media">YOUTUBER</a>
                                    <a className="pod-media">STITCHER</a>
                                    <a className="pod-media">SOUNCLOUD</a>
                                    <a className="pod-media">SPOTIFY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pod-episode grid grid-cols-1 md:grid-cols-[20rem] lg:grid-cols-[26rem,auto] xl:grid-cols-[36rem,auto] '>
                        <div className="grid md:grid-cols-subgrid">
                            <div className='fade-imgs relative row-start-1'>
                                <img src='./153-4763x3155.jpg' alt='img_7' loading='lazy' />
                                <div className='absolute top-0 right-0 lg:translate-x-3 lg:translate-y-3 bg-white w-fit px-2'>
                                    <a><label>EPISODE 7</label></a>
                                </div>
                            </div>
                            <div className="row-start-2 self-end">
                                <div className='flex flex-col space-y-6 my-6 border-b border-b-black/20'>
                                    <h4 className='text-3xl'>Why giving is so important</h4>
                                    <a>Read More</a>
                                </div>
                                <div className='flex space-x-3 flex-wrap'>
                                    <a className="pod-media">ITUNES</a>
                                    <a className="pod-media">YOUTUBER</a>
                                    <a className="pod-media">STITCHER</a>
                                    <a className="pod-media">SOUNCLOUD</a>
                                    <a className="pod-media">SPOTIFY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pod-episode grid grid-cols-1 md:grid-cols-[20rem] lg:grid-cols-[26rem,auto] xl:grid-cols-[36rem,auto]'>
                        <div className="grid md:grid-cols-subgrid">
                            <div className='fade-imgs relative row-start-1'>
                                <img src='./307-5000x3333.jpg' alt='img_8' loading='lazy' />
                                <div className='absolute top-0 right-0 lg:translate-x-3 lg:translate-y-3 bg-white w-fit px-2'>
                                    <a><label>EPISODE 6</label></a>
                                </div>
                            </div>
                            <div className="row-start-2 self-end">
                                <div className='flex flex-col space-y-6 my-6 border-b border-b-black/20'>
                                    <h4 className='text-3xl'>Listen to this podcast before you turn 20</h4>
                                    <a>Read More</a>
                                </div>
                                <div className='flex space-x-3 flex-wrap'>
                                    <a className="pod-media">ITUNES</a>
                                    <a className="pod-media">YOUTUBER</a>
                                    <a className="pod-media">STITCHER</a>
                                    <a className="pod-media">SOUNCLOUD</a>
                                    <a className="pod-media">SPOTIFY</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}