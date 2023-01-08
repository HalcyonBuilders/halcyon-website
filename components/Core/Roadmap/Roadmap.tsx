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

const CarreDeNavigation = (props: RoadmapNavigation) => {
  const numberOfState = 4;
  let { indexNavigation, direction } = props;

  const indexManager = () => {
    if (direction === 'left' && indexNavigation > 0) {
      props.minusIndex();
      props.nextBg();
    } else {
      props.addIndex();
      props.minusBg();
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

const MobileFirstRoadmap = () => {
  const [indexRoadmap, setCompteur] = useState(0);
  const [listValueBg, setListValue] = useState([0, 100, 200, 300, 400]);

  const addIndex = () => {
    setCompteur(indexRoadmap + 1);
  };

  const minusIndex = () => {
    setCompteur(indexRoadmap - 1);
  };

  const nextBg = () => {
    setListValue(listValueBg.map((item) => item + 100));
  };
  const minusBg = () => {
    setListValue(listValueBg.map((item) => item - 100));
  };

  const RoadmapProgress = () => {
    return `translate-x-[-${100 - ((indexRoadmap + 1) / 5) * 100}%]`;
  };

  const displayLiList = () => {
    return listOfRoadmapElm[indexRoadmap].liList.map((itemSet) => <li key={itemSet}>{itemSet}</li>);
  };

  const displayBackground = () => {
    return (
      <>
        <div
          className={`${listOfRoadmapElm[0].backgroundImageDef} h-[325px] w-[300px] 
    rounded-lg md:w-[600px] bg-cover absolute translate-x-[${listValueBg[0]}%] transition-all duration-500 linear`}></div>
        <div
          className={`${listOfRoadmapElm[1].backgroundImageDef} h-[325px] w-[300px] 
      rounded-lg md:w-[600px] bg-cover absolute translate-x-[${listValueBg[1]}%] transition-all duration-500 linear`}></div>
        <div
          className={`${listOfRoadmapElm[2].backgroundImageDef} h-[325px] w-[300px] 
      rounded-lg md:w-[600px] bg-cover absolute translate-x-[${listValueBg[2]}%] transition-all duration-500 linear`}></div>
        <div
          className={`${listOfRoadmapElm[3].backgroundImageDef} h-[325px] w-[300px] 
      rounded-lg md:w-[600px] bg-cover absolute translate-x-[${listValueBg[3]}%] transition-all duration-500 linear`}></div>
        <div
          className={`${listOfRoadmapElm[4].backgroundImageDef} h-[325px] w-[300px] 
      rounded-lg md:w-[600px] bg-cover absolute translate-x-[${listValueBg[4]}%] transition-all duration-500 linear`}></div>
      </>
    );
  };

  const rollTitle = () => {
    return (
      <>
        <div className="absolute transition-transform duration-500 ease-in-out transform: rotateX(360deg)">
          {listOfRoadmapElm[0].title}
        </div>
        <div className="absolute transition-transform duration-500 ease-in-out transform: rotateX(360deg)">
          {listOfRoadmapElm[1].title}
        </div>
        <div className="absolute">{listOfRoadmapElm[2].title}</div>
        <div className="absolute">{listOfRoadmapElm[3].title}</div>
        <div className="absolute">{listOfRoadmapElm[4].title}</div>
      </>
    );
  };

  return (
    <>
      <div className="h-[325px] w-[300px] md:w-[600px] brightness-[0.85] absolute overflow-hidden">
        {displayBackground()}
      </div>

      {/* <div
          className={`bg-roadmap-man-silouette brightness-[0.90] h-[325px] w-[300px] 
        rounded-lg md:w-[600px] bg-cover transition duration-600 ease-out absolute transition-all duration-500 ease`}></div> */}

      <div className="relative bg-[#ececec] h-1 rounded-full overflow-hidden">
        <div
          className={`h-full w-full bg-gradient-to-r from-[#b8a7fc] via-[#48b1c5] to-[#008eab] transition-all duration-500 ease-out inset-0 absolute rounded-full ${RoadmapProgress()}`}></div>
      </div>

      <div className="flex space-x-[235px] mt-[20px] mb-4 place-content-center">
        <div className="scale-x-[-1]">
          <CarreDeNavigation
            indexNavigation={indexRoadmap}
            listBg={listValueBg}
            direction="left"
            addIndex={addIndex}
            minusIndex={minusIndex}
            minusBg={minusBg}
            nextBg={nextBg}
          />
        </div>
        <div className="flex justify-end">
          <CarreDeNavigation
            indexNavigation={indexRoadmap}
            listBg={listValueBg}
            direction="right"
            addIndex={addIndex}
            minusIndex={minusIndex}
            minusBg={minusBg}
            nextBg={nextBg}
          />
        </div>
      </div>
      <div
        className="mt-4 w-4/5 mx-auto overflow-hidden z-10 relative"
        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        <div className="">
          <p className="flex justify-center h-[40px] text-[#0ab0d6] text-[30px] ">
            <div className="absolute">{listOfRoadmapElm[0].title}</div>
            <div className="absolute">{listOfRoadmapElm[1].title}</div>
          </p>
          <p className="flex justify-center uppercase text-white text-[23px] mt-[5px]">
            {listOfRoadmapElm[indexRoadmap].subTitle}
          </p>
          <div className="mt-[15px] text-[16px] text-white">{displayLiList()}</div>
        </div>
      </div>
    </>
  );
};

export const Roadmap = () => {
  return (
    <>
      {/* min height de 1024 px petit padding de 30 */}

      <div className="min-h-[900px] pt-[30px] bg-roadmap-bg delaGothicOne">
        {/* titre */}
        <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
          Roadmap
        </h1>
        <div className="h-[325px] w-[300px] rounded-lg md:w-[600px] mx-auto">
          <MobileFirstRoadmap />
        </div>
      </div>
      {/* Faire une div pour le content avec les textes   */}
      {/* 1 div avec la barre de progression et dedans les points taille env 26px  */}
      {/* on retrouve une div pour les rond actif et 1 div pour les ronds non actif */}
      {/* 1 div par paragraphe avec une position absolute */}

      {/* <SaveToFullResponsive/> a faire quand on aura le temps de facons full html css voir avec des svg correcte */}
    </>
  );
};
