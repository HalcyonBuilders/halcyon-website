import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
export const First = () => {
  const element = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      });
    });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, []);

  if (!isAnimated) {
    return (
      <>
        <div className="relative h-[300vh] w-full">
          <div
            className="z-10 animate-starBackground"
            style={{
              height: '0.5px',
              width: '0.5px',
              top: '50%',
              left: '50%',
              backgroundColor: '#fff',
              position: 'sticky',
              borderRadius: '50%',
              boxShadow:
                '21vw 22vh 1px 1px #fff,13vw -49vh 1px 0px #fff,-38vw -40vh 0px 0px #fff,-18vw -23vh 0px 1px #fff,-38vw -49vh 1px 0px #fff,44vw 2vh 0px 1px #fff,-35vw 6vh 0px 1px #fff,-28vw 13vh 1px 0px #fff,-37vw -23vh 0px 0px #fff,-9vw 16vh 0px 0px #fff,21vw -18vh 1px 0px #fff,37vw 28vh 0px 0px #fff,34vw -29vh 0px 1px #fff,35vw 31vh 1px 0px #fff,37vw -6vh 0px 0px #fff,27vw -1vh 1px 1px #fff,-11vw 28vh 0px 1px #fff,-36vw 12vh 0px 1px #fff,4vw 32vh 1px 0px #fff,38vw -38vh 1px 0px #fff,14vw -5vh 1px 0px #fff,30vw 25vh 0px 1px #fff,44vw 7vh 0px 1px #fff,-50vw -23vh 0px 1px #fff,0vw -14vh 0px 0px #fff,50vw -34vh 1px 1px #fff,48vw -46vh 1px 0px #fff,41vw 32vh 1px 0px #fff,23vw -20vh 0px 1px #fff,23vw -13vh 1px 0px #fff,-49vw -48vh 0px 1px #fff,29vw -12vh 1px 1px #fff,-33vw 50vh 0px 0px #fff,30vw 14vh 1px 1px #fff,20vw -26vh 0px 0px #fff,-16vw -31vh 1px 0px #fff,40vw 1vh 0px 1px #fff,-28vw -43vh 0px 1px #fff,13vw 48vh 1px 0px #fff,49vw -43vh 0px 0px #fff,12vw 45vh 0px 0px #fff,-2vw -22vh 1px 0px #fff,-2vw -41vh 1px 0px #fff,6vw 13vh 1px 0px #fff,-36vw 17vh 1px 1px #fff,29vw -41vh 0px 1px #fff,-32vw 15vh 1px 0px #fff,19vw -44vh 0px 0px #fff,-16vw 31vh 1px 0px #fff,15vw 30vh 1px 0px #fff,-34vw 35vh 0px 1px #fff,13vw -1vh 1px 0px #fff,-7vw -22vh 0px 1px #fff,-20vw -35vh 0px 0px #fff,13vw -37vh 0px 0px #fff,-26vw 50vh 1px 1px #fff,-25vw 40vh 1px 0px #fff,45vw 8vh 0px 1px #fff,-24vw 26vh 0px 0px #fff,48vw 33vh 0px 0px #fff,-17vw -26vh 0px 1px #fff,46vw 36vh 0px 0px #fff,46vw -35vh 0px 0px #fff,-43vw -44vh 1px 0px #fff,1vw -49vh 1px 0px #fff,-37vw 12vh 0px 1px #fff,-49vw -31vh 1px 0px #fff,28vw 22vh 0px 0px #fff,2vw -30vh 1px 0px #fff,-3vw -24vh 0px 0px #fff,-45vw -16vh 0px 1px #fff,44vw -45vh 0px 1px #fff,-23vw -33vh 0px 0px #fff,-49vw 28vh 0px 1px #fff,-30vw 5vh 0px 0px #fff,31vw -5vh 1px 1px #fff,-12vw -28vh 0px 0px #fff,-43vw 49vh 0px 1px #fff,49vw 20vh 0px 0px #fff,-39vw 20vh 1px 1px #fff,-20vw 42vh 1px 1px #fff,-47vw -50vh 1px 1px #fff,-23vw 44vh 0px 1px #fff,34vw 21vh 1px 1px #fff,-43vw -9vh 1px 0px #fff,-28vw 12vh 0px 1px #fff,27vw 38vh 1px 0px #fff,-35vw -14vh 0px 1px #fff,-21vw 1vh 0px 0px #fff,-31vw 45vh 0px 0px #fff,22vw -33vh 0px 0px #fff,-6vw 23vh 0px 1px #fff,8vw -36vh 0px 1px #fff,0vw -43vh 1px 0px #fff,-2vw 29vh 1px 1px #fff,46vw -10vh 1px 0px #fff,-24vw 47vh 0px 0px #fff,-40vw 41vh 1px 0px #fff,-20vw -32vh 1px 0px #fff,33vw -26vh 1px 0px #fff'
            }}
          ></div>
          <div
            ref={element}
            className="z-20 absolute h-[100vh] w-full flex justify-start lg:pl-36 lg:pr-[35vw] transform scale-[0.5]"
          >
            <div className="bg-no-repeat bg-left bg-cover bg-[url('/static/images/HeroLab.png')] lg:rounded-lg w-full"></div>
          </div>
          <div className="z-20 relative h-[15vh] w-full flex justify-start lg:pl-16 lg:pr-[15vw]">
            <div className="w-full textBoxShadow text-8xl font-semibold py-3 saira flex justify-end uppercase transform scale-[0.5] opacity-0 translate-x-0">
              Building the future of Web3
            </div>
          </div>
          <div className="z-20 relative h-[15vh] w-full flex justify-start lg:pl-16 lg:pr-[15vw]">
            <div className="w-full textBoxShadow text-8xl font-semibold py-3 saira flex justify-start uppercase transform scale-[0.5] opacity-0">
              The Vision
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative h-[300vh] w-full">
        <div
          className="z-10 animate-starBackground"
          style={{
            height: '0.5px',
            width: '0.5px',
            top: '50%',
            left: '50%',
            backgroundColor: '#fff',
            position: 'sticky',
            borderRadius: '50%',
            boxShadow:
              '21vw 22vh 1px 1px #fff,13vw -49vh 1px 0px #fff,-38vw -40vh 0px 0px #fff,-18vw -23vh 0px 1px #fff,-38vw -49vh 1px 0px #fff,44vw 2vh 0px 1px #fff,-35vw 6vh 0px 1px #fff,-28vw 13vh 1px 0px #fff,-37vw -23vh 0px 0px #fff,-9vw 16vh 0px 0px #fff,21vw -18vh 1px 0px #fff,37vw 28vh 0px 0px #fff,34vw -29vh 0px 1px #fff,35vw 31vh 1px 0px #fff,37vw -6vh 0px 0px #fff,27vw -1vh 1px 1px #fff,-11vw 28vh 0px 1px #fff,-36vw 12vh 0px 1px #fff,4vw 32vh 1px 0px #fff,38vw -38vh 1px 0px #fff,14vw -5vh 1px 0px #fff,30vw 25vh 0px 1px #fff,44vw 7vh 0px 1px #fff,-50vw -23vh 0px 1px #fff,0vw -14vh 0px 0px #fff,50vw -34vh 1px 1px #fff,48vw -46vh 1px 0px #fff,41vw 32vh 1px 0px #fff,23vw -20vh 0px 1px #fff,23vw -13vh 1px 0px #fff,-49vw -48vh 0px 1px #fff,29vw -12vh 1px 1px #fff,-33vw 50vh 0px 0px #fff,30vw 14vh 1px 1px #fff,20vw -26vh 0px 0px #fff,-16vw -31vh 1px 0px #fff,40vw 1vh 0px 1px #fff,-28vw -43vh 0px 1px #fff,13vw 48vh 1px 0px #fff,49vw -43vh 0px 0px #fff,12vw 45vh 0px 0px #fff,-2vw -22vh 1px 0px #fff,-2vw -41vh 1px 0px #fff,6vw 13vh 1px 0px #fff,-36vw 17vh 1px 1px #fff,29vw -41vh 0px 1px #fff,-32vw 15vh 1px 0px #fff,19vw -44vh 0px 0px #fff,-16vw 31vh 1px 0px #fff,15vw 30vh 1px 0px #fff,-34vw 35vh 0px 1px #fff,13vw -1vh 1px 0px #fff,-7vw -22vh 0px 1px #fff,-20vw -35vh 0px 0px #fff,13vw -37vh 0px 0px #fff,-26vw 50vh 1px 1px #fff,-25vw 40vh 1px 0px #fff,45vw 8vh 0px 1px #fff,-24vw 26vh 0px 0px #fff,48vw 33vh 0px 0px #fff,-17vw -26vh 0px 1px #fff,46vw 36vh 0px 0px #fff,46vw -35vh 0px 0px #fff,-43vw -44vh 1px 0px #fff,1vw -49vh 1px 0px #fff,-37vw 12vh 0px 1px #fff,-49vw -31vh 1px 0px #fff,28vw 22vh 0px 0px #fff,2vw -30vh 1px 0px #fff,-3vw -24vh 0px 0px #fff,-45vw -16vh 0px 1px #fff,44vw -45vh 0px 1px #fff,-23vw -33vh 0px 0px #fff,-49vw 28vh 0px 1px #fff,-30vw 5vh 0px 0px #fff,31vw -5vh 1px 1px #fff,-12vw -28vh 0px 0px #fff,-43vw 49vh 0px 1px #fff,49vw 20vh 0px 0px #fff,-39vw 20vh 1px 1px #fff,-20vw 42vh 1px 1px #fff,-47vw -50vh 1px 1px #fff,-23vw 44vh 0px 1px #fff,34vw 21vh 1px 1px #fff,-43vw -9vh 1px 0px #fff,-28vw 12vh 0px 1px #fff,27vw 38vh 1px 0px #fff,-35vw -14vh 0px 1px #fff,-21vw 1vh 0px 0px #fff,-31vw 45vh 0px 0px #fff,22vw -33vh 0px 0px #fff,-6vw 23vh 0px 1px #fff,8vw -36vh 0px 1px #fff,0vw -43vh 1px 0px #fff,-2vw 29vh 1px 1px #fff,46vw -10vh 1px 0px #fff,-24vw 47vh 0px 0px #fff,-40vw 41vh 1px 0px #fff,-20vw -32vh 1px 0px #fff,33vw -26vh 1px 0px #fff'
          }}
        ></div>
        <div
          ref={element}
          className="z-20 absolute h-[100vh] w-full flex justify-start lg:pl-36 lg:pr-[35vw] sm:pl-14 sm:pr-[20vw] animate-imageTransition"
        >
          <div className="bg-no-repeat bg-left bg-cover bg-[url('/static/images/HeroLab.png')] lg:rounded-lg w-full">
            <div className='h-[100vh] absolute flex justify-start items-center pl-6 sm:pl-24'>
              <div className='text-4xl font-medium text-gray-400'>Our</div>
            </div>
            <div className='h-[100vh] absolute flex justify-start items-center pl-6 sm:pl-24 top-12'>
              <div className='textBoxShadow text-5xl font-bold'>Mission</div>
            </div>
            <div className='h-[100vh] w-[300px] sm:w-96 absolute flex justify-start items-center pl-6 sm:pl-24 top-44'>
              <div className='text-md font-regular'>Web3 has immense potential and can disrupt our societies in the long run, but for now it is mostly dangerous. We believe that reliable and trustworthy infrastructures are essential to create a healthy foundation for this new decentralized internet.</div>
            </div>
          </div>
        </div>
        <div className="z-20 relative sm:h-[15vh] w-full flex justify-start xl:pr-[30vw] lg:pr-[20vw] sm:pr-[15vw]">
          <div className="w-full textBoxShadow px-6 lg:text-8xl sm:text-7xl text-6xl font-bold sm:py-3 saira flex justify-start sm:justify-end uppercase animate-imageTransition translate-x-0">
            Building the
          </div>
        </div>
        <div className="z-20 relative sm:h-[15vh] w-full flex justify-start xl:pl-16 lg:pl-14 sm:pl-4">
          <div className="w-full textBoxShadow px-6 sm:px-0 lg:text-8xl sm:text-7xl text-6xl font-bold sm:py-3 saira flex justify-start sm:justify-start uppercase animate-imageTransition">
            future of Web3
          </div>
        </div>
      </div>
    </>
  );
};