import { useState } from "react";

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleNavBar = () => {
        setShowNav(!showNav);
    }
    return (
        <>
            <label onClick={handleNavBar} className={`${showNav ? 'block navbar-overlay' : 'hidden'} lg:hidden`}></label>
            <header className="sticky z-20 top-0 flex items-center lg:space-x-6 px-6 lg:px-24 py-4 bg-black">
                <div className="flex flex-1">
                    <h1 className="underline underline-offset-2 cursor-pointer text-white hover:text-white/70 transition duration-300 text-xl">podcast</h1>
                </div>

                <button onClick={handleNavBar} className="block lg:hidden">
                    <i className={`transition ease-in-out duration-700 text-white text-[1.3rem] ${!showNav ? 'fa fa-bars' : 'fa fa-times hover:text-blue-500/70'}`} aria-hidden="true"></i>
                </button>


                <nav className={`-z-10 navbar-pos ${showNav ? 'navbar-fadein' : null} lg:hidden`}>
                    <ul className="header-underline relative text-center space-y-6 text-white/60">
                        <li>About</li>
                        <li>Suscribe</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <div className="flex justify-center pt-6">
                        <button className="primary-button min-w-full">EPISODES</button>
                    </div>
                </nav>


                <div className="hidden lg:block">
                    <ul className="underline-fade flex space-x-4 pr-5 text-white/60">
                        <li>About</li>
                        <li>Suscribe</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>

                </div>
                <button className="hidden lg:block primary-button">EPISODES</button>
            </header >
        </>
    );
}