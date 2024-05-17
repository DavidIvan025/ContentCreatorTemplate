export default function Quote() {
    return (
        <>
            <div className='grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 p-8 md:p-24 gap-8 md:gap-20'>
                <div className='relative col-span-2 md:col-span-3 text-center md:mx-20'>
                    <span className="quote-span">
                        <i className='fa fa-quote-left' aria-hidden='true'></i>
                    </span>
                    <label>A PODCAST FOR YOUR SOUL</label>
                    <h3 className='text-4xl mt-6'>Speaking together differently in order to live together differently.</h3>
                    <span className="quote-span">
                        <i className='fa fa-quote-right' aria-hidden='true'></i>
                    </span>
                </div>
                <div className='col-span-2 md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 text-justify'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a className='decoration-yellow-900'>Provident, optio in, eveniet</a> porro dolores tempore nulla, delectus atque voluptate <a className='decoration-yellow-900'>cum velit numquam</a> quis voluptates. Amet veniam iure minima explicabo dolorum!</p>
                </div>
                <div className='row-start-3 row-end-3 col-span-2 md:row-start-2 md:row-end-2 text-justify'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <a className='decoration-yellow-900'>Suscipit voluptas libero laborum dolor</a> nostrum accusantium unde illo. Nam est iusto culpa, <a className='decoration-yellow-900'>magni ipsa voluptatum odio</a> nulla, ducimus, ad cumque beatae.</p>
                </div>

            </div>
        </>
    );
}