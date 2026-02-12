import menubar from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
export function Header(){
    return(
        <header className='w-full grid bg-White fixed top-0 md:relative md:p-8 md:w-[90%] md:mx-auto'>
            <div className='w-full flex px-6 py-4 justify-between '>
                <div className='flex gap-4 items-center md:gap-8'>
                    <img src={menubar} alt="menu-icon" className='md:hidden'/>
                    <img src={logo} alt="Logo"/>

                    <ul className='hidden md:flex gap-6'>
                        <li className='text-Darkgrayishblue font-md'>Collections</li>
                        <li className='text-Darkgrayishblue font-md'>Men</li>
                        <li className='text-Darkgrayishblue font-md'>Women</li>
                        <li className='text-Darkgrayishblue font-md'>About</li>
                        <li className='text-Darkgrayishblue font-md'>Contact</li>
                    </ul>
                </div>
                

                <div className='flex gap-4 items-center'>
                    <img src={cartIcon} alt="cart-icon" width={30}/>
                    <img src={profileIcon} alt="profile-icon" width={30}/>
                </div>
            </div> 
            <hr className='hidden md:grid mx-8 mt-8'/>
        </header>
    )
}