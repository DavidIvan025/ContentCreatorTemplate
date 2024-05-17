export default function Footer() {
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 p-3 lg:p-24 break-words lg:break-normal gap-y-4 text-white bg-black">
            <ul className="footer-list underline-fade">
                <li>About</li>
                <li>Contact</li>
                <li>Licence</li>
                <li><a>Support & Resources</a></li>
                <li>Style guide</li>
                <li>Changelog</li>
            </ul>
            <ul className="footer-list underline-fade">
                <li>Blog</li>
                <li>Episodes</li>
                <li>Subscribe</li>
            </ul>
            <ul className="footer-list underline-fade">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>X (Twitter)</li>
                <li>Youtube</li>
            </ul>
            <ul className="footer-list">
                <li className="hover:text-white/70 transition-all duration-300 cursor-pointer lg:w-fit"><a>Copyright davidivansan@hotmail.com</a></li>
                <li className="hover:text-white/70 transition-all duration-300 cursor-pointer lg:w-fit"><a>Powered by Netlify</a></li>
            </ul>
        </div>
        </>
    );
}