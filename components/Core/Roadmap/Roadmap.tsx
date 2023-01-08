import React, { useState } from 'react';

interface RoadmapNavigation {
  indexNavigation: number;
  listBg: number[];
  direction?: 'right' | 'left';
  addIndex: () => void;
  minusIndex: () => void;
  nextBg: () => void;
  minusBg: () => void;
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

export const Roadmap = () => {
  const [indexRoadmap, setCompteur] = useState(0);

  return (
    <>
      <div className="min-h-[900px] pt-[30px] bg-roadmap-bg delaGothicOne">
        <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
          Roadmap
        </h1>

        <div className="h-[325px] w-[300px] md:w-[600px] rounded-lg mx-auto relative overflow-hidden">
          <div className={`transform translate-x-[-${0}00%] transition-all duration-700 linear`}>
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
        </div>
      </div>
    </>
  );
};
