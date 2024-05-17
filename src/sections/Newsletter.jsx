import { useRef, useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [openMailMsg, setopenMailMsg] = useState(false);
    const [responseMailMsg, setResponseMailMsg] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

        e.preventDefault();
        try {
            if (!regex.test(email)) {
                setopenMailMsg(true);
                setResponseMailMsg(false);
            }
            else {
                setopenMailMsg(true);
                setResponseMailMsg(true);
            }

        } catch(err) {
            console.log(err);
        }
        e.target.reset();
    }

    return (
        <>
            <div className="bg-black md:p-14 lg:p-24 xl:px-44">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 items-center gap-5 lg:gap-12 p-8 bg-white">
                    <label className="md:col-span-2">A PODCAST FOR YOUR SOUL</label>
                    <h3 className="text-4xl font-medium">Sign up to get short weekly emails.</h3>
                    <p>Get emails about design, user experience, user interface & productivity each week. We'll keep them short & to the point.</p>
                    <form ref={form} onSubmit={sendEmail} className="md:col-span-2">
                        <div className="flex items-center relative">
                            <input id="txt-email" onChange={(e) => setEmail(e.target.value)} className="input-result flex-1 p-6 max-h-full rounded-sm border border-gray-200" type="email" placeholder="Your email address" required></input>
                            <button className="hidden md:block primary-button transition ease-in-out hover:bg-blue-800 duration-300 min-h-14 min-w-56 absolute right-3" type="submit">SUBMIT</button>
                        </div>
                        {openMailMsg && (<p className={`absolute text-xs ${responseMailMsg ? 'text-green-600' : 'text-red-600'}`}>{responseMailMsg ? 'You are now subscribed to our newsletter!' : '* Please enter a valid email' }</p>)}
                        <button className="block md:hidden primary-button transition ease-in-out hover:bg-blue-800 duration-300 min-h-14 min-w-full mt-5" type="submit">SUBMIT</button>
                    </form>
                </div>

            </div>

        </>
    );
}