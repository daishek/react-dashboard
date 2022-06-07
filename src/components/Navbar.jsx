import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../context/contextProvider'
import { Cart, Chat, Notification, UserProfile } from '.';
import avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 duration-300 hover:bg-light-gray'
    >
      <span style={{backgroundColor: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton title='Menu'icon={<AiOutlineMenu />} dotColor='red' color='black' customFunc={()=>handleActiveMenu()} />
      <div className="flex">
        <NavButton title='Menu'icon={<FiShoppingCart />} dotColor='red' color='black' customFunc={()=>handleClick('cart')} />
        <NavButton title='Menu'icon={<BsChatLeft />} dotColor='red' color='black' customFunc={()=>handleClick('chat')} />
        <NavButton title='Menu'icon={<RiNotification3Line />} dotColor='red' color='black' customFunc={()=>handleClick('notification')} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div 
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img src={avatar} className='rounded-full w-8 h-8' alt="user-profile" />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{' '}
              <span className='text-gray-400 font-body ml-1 text-14'>Dai</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar