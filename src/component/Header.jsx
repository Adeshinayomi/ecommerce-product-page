import { useState } from 'react'
import { Cart } from './Cart.jsx'
import menubar from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
import closeIcon from '../assets/images/icon-close.svg'

export function Header({cart,deleteItem}){
    const [showMenu,setShowMenu]=useState(false)
   const [iscarthidden,setIscarthidden]=useState(false)

    function toggleCart(){
        if(iscarthidden){
            setIscarthidden(false)
        }else{
            setIscarthidden(true)
        }
    }
    const showCart=()=>{
        toggleCart()
    }

    function toggleMenu(){
        if(showMenu){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
        
    }
    return(
        <header className='w-full grid bg-White fixed z-50 top-0 md:relative md:p-8 md:w-[90%] md:mx-auto'>
            
            <div className='w-full flex px-6 py-4 justify-between '>
                <div className='flex gap-4 items-center md:gap-8'>
                    <img src={menubar} alt="menu-icon" className='md:hidden' onClick={toggleMenu}/>
                    <img src={logo} alt="Logo"/>

                    <div className={`${showMenu?'':'hidden'} md:grid absolute z-50 top-0 left-0 w-full h-[100vh] bg-Black md:relative md:h-0`}>
                        <ul className='w-[65%] h-[100vh] md:h-0 md:items-center bg-white px-6 flex flex-col md:flex md:flex-row gap-6'> 
                            <li className='md:hidden' onClick={toggleMenu}><img src={closeIcon} alt="close icon" width={20} className='mb-8 mt-5'/></li>
                            <li className='text-black font-bold text-lg md:font-md md:text-Darkgrayishblue font-md md:hover:underline underline-offset-[2em] decoration-4 decoration-Orange cursor-pointer'>Collections</li>
                            <li className='text-black font-bold text-lg md:text-Darkgrayishblue font-md md:hover:underline underline-offset-[2em] decoration-4 decoration-Orange cursor-pointer'>Men</li>
                            <li className='text-black font-bold text-lg md:text-Darkgrayishblue font-md md:hover:underline underline-offset-[2em] decoration-4 decoration-Orange cursor-pointer'>Women</li>
                            <li className='text-black font-bold text-lg md:text-Darkgrayishblue font-md md:hover:underline underline-offset-[2em] decoration-4 decoration-Orange cursor-pointer'>About</li>
                            <li className='text-black font-bold text-lg md:text-Darkgrayishblue font-md md:hover:underline underline-offset-[2em] decoration-4 decoration-Orange cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    
                </div>
                

                <div className='flex gap-4 items-center'>
                    <div className='relative'>
                        <span className='absolute -top-4 -right-3 bg-Orange text-White rounded-full px-2 text-sm'>{cart.quantity}</span>
                        <img src={cartIcon} alt="cart-icon" width={30} className='cursor-pointer' onClick={showCart}/>
                    </div>
                    
                    <img src={profileIcon} alt="profile-icon" width={40} className='border-2 hover:border-Orange rounded-full cursor-pointer'/>
                </div>
            </div> 

            <hr className='hidden md:grid mx-8 mt-2'/>

            <div className={`${iscarthidden?'grid':'hidden'} w-[95%] top-[110%] right-2 md:w-[25%] absolute md:top-[65%] md:right-10 bg-white shadow-2xl z-20 rounded-lg pb-5`}>
                <h4 className='text-lg font-md p-4'>Cart</h4>
                <hr />
                {Object.keys(cart).length >0 && <Cart cart={cart} deleteItem={deleteItem}/>}
                
                <div className={`grid justify-center items-center h-48 md:h-36 ${Object.keys(cart).length === 0?'':'hidden'}`}>
                    <p className='text-Darkgrayishblue text-xl font-md'>Your cart is empty</p>
                </div>
            </div>
        </header>
    )
}