import { ConnectButton, useWallet, ErrorCode } from '@suiet/wallet-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

const SuiConnect = () => {
  const wallet = useWallet();

  return (
    <div id="sui-connect">
      {wallet.connected ? (
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="avatar"
            src="/static/images/suiLogo.png"
          />
          <div>
            {wallet.address!.slice(0, 5)}...{wallet.address!.slice(-5)}
          </div>
          <button
            id="sui-disconnect"
            className="text-gray-400 hover:text-blue-600 font-bold py-2 px-3 rounded-full"
            onClick={() => wallet.disconnect()}>
            <FiLogOut />
          </button>
        </div>
      ) : (
          <ConnectButton
            onConnectError={(error) => {
              if (error.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
                console.warn('user rejected the connection to ' + error.details?.wallet)
              } else {
                console.warn('unknown connect error: ', error)
              }
            }}
          />
        // <ConnectButton style={{width: 'full'}} connectText={'Connect Wallet'} />
      )}
    </div>
  );
};

export default SuiConnect;
