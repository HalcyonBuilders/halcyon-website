import Image from 'next/image';

const SaveToFullResponsive = () => {
  return <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 pb-40">
        <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
          Roadmap
        </h1>
        <div className='mx-auto flex justify-center my-[25px]'>
        <Image
            src="/static/images/Roadmap/RM Logo.png"
            alt="logoDownlg"
            width="200"
            height="200"
          />
        </div>
        <div className='mx-auto bg-red-700 h-[100px] w-[200px] rounded-bl-[100px] rounded-br-[100px] border-[10px] border-t-[0]'>
          <div>
            <li className='rotate-[0deg]'></li>
            <li className='rotate-[180deg]'></li>
            <li className='rotate-[235deg]'></li>
            <li className='rotate-[270deg]'></li>
            <li className='rotate-[315deg]'></li>
            
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
}

export const Roadmap = () => {
  return (
    <>
      {/* min height de 1024 px petit padding de 30 */}
  
      <div className='min-h-[1024px] pt-[30px] bg-roadmap'>
        {/* titre */}
        <h1 className="text-center text-white uppercase text-[40px] pt-2 pb-2 sm:text-[40px] sm:pt-2">
          Roadmap
        </h1>

      </div>
      {/* Faire une div pour le content avec les textes   */} 
      {/* 1 div avec la barre de progression et dedans les points taille env 26px  */}
      {/* on retrouve une div pour les rond actif et 1 div pour les ronds non actif */}
      {/* 1 div par paragraphe avec une position absolute */} 

      {/* <SaveToFullResponsive/> a faire quand on aura le temps de facons full html css voir avec des svg correcte */}
    </>
  );
};
