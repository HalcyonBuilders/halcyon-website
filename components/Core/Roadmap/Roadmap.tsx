import Image from 'next/image';

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

const CarreDeNavigation = () => {
  return (
    <>
      <div className="h-[12px] w-[12px] border-black border-t-2 border-r-2 border-solid transform rotate-45"></div>
    </>
  );
};

const MobileFirstRoadmap = () => {
  return (
    <>
      <div className="bg-red-700 mx-auto h-[400px] w-[400px] rounded-lg md:w-[600px] pt-2">
        <div className="flex space-x-4 place-content-center">
          {/* Mettre mes divs pour la roadmap */}
          <div className="bg-black h-[10px] w-[50px] rounded-full"></div>
          <div className="bg-black h-[10px] w-[50px] rounded-full"></div>
          <div className="bg-black h-[10px] w-[50px] rounded-full"></div>
          <div className="bg-black h-[10px] w-[50px] rounded-full"></div>
          <div className="bg-black h-[10px] w-[50px] rounded-full"></div>
        </div>
        <div className="flex space-x-6 mt-2">
          <div className="scale-x-[-1]">
            <CarreDeNavigation />
          </div>
          <div className="flex justify-end">
            <CarreDeNavigation />
          </div>
        </div>
      </div>
      <div className="bg-roadmap h-[100px] w-[100px]"></div>
    </>
  );
};

export const Roadmap = () => {
  return (
    <>
      {/* min height de 1024 px petit padding de 30 */}

      <div className="min-h-[900px] pt-[30px] bg-roadmap delaGothicOne">
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
