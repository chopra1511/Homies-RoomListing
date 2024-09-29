import React from 'react'

const FooterBar = ({iconClass, label}) => {
    return (
        <div className="footer-bar cursor-pointer">
            <div className='flex flex-col items-center text-gray-500 hover:text-black'>
                <i className={`${iconClass} text-xl py-1 px-2`}></i>
                <h1 className='text-[12px] font-Poppins font-medium'>{label}</h1>
            </div>
        </div>
    );
}

const FooterNav = () => {
  return (
    <div className='px-5 py-3 flex justify-between bg-white border-t-2'>
      <FooterBar iconClass={"fi fi-rr-search"} label={"Explore"} />
      <FooterBar iconClass={"fi fi-rr-heart"} label={"Wishlists"} />
      <FooterBar iconClass={"fi fi-rr-airplane-journey"} label={"Trips"} />
      <FooterBar iconClass={"fi fi-rr-messages"} label={"Messages"} />
      <FooterBar iconClass={"fi fi-rr-user"} label={"Profile"} />
    </div>
  );
}

export default FooterNav
