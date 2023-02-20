import React, {  useEffect, useRef, useState } from 'react';
interface Props {
  // any props that come into the component
  title?: string | undefined;
  text?: string | undefined;
}
export const Faq = ({
  title,
  text,
  ...props
}: Props) => {
  const [hamburgerController, setActive] = useState(false); //use state for hamburger state controller (x or =)
  const toggleClass = () => {
    setActive(!hamburgerController);
  };
  
  const heightClassController = () => {
    if (hamburgerController) {
      return 'h-[230px] sm:h-[180px] z-10 bg-white relative w-full rounded-lg transition-productCard duration-500';
    } else return 'h-[65px] z-10 bg-white relative w-full rounded-lg transition-productCard duration-500';
  };

  const textVisibilityController = () => {
    if (hamburgerController) {
      return 'w-full h-[165px] sm:h-[115px] bg-transparent rounded-b-lg flex justify-start';
    } else return 'hidden';
  };

  return (
    <>
      <div>
      <div
        className="top-0 bg-transparent w-full relative z-10 saira md:px-4 lg:px-24 xl:px-36 animate-textTransition cursor-pointer"
        onClick={toggleClass}
      >
        <div className={heightClassController()}>
          <div className='w-full h-[65px] bg-white rounded-lg flex justify-start items-center'>
            <div className='pl-8 text-black font-black text-md sm:text-xl lg:text-2xl'>{title}</div>
          </div>
          <div className={textVisibilityController()}>
            <div className='pl-8 pr-8 sm:pr-16 text-black font-regular xl:text-[18px] lg:text-[15px] md:text-sm sm:text-xs text-xs'>
              {text}
            </div>
          </div>
          <div
            className="absolute space-y-1.5 top-7 right-6"
          >
            <span
              className={
                hamburgerController
                  ? 'block w-5 h-0.5 bg-black transition-transform duration-300 translate-y-1'
                  : 'block w-5 h-0.5 bg-black transition-transform duration-300 rotate-90 translate-y-1'
              }
            ></span>
            <span
              className={
                hamburgerController
                  ? 'block w-5 h-0.5 bg-black transition-transform duration-300 -translate-y-1'
                  : 'block w-5 h-0.5 bg-black transition-transform duration-300 -translate-y-1 '
              }
            ></span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
