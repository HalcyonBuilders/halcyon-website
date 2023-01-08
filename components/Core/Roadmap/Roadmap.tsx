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
  percent: number;
}

const listOfRoadmapElm: ElmOfRoadmapInterface[] = [
  {
    backgroundImageDef: 'bg-roadmap-tunnel',
    title: 'Q3-2022',
    subTitle: 'REBRANDING',
    liList: ['Rebranding', 'Website v1;1', 'Patnership with Xoxno'],
    percent: 20
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
    percent: 40
  },
  {
    backgroundImageDef: 'bg-roadmap-hexagone-nft',
    title: 'Q1-2023',
    subTitle: 'NFTs MINT 1ST BATCH',
    liList: ['Whitepaper', 'Launch of our second product', 'Nfts mint 2nd batch'],
    percent: 60
  },
  {
    backgroundImageDef: 'bg-roadmap-man-silouette',
    title: 'Q2-2023',
    subTitle: 'NFTs MINT 3RD BATCH',
    liList: ['Launch of our third product', 'Nfts mint 4e batch'],
    percent: 80
  },
  {
    backgroundImageDef: 'bg-roadmap-hexagone-nft',
    title: 'Q3-2023',
    subTitle: 'Launch of create your raffle',
    liList: ['Nfts mint 5e batch', 'Launch of p2p swap', 'Nfts mint 6e batch', 'Job launch'],
    percent: 100
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

const MobileFirstRoadmap = () => {
  const [indexRoadmap, setCompteur] = useState(0);

  const addIndex = () => {
    setCompteur(indexRoadmap + 1);
  };

  const minusIndex = () => {
    setCompteur(indexRoadmap - 1);
  };

  const RoadmapProgress = () => {
    switch (indexRoadmap) {
      case 0:
        return `translate-x-[-80%]`;
      case 1:
        return `translate-x-[-60%]`;
      case 2:
        return `translate-x-[-40%]`;
      case 3:
        return `translate-x-[-20%]`;
      case 4:
        return `translate-x-[-0%]`;
      default:
        break;
    }
    return `translate-x-[-${100 - ((indexRoadmap + 1) / 5) * 100}%]`;
  };

  const displayLiList = () => {
    return listOfRoadmapElm[indexRoadmap].liList.map((itemSet) => <li key={itemSet}>{itemSet}</li>);
  };

  const displayBackground = () => {
    return listOfRoadmapElm[indexRoadmap].backgroundImageDef;
  };

  return (
    <>
      <div className={`${displayBackground()} brightness-[0.95] filter blur-[0.1px] bg-cover mx-auto h-[325px] w-[300px] rounded-lg md:w-[600px] transition duration-600  ease` }>
        <div className="relative bg-[#ececec] h-1 rounded-full overflow-hidden">
          <div className={`h-full w-full bg-gradient-to-r from-[#b8a7fc] via-[#48b1c5] to-[#008eab] transition-all duration-500 ease-out inset-0 absolute rounded-full ${RoadmapProgress()}`}>

          </div>
        </div>

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
        <div
          className="mt-4 w-4/5 mx-auto "
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
          <p className="flex justify-center text-[#0ab0d6] text-[30px] ">
            {listOfRoadmapElm[indexRoadmap].title}
          </p>
          <p className="flex justify-center uppercase text-white text-[23px] mt-[5px] translate-y-10">
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
        <MobileFirstRoadmap />
      </div>
      {/* Faire une div pour le content avec les textes   */}
      {/* 1 div avec la barre de progression et dedans les points taille env 26px  */}
      {/* on retrouve une div pour les rond actif et 1 div pour les ronds non actif */}
      {/* 1 div par paragraphe avec une position absolute */}

      {/* <SaveToFullResponsive/> a faire quand on aura le temps de facons full html css voir avec des svg correcte */}
    </>
  );
};
