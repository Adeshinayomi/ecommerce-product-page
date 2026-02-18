import { useState,useRef,useEffect } from 'react'
import heroImage from '../assets/images/image-product-1.jpg'
import productImage2 from '../assets/images/image-product-2.jpg'
import productImage3 from '../assets/images/image-product-3.jpg'
import productImage4 from '../assets/images/image-product-4.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'
import plus from '../assets/images/icon-plus.svg'
import minusIcon from '../assets/images/icon-minus.svg'
import cartIcon from '../assets/images/icon-cart.svg'

export function Hero({loadCart}){
    const [quantity,setQuantity]=useState(0)
    const [current,setCurrent]=useState(0)
    const divElement=useRef(null)
    let count=0

    const add=()=>{
        setQuantity(
            quantity+1
        )
    }
    const minus=()=>{
        if(quantity>0){
            setQuantity(
                quantity-1
            )
        }
    }
    function addToCart(){
        loadCart({
            image:heroImage,
            name:'Fall Limited Edition Sneakers',
            quantity:quantity,
            price:125.00
        })
        setQuantity(0)
    }
    const prev=()=>{
        if(count>0){
            count--
            divElement.current.scrollLeft=count*415
        }else{
            count=3
            divElement.current.scrollLeft=count*415
        }
        
    }
    const nextSlide=()=>{
        if(count>3){
            count=0
            divElement.current.scrollLeft=count*415
        }else{
            count++
            divElement.current.scrollLeft=count*415
        }
    }
    return(
        <section className='md:grid md:grid-cols-2 md:w-[80%] md:mx-auto md:items-center md:justify-center md:h-[80vh] md:gap-5 mt-10'>
            <div className='grid gap-4 md:gap-10'>
                <div className='flex overflow-auto md:overflow-hidden md:w-5/6' ref={divElement}>
                    <img src={heroImage} alt="product-image-1" className='md:rounded-lg '/>
                    <img src={productImage2} alt="product-image-1" className='md:rounded-lg'/>
                    <img src={productImage3} alt="product-image-1" className='md:rounded-lg'/>
                    <img src={productImage4} alt="product-image-1" className='md:rounded-lg'/>
                </div>
                
                <div className='relative z-20 bottom-[13em] flex justify-between px-3 md:hidden'>
                    <button className='bg-White px-4 py-3 rounded-full'><img src={previous} alt="previous-icon" onClick={prev}/></button>
                    <button className='bg-White px-4 py-3 rounded-full'><img src={next} alt="next-icon" onClick={nextSlide}/></button>
                </div>
                <div className='hidden md:flex md:gap-8'>
                    <div className={current === 0 && 'border-2 border-orange-400 rounded-lg'} onClick={()=>{
                        divElement.current.scrollLeft=0*410
                        setCurrent(0)
                    }}>
                        <img src={heroImage} alt="hero-image" width={80} className={`rounded-md hover:opacity-25 ${current === 0 && 'opacity-25'} cursor-pointer`}/>
                    </div>
                    <div className={current === 1 && 'border-2 border-orange-400 rounded-lg'} onClick={()=>{
                        divElement.current.scrollLeft=1*410
                        setCurrent(1)
                    }}>
                        <img src={productImage2} alt="product-image-2" width={80} className={`rounded-md hover:opacity-25 ${current ===1 && 'opacity-25'} cursor-pointer`}/>
                    </div>
                    <div className={current === 2 && 'border-2 border-orange-400 rounded-lg'}  onClick={()=>{
                        divElement.current.scrollLeft=2*410
                        setCurrent(2)
                    }}>
                        <img src={productImage3} alt="product-image-2" width={80} className={`rounded-md hover:opacity-25 ${current ===2 && 'opacity-25'} cursor-pointer`}/>
                    </div>
                    <div className={current === 3 && 'border-2 border-orange-400 rounded-lg'}  onClick={()=>{
                         divElement.current.scrollLeft=3*410
                         setCurrent(3)
                    }}>
                        <img src={productImage4} alt="product-image-2" width={80} className={`rounded-md hover:opacity-25 ${current ===3 && 'opacity-25'} cursor-pointer`}/>
                    </div>
                    
                </div>
            </div>
            <div className='px-6 grid gap-6 mb-10 md:mb-0'>     
                <h1 className='grid gap-4 text-3xl font-bold md:w-5/6 md:text-4xl'>
                    <span className='text-sm font-bold text-Darkgrayishblue tracking-[.25em]'>SNEAKER COMPANY</span>
                    Fall Limited Edition Sneakers
                </h1>
                <p className='text-lg text-Darkgrayishblue leading-7 mb-5 md:w-5/6 md:text-md'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='grid gap-5'>
                    <div className='flex justify-between md:grid md:gap-2'>
                        <h1 className='text-3xl font-bold flex items-center gap-3'>$125.00 <span className='bg-black px-4 py-2 text-sm text-White rounded-lg'>50%</span></h1>
                        <span className='text-lg font-bold text-Darkgrayishblue line-through'>$250.00</span>
                    </div>
                    <div className='grid gap-5 md:flex md:w-full'>
                        <button className='md:w-1/2 flex justify-between items-center bg-Lightgrayishblue py-4 px-6 rounded-lg'>
                            <img src={minusIcon} alt="minus-icon" onClick={minus}/>
                            <span className='text-lg font-bold'>{quantity}</span>
                            <img src={plus} alt="plus-icon" onClick={add}/>
                        </button>
                        <button className='md:w-full flex justify-center bg-Orange py-4 rounded-lg font-bold gap-2 shadow-2xl shadow-Orange/40 hover:opacity-50' onClick={addToCart}>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="bg-black" fillRule="nonzero"/></svg>Add to Cart
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}