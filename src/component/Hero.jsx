import heroImage from '../assets/images/image-product-1.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import cartIcon from '../assets/images/icon-cart.svg'
export function Hero(){
    return(
        <section>
            <div>
                <img src={heroImage} alt="product-image-1"/>
                <div className='relative bottom-40 flex justify-between px-6'>
                    <button className='bg-White px-4 py-3 rounded-full'><img src={previous} alt="previous-icon"/></button>
                    <button className='bg-White px-4 py-3 rounded-full'><img src={next} alt="next-icon"/></button>
                </div>
            </div>
            <div className='px-6 grid gap-6 mb-10'>     
                <h1 className='grid gap-4 text-3xl font-bold'>
                    <span className='text-sm font-bold text-Darkgrayishblue tracking-[.25em]'>SNEAKER COMPANY</span>
                    Fall Limited Edition Sneakers
                </h1>
                <p className='text-lg text-Darkgrayishblue leading-7 mb-5'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='grid gap-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-bold flex items-center gap-3'>$125.00 <span className='bg-black px-4 py-2 text-sm text-White rounded-lg'>50%</span></h1>
                        <span className='text-lg font-bold text-Darkgrayishblue line-through'>$250.00</span>
                    </div>
                    <button className='flex justify-between items-center bg-Lightgrayishblue py-4 px-6 rounded-lg'>
                        <img src={minus} alt="minus-icon" />
                        <span className='text-lg font-bold'>0</span>
                        <img src={plus} alt="plus-icon" />
                    </button>
                    <button className='flex justify-center bg-Orange py-4 rounded-lg font-bold gap-2 shadow-2xl shadow-Orange/40'>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="bg-black" fill-rule="nonzero"/></svg>Add to Cart
                    </button>
                </div>
            </div>
        </section>
        
    )
}