import React, { useState } from 'react';

interface RoadmapNavigation {
  indexNavigation: number;
  direction?: 'right' | 'left';
  addIndex: () => void;
  minusIndex: () => void;
}

interface ElmOfRoadmapInterface {
  backgroundImageDef: string;
  title: string;
  subTitle: string;
  liList: string[];
  locked: boolean;
}

const listOfRoadmapElm: ElmOfRoadmapInterface[] = [
  {
    backgroundImageDef: 'bg-roadmap-tunnel',
    title: 'Q3-2022',
    subTitle: 'REBRANDING',
    liList: ['Rebranding', 'Website v1;1', 'Patnership with Xoxno'],
    locked: false
  },
  {
    backgroundImageDef: 'bg-roadmap-man-silouette',
    title: 'Q4-2022',
    subTitle: 'WEBSITE V2',
    liList: [
      'Litepaper',
      'Discord opening',
      'Launch of our first product',
      'Beta Testers Campaign'
    ],
    locked: false
  },
  {
    backgroundImageDef: 'bg-roadmap-hexagone-nft',
    title: 'Q1-2023',
    subTitle: 'NFTs MINT 1ST BATCH',
    liList: ['Whitepaper', 'Launch of our second product', 'Nfts mint 2nd batch'],
    locked: false
  },
  {
    backgroundImageDef: 'bg-roadmap-man-silouette',
    title: 'Q2-2023',
    subTitle: 'NFTs MINT 3RD BATCH',
    liList: ['Launch of our third product', 'Nfts mint 4e batch'],
    locked: true
  },
  {
    backgroundImageDef: 'bg-roadmap-hexagone-nft',
    title: 'Q3-2023',
    subTitle: 'Launch of create your raffle',
    liList: ['Nfts mint 5e batch', 'Launch of p2p swap', 'Nfts mint 6e batch', 'Job launch'],
    locked: true
  }
];

const CarreDeNavigation = (props: RoadmapNavigation) => {
  const numberOfState = 4;
  let { indexNavigation, direction } = props;

  const indexManager = () => {
    if (direction === 'left' && indexNavigation > 0) {
      props.minusIndex();
    } else {
      props.addIndex();
    }
  };

  const NavigationOpacityManager = () => {
    if (
      (indexNavigation === 0 && direction === 'left') ||
      (indexNavigation >= numberOfState && direction === 'right')
    ) {
      return (
        <div className="h-[15px] w-[15px] border-white border-t-[3px] border-r-[3px] border-solid transform rotate-45 opacity-25 disabled"></div>
      );
    } else {
      return (
        <div onClick={indexManager}>
          <div className="h-[15px] w-[15px] border-white border-t-[3px] border-r-[3px] border-solid transform rotate-45"></div>
        </div>
      );
    }
  };

  return (
    <>
      <NavigationOpacityManager />
    </>
  );
};

function Carousel(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;

  function goToPrevSlide() {
    setCurrentIndex(currentIndex - 1);
  }

  function goToNextSlide() {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="relative h-64">
      <button
        className="absolute left-0 top-0 p-2 rounded-l-md text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline-blue"
        onClick={goToPrevSlide}
        disabled={currentIndex === 0}>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <img
        className="w-full h-full object-cover"
        src={images[currentIndex]}
        alt="Image du carrousel"
      />
      <button
        className="absolute right-0 top-0 p-2 rounded-r-md text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline-blue"
        onClick={goToNextSlide}
        disabled={currentIndex === images.length - 1}>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export const Roadmap = () => {
  const [indexRoadmap, setCompteur] = useState(0);
  const addIndex = () => {
    setCompteur(indexRoadmap + 1);
  };

  const minusIndex = () => {
    setCompteur(indexRoadmap - 1);
  };

  const returnRightTranslate = () => {
    return `transform translate-x-[-${indexRoadmap}%]`;
  };

  return (
    <>
      <div className="min-h-[900px] pt-[30px] bg-roadmap-bg delaGothicOne">
        <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
          Roadmap
        </h1>
        <li>
          `${returnRightTranslate()}, translate-x-[-
          {indexRoadmap}00%]
        </li>
        <div className="h-[325px] w-[300px] md:w-[600px] rounded-lg mx-auto relative overflow-hidden">
          <div className={`${returnRightTranslate()} transform transition-all duration-700 linear`}>
            <div
              className={`${listOfRoadmapElm[0].backgroundImageDef} h-[325px] w-[300px] 
              rounded-lg md:w-[600px] bg-cover absolute
              transform translate-x-[0%]
              `}></div>
            <div
              className={`${listOfRoadmapElm[1].backgroundImageDef} h-[325px] w-[300px] 
              rounded-lg md:w-[600px] bg-cover absolute
              transform translate-x-[100%]`}></div>
            <div
              className={`${listOfRoadmapElm[2].backgroundImageDef} h-[325px] w-[300px] 
              rounded-lg md:w-[600px] bg-cover absolute 
              transition-all duration-500 linear
              transform translate-x-[200%]`}></div>
            <div
              className={`${listOfRoadmapElm[3].backgroundImageDef} h-[325px] w-[300px] 
              rounded-lg md:w-[600px] bg-cover absolute 
              transition-all duration-500 linear
              transform translate-x-[300%]`}></div>
            <div
              className={`${listOfRoadmapElm[4].backgroundImageDef} h-[325px] w-[300px] 
              rounded-lg md:w-[600px] bg-cover absolute 
              transition-all duration-500 linear
              transform translate-x-[400%]`}></div>
          </div>

          <div className="">
            <div className="flex space-x-[235px] mt-[20px] mb-4 place-content-center">
              <div className="scale-x-[-1]">
                <CarreDeNavigation
                  indexNavigation={indexRoadmap}
                  direction="left"
                  addIndex={addIndex}
                  minusIndex={minusIndex}
                />
              </div>
              <div className="flex justify-end">
                <CarreDeNavigation
                  indexNavigation={indexRoadmap}
                  direction="right"
                  addIndex={addIndex}
                  minusIndex={minusIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel images={['image1.jpg', 'image2.jpg', 'image3.jpg']} />
    </>
  );
};
