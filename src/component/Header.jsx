import menubar from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import profileIcon from '../assets/images/image-avatar.png'
export function Header(){
    return(
        <header className='w-full flex px-6 py-4 justify-between bg-White fixed'>
            <div className='flex gap-4 items-center'>
                <img src={menubar} alt="menu-icon" />
                <img src={logo} alt="Logo"/>
            </div>
            

            <div className='flex gap-4 items-center'>
                <img src={cartIcon} alt="cart-icon" width={30}/>
                <img src={profileIcon} alt="profile-icon" width={30}/>
            </div>
        </header>
    )
}