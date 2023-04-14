import { ConnectButton, useWalletKit } from '@mysten/wallet-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { SignInButton } from 'ethos-connect'
import { ethos } from 'ethos-connect';

const SuiConnect = () => {
  const { wallet } = ethos.useWallet();

  return (
    <div id="sui-connect">
      {wallet?.accounts ? (
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="avatar"
            src="/static/images/suiLogo.png"
          />
          <div>
            {ethos.truncateMiddle(wallet!.address, 4)}
          </div>
          <button
            id="sui-disconnect"
            className="text-gray-400 hover:text-blue-600 font-bold py-2 px-3 rounded-full"
            onClick={() => wallet?.disconnect()}>
            <FiLogOut />
          </button>
        </div>
      ) : (
        <SignInButton style={{width: 'full'}}>Connect Wallet</SignInButton>
        // <ConnectButton style={{width: 'full'}} connectText={'Connect Wallet'} />
      )}
    </div>
  );
};

export default SuiConnect;
