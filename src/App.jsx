import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Episode from './sections/Episode'
import Quote from './sections/Quote'
import Explore from './sections/Explore'
import About from './sections/About'
import Newsletter from './sections/Newsletter'

function App() {
  return (
    <>
      <Header />

      <div className="isolate grid grid-cols-1 lg:grid-cols-2 bg-black text-white p-2 lg:p-14">
        <div className='flex flex-col space-y-6 justify-center'>
          <label>A PODCAST FOR YOUR SOUL</label>
          <h1 className='text-6xl font-medium'>The Podcast show</h1>
          <p className='text-lg'>Helping freelancers & business owners take control of their life with a simple podcast.</p>
          <button className="primary-button min-h-16 max-w-xs hover:bg-blue-800">SEE EPISODES</button>
        </div>
        <div className='relative flex flex-col my-14'>
          <div className='flex justify-center md:translate-y-4'>
            <img className='aspect-[2/3] object-cover object-center max-w-[12rem] md:max-w-[24rem] md:aspect-[1/1]' src='./797-5000x3333.jpg' alt='img_10' loading='lazy' />
          </div>

          <div className='absolute inset-x-2/4 lg:inset-x-[40%] lg:-inset-y-12'>
            <img className='relative -z-10 aspect-[1/1] object-cover max-w-[9rem] md:max-w-[19rem]' src='./24-4855x1803.jpg' alt='img_11' loading='lazy' />

            <div className='fade-tags absolute top-0 -inset-x-6 md:inset-x-28 lg:inset-x-3/4 -translate-y-6 lg:translate-y-1/4'>
              <h3 className='text-4xl whitespace-nowrap'>Listen on</h3>
              <ul className='mt-10 space-y-2 flex flex-col ml-6 md:ml-24'>
                <a className='drop-light'><li>iTunes</li></a>
                <a className='drop-light'><li>Youtube</li></a>
                <a className='drop-light'><li>Stitcher</li></a>
                <a className='drop-light'><li>SoundCloud</li></a>
                <a className='drop-light'><li>Spotify</li></a>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Episode />
      <Explore />
      <Quote />
      <About />
      <Newsletter />

      <Footer />
    </>
  )
}

export default App