import { useEffect, useRef, useState } from 'react'
import heroImage from '../assets/images/image-product-1.jpg'
import productImage2 from '../assets/images/image-product-2.jpg'
import productImage3 from '../assets/images/image-product-3.jpg'
import productImage4 from '../assets/images/image-product-4.jpg'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'
import closeIcon from '../assets/images/icon-close.svg'
export function Modal({showmodal,toggleModal}){
    const divElement=useRef(null)
    let [count,setCount]=useState(0)
    const prev=()=>{
        if(count >0){
            const newCount=count-1
            setCount(newCount)
            divElement.current.scrollLeft=newCount*384
            
            
        }else{
            const newCount=0
            setCount(newCount)
            divElement.current.scrollLeft=newCount*384
            
        }
        
    }
    const nextSlide=()=>{
        if(count>=3){
            const newCount=3
            setCount(newCount)
            divElement.current.scrollLeft=newCount*384
            
        }else{
            const newCount=count+1
            setCount(newCount)
            divElement.current.scrollLeft=newCount*384
            
        }
    }
    return(
        <div className={` md:w-full fixed top-0 z-50 full h-[100vh] bg-Black ${!showmodal && 'hidden'}`}>
            <div className='w-[80%] mx-auto md:w-full h-full flex flex-col gap-10 justify-center items-center'>
                <div className='md:w-96'>
                    <svg width="14" height="15" className='justify-self-end mb-2' onClick={toggleModal} xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="White" fillRule="evenodd" /></svg>

                    <div className='flex overflow-hidden' ref={divElement}>
                        <img src={heroImage} alt="product-image" className='rounded-lg'/>
                        <img src={productImage2} alt="product-image" className='rounded-lg'/>
                        <img src={productImage3} alt="product-image" className='rounded-lg'/>
                        <img src={productImage4} alt="product-image" className='rounded-lg'/>
                    </div>
                    
                    <div className='relative z-20 bottom-[13em] flex justify-between px-3'>
                        <button className='bg-White px-4 py-3 rounded-full absolute -left-5'><img src={previous} alt="previous-icon" onClick={prev}/></button>
                        <button className='bg-White px-4 py-3 rounded-full absolute -right-5'><img src={next} alt="next-icon" onClick={nextSlide}/></button>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className={`rounded-lg hover:bg-Lightgrayishblue ${count === 0 ?'border-2 border-Orange bg-Lightgrayishblue':''}`} onClick={
                        ()=>{
                          divElement.current.scrollLeft=0*384
                          setCount(0)
                        }
                    }>
                        <img src={heroImage} alt="" width={60} className={`rounded-lg hover:opacity-25 ${count === 0?'opacity-25':''}`}/>
                    </div>
                    <div className={`rounded-lg hover:bg-Lightgrayishblue ${count === 1 ?'border-2 border-Orange bg-Lightgrayishblue':''}`}onClick={
                        ()=>{
                          divElement.current.scrollLeft=1*384
                          setCount(1)
                        }
                    }>

                        <img src={productImage2} alt="" width={60} className={`rounded-lg hover:opacity-25 ${count === 1?'opacity-25':''}`}/>
                    </div>
                    <div className={`rounded-lg hover:bg-Lightgrayishblue ${count === 2 ?'border-2 border-Orange bg-Lightgrayishblue':''}`} onClick={
                        ()=>{
                          divElement.current.scrollLeft=2*384
                          setCount(2)
                        }
                    }>

                        <img src={productImage3} alt="" width={60} className={`rounded-lg hover:opacity-25 ${count === 2?'opacity-25':''}`}/>
                    </div>
                    <div className={`rounded-lg hover:bg-Lightgrayishblue ${count === 3 ?'border-2 border-Orange bg-Lightgrayishblue':''}`} onClick={
                        ()=>{
                          divElement.current.scrollLeft=3*384
                          setCount(3)
                        }
                    }>        
                        <img src={productImage4} alt="" width={60} className={`rounded-lg hover:opacity-25 ${count === 3?'opacity-25':''}`}/>
                    </div>               
                </div>
            </div>
        </div>
    )
}