import Image from 'next/image';
import React, { useState } from 'react';

const SaveToFullResponsive = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 pb-40">
      <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
        Roadmap
      </h1>
      <div className="mx-auto flex justify-center my-[25px]">
        <Image src="/static/images/Roadmap/RM Logo.png" alt="logoDownlg" width="200" height="200" />
      </div>
      <div className="mx-auto bg-red-700 h-[100px] w-[200px] rounded-bl-[100px] rounded-br-[100px] border-[10px] border-t-[0]">
        <div>
          <li className="rotate-[0deg]"></li>
          <li className="rotate-[180deg]"></li>
          <li className="rotate-[235deg]"></li>
          <li className="rotate-[270deg]"></li>
          <li className="rotate-[315deg]"></li>
        </div>
      </div>
      <div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
};

interface RoadmapNavigation {
  indexNavigation: number;
  direction?: 'right' | 'left';
  addIndex: () => void;
  minusIndex: () => void;
}

const CarreDeNavigation = (props: RoadmapNavigation) => {
  const numberOfState = 4;
  let { indexNavigation, direction } = props;

  const indexManager = () => {
    if (direction === 'right' && indexNavigation < numberOfState) {
      props.addIndex();
      console.log(indexNavigation);
    } else if (direction === 'left' && indexNavigation > 0) {
      props.minusIndex();
      console.log(indexNavigation);
    }
  };

  const NavigationOpacityManager = () => {
    if (
      (indexNavigation === 0 && direction === 'left') ||
      (indexNavigation >= numberOfState && direction === 'right')
    ) {
      return (
        <div className="h-[15px] w-[15px] border-black border-t-[3px] border-r-[3px] border-solid transform rotate-45 opacity-25 disabled"></div>
      );
    } else {
      return (
        <div className="h-[15px] w-[15px] border-black border-t-[3px] border-r-[3px] border-solid transform rotate-45"></div>
      );
    }
  };

  return (
    <>
      <div onClick={indexManager}>
        <NavigationOpacityManager />
      </div>
    </>
  );
};

const MobileFirstRoadmap = () => {
  const [indexRoadmap, setCompteur] = useState(0);

  const [imageCounter, setImageCounter] = useState(0);
  const backgroundList = [
    'bg-roadmap-tunnel',
    'bg-roadmap-man-silouette',
    'bg-roadmap-hexagone-nft',
    'bg-roadmap-man-silouette',
    'bg-roadmap-tunnel'
  ];

  const opacityOfRoadmapProgress = (stateOfProgressToChangeOpacity: number) => {
    if (indexRoadmap >= stateOfProgressToChangeOpacity) {
      return 'opacity-100';
    } else {
      return 'opacity-20';
    }
  };

  const addIndex = () => {
    setCompteur(indexRoadmap + 1);
    setImageCounter(imageCounter + 1);
  };

  const minusIndex = () => {
    setCompteur(indexRoadmap - 1);
    setImageCounter(imageCounter - 1);
  };

  return (
    <>
      <div
        className={`${backgroundList[imageCounter]} brightness-[0.95] filter blur-[0.1px] bg-cover mx-auto h-[300px] w-[300px] rounded-lg md:w-[600px]`}>
        <div className="bg-white h-1 rounded-full transition-all duration-300 ease-in-out">
          <div
            className={`h-full w-${
              indexRoadmap + 1
            }/5 bg-gradient-to-r from-white via-[#cfcff2] to-[#00d4ff] rounded-full transition-all duration-300 ease-in-out`}></div>
        </div>
        <div className="flex space-x-4 place-content-center pt-4 animate-fillPointRoadmap">
          {/* Mettre mes divs pour la roadmap */}
          <div
            className={`bg-black h-[10px] w-[32px] rounded-full ${opacityOfRoadmapProgress(
              0
            )} `}></div>
          <div
            className={`bg-black h-[10px] w-[32px] rounded-full ${opacityOfRoadmapProgress(
              1
            )} `}></div>
          <div
            className={`bg-black h-[10px] w-[32px] rounded-full ${opacityOfRoadmapProgress(
              2
            )} `}></div>
          <div
            className={`bg-black h-[10px] w-[32px] rounded-full ${opacityOfRoadmapProgress(
              3
            )} `}></div>
          <div
            className={`bg-black h-[10px] w-[32px] rounded-full ${opacityOfRoadmapProgress(
              4
            )} `}></div>
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
          <p className="flex justify-center text-titre text-[30px]">Q3-2022</p>
          <p className="flex justify-center uppercase text-red-600 text-[23px] mt-[5px]">
            Rebranding
          </p>
          <div className="mt-[15px] text-[16px]">
            <li>Rebranding</li>
            <li>Website v1;1</li>
            <li>Patnership with Xoxno</li>
          </div>
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
