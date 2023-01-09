import React, { useEffect, useState, useRef, ReactNode } from 'react';
import Image from 'next/image';
interface Props {
  // any props that come into the component
  title?: ReactNode;
  text?: ReactNode;
  imageClass?: ReactNode;
  buttonText?: ReactNode;
  buttonHref?: string | undefined;
  backGroundImageClass?: ReactNode;
}
export const ProductsCard = ({
  title,
  text,
  imageClass,
  buttonText,
  buttonHref,
  backGroundImageClass,
  ...props
}: Props) => {
  const [isHover, setIsHover] = useState(false); //use state for hamburger state controller (x or =)
  const toggleClassTrue = () => {
    setIsHover(true);
  };
  const toggleClassFalse = () => {
    setIsHover(false);
  };

  const hoverClassMainDiv = () => {
    if (isHover) {
      return 'hidden bg-transparent md:flex md:h-[60vh] lg:h-[60vh] xl:w-[20vw] lg:w-[30vw] md:w-[33vw] md:rounded-lg md:transition-productCard md:duration-500 md:saira';
    } else
      return 'hidden bg-transparent md:flex md:h-[60vh] lg:h-[60vh] xl:w-[15vw] lg:w-[25vw] md:w-[27vw] md:rounded-lg md:transition-productCard md:duration-500 md:saira';
  };

  const hoverClassBlueDiv = () => {
    if (isHover) {
      return 'absolute bottom-0 bg-cyan-900 opacity-70 xl:w-[20vw] lg:w-[30vw] md:w-[33vw] h-[60vh] rounded-lg transition-productCard duration-500';
    } else
      return 'absolute rounded-lg bottom-0 bg-cyan-900 opacity-70  xl:w-[15vw] lg:w-[25vw] md:w-[27vw] h-[0vh] transition-productCard duration-500';
  };

  const hoverClassTitle = () => {
    if (isHover) {
      return 'absolute rounded-b-lg flex justify-center bottom-0 xl:w-[20vw] lg:w-[30vw] md:w-[33vw] h-[57vh] transition-productCard duration-500';
    } else
      return 'absolute rounded-b-lg flex justify-center bottom-0  xl:w-[15vw] lg:w-[25vw] md:w-[27vw] h-[10vh] transition-productCard duration-500';
  };

  const hoverClassArrow = () => {
    if (isHover) {
      return 'absolute rounded-b-lg flex justify-center bottom-0  xl:w-[20vw] lg:w-[30vw] md:w-[33vw] h-[5vh] transition-productCard duration-500 rotate-180';
    } else
      return 'absolute rounded-b-lg flex justify-center bottom-0  xl:w-[15vw] lg:w-[25vw] md:w-[27vw] h-[5vh] transition-productCard duration-500';
  };

  const hoverClassText = () => {
    if (isHover) {
      return 'absolute rounded-b-lg flex justify-center items-center bottom-0 xl:w-[20vw] lg:w-[30vw] md:w-[33vw] h-[60vh] transition-productCard duration-500 animate-textTransition2';
    } else return 'hidden';
  };

  const hoverClassButton = () => {
    if (isHover) {
      return 'absolute bg-transparent flex justify-center bottom-5 xl:w-[20vw] lg:w-[30vw] md:w-[33vw] h-[10vh] animate-textTransition2';
    } else return 'hidden';
  };

  return (
    <>
      <div
        className={hoverClassMainDiv()}
        onMouseEnter={toggleClassTrue}
        onMouseLeave={toggleClassFalse}
      >
        {/* @ts-ignore */}
        <div className={backGroundImageClass}></div>
        <div className={hoverClassBlueDiv()}></div>
        <div className={hoverClassTitle()}>
          <div className="font-bold text-xl textBoxShadow text-white">{title}</div>
        </div>
        <div className={hoverClassArrow()}>
          <Image
            src="/static/svg/chevron-down.svg"
            alt="logoDownlg"
            width="20"
            height="20"
          />
        </div>
        <div className={hoverClassText()}>
          <div className="font-semibold text-md text-center px-4 text-white">{text}</div>
        </div>
        <div className={hoverClassButton()}>
          <div className="xl:w-[10vw] lg:w-[20vw] h-[5vh] bg-white rounded-lg flex justify-center items-center cursor-pointer hover:border-2 hover:border-cyan-500">
            <a target="_blank" href={buttonHref} className="absolute w-[10vw] h-[5vh]"></a>
            <div className="font-semibold text-cyan-500 text-lg text-center px-4">{buttonText}</div>
          </div>
        </div>
      </div>
    </>
  );
};
