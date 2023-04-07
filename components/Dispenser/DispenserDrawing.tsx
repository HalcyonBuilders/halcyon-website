import { useState } from 'react';
import { useUserStore, useDispenserStore } from '../../store/store';
import { useSendTx } from '../../backend/dispenser/useSendTx';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { DISPENSER, PACKAGE_ID } from '../../backend/dispenser/config';

interface DispenserDrawingProps {
  roles: { role: string; claimed: boolean; enthusiast: boolean }[];
}

const DispenserDrawing: React.FC<DispenserDrawingProps> = ({ roles }) => {
  const { testCoinIds, filledBottleIds, emptyBottleIds, ticketIds } = useUserStore(
    (state) => state
  );
  const { active, price, supply, balance, left } = useDispenserStore((state) => state);
  const {
    buyRandomBottle,
    buyRandomBottleWithCoins,
    claimFilledBottle,
    claimRandomBottle,
    recycle,
    register,
    swapNft
  } = useSendTx();
  const { signAndExecuteTransactionBlock } = useWalletKit();

  return (
    <div className="bg-no-repeat bg-center bg-cover bg-[url('/static/images/products/distributeur.png')] p-6 rounded-lg w-full h-full flex flex-col justify-end">
      <div className="w-full grid grid-cols-2 gap-4">
        <button
          disabled={active === false || left === 0}
          onClick={async () => buyRandomBottle()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400">
          Buy
        </button>
        <button
          disabled={emptyBottleIds.length < 5}
          onClick={() => console.log('recycle')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400">
          Recycle
        </button>
        <button
          disabled={ticketIds.length === 0}
          onClick={() => console.log('swap')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400">
          Swap
        </button>
        <button
          disabled={
            roles.filter((r) => r.enthusiast === false).filter((r) => r.claimed === false)
              .length === 0 &&
            roles.filter((r) => r.enthusiast === true).filter((r) => r.claimed === false).length ===
              0
          }
          onClick={async () => {
            if (
              roles.filter((r) => r.enthusiast === false).filter((r) => r.claimed === false)
                .length > 0
            )
              await claimFilledBottle();
            else if (
              roles.filter((r) => r.enthusiast === true).filter((r) => r.claimed === false).length >
              0
            )
              await claimRandomBottle();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-400">
          Claim
        </button>
      </div>
    </div>
  );
};

export default DispenserDrawing;
