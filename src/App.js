import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
  useAnchorWallet,
  useConnection, useWallet
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletConnectButton,
  WalletDisconnectButton
} from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Program, web3, BN, Provider } from "@project-serum/anchor";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import React, { FC, ReactNode, useMemo, useEffect, useState } from "react";
import idl from "./idl.json";
import {
  createAssociatedTokenAccount,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  getAccount
} from "@solana/spl-token";
import * as bs58 from "bs58";

require("./App.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const App= () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};
export default App;

const Context= ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SlopeWalletAdapter(),
      // new SolflareWalletAdapter({ network }),
      // new TorusWalletAdapter(),
      // new LedgerWalletAdapter(),
      // new SolletWalletAdapter({ network }),
      // new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  console.log('dfghjklkjgf')
    // useEffect(()=>{     
    //     console.log('endpoint ',endpoint);
    //     console.log('wallets ',wallets);//network
    //     console.log('network ',network);//network
    // },[network,wallets,endpoint]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  // const wallet = useAnchorWallet();
  const baseAccount = web3.Keypair.generate();
  // const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [walletConnectedStatus,setwalletConnectedStatus] = useState(false); 
   const [keyPair,setkeyPair] = useState();
   const [provider, setProvider] = useState();
   const [walletKey, setWalletKey] = useState();
    // const keyPair = Keypair.fromSecretKey(new Uint8Array(publicKey)
  
    const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

    // useEffect(()=>{
    //     // console.log('getProvider ',getProvider())
    //     const { solana } = window;
    //     console.log('keyPair && !walletConnectedStatus ',!keyPair , walletConnectedStatus, !keyPair && !walletConnectedStatus)
    //     if(walletConnectedStatus){
    //       let provider1 = getProvider();
    //       if (provider1){
    //         console.log('here')
    //         setProvider(provider1);
    //         connectWallet()
    //       } 
    //       else setProvider(undefined);
    //       // if(){
            
    //     }
        
    //     // }  
    // },[publicKey]);

    useEffect(async()=>{
      try{
        if(walletKey){
          console.log('walletKey useeff ',walletKey)
          let pk = new PublicKey(walletKey)
          console.log('pk ',pk)
          let x = await getAccount(connection, pk)
          console.log('x ',x)
         }
      }catch(err){
        console.log('err ',err)
      }
      
    },[walletKey])

    // useEffect(()=>{
    //   if(provider === undefined){
    //     disconnectWallet()
    //   }
    // },[walletKey]);

    const getProvider = () => {
      try{
        if ("solana" in window) {
          // @ts-ignore
          const provider = window.solana ;
          if (provider.isPhantom) return provider;
        }
      }catch(err){
        console.log('getProvider window ',err)
      }
     
    };

    const connectWallet = async () => {
      // @ts-ignore
      try{
          const { solana } = window;
          console.log('solana ',solana);
          console.log('====================================')
        if (solana && keyPair === undefined && !walletConnectedStatus) {
          try {
            console.log('=======zzzzz=============================')
            const response = await solana.connect();
            console.log('wallet account ', response.publicKey.toString(), response);
            setWalletKey(response.publicKey.toString());
            setwalletConnectedStatus(true);
          } catch (err) {
          //  { code: 4001, message: 'User rejected the request.' }
           alert('Please connect to your Phantam wallet')
          }
        }
      }catch(err){
        console.log('connectwallet window ',err)
      }  
      
    };
  
    const disconnectWallet = async () => {
      // @ts-ignore
      try{
        console.log('+++++++++++++++++++++++++++++++++++++++++++')
        const { solana } = window;
  
        if (walletKey && solana) {
          await (solana).disconnect();
          setWalletKey(undefined);
          setwalletConnectedStatus(false);
        }

      }catch(err){
        console.log('disconnectWallet err ',err)
      }
     
    };
    
 

  console.log('walletKey ',walletKey)
  console.log('hi',publicKey, 'keyPair ' ,keyPair  ,walletConnectedStatus);
  return (
    <div className="App">
      {/* <button onClick={createCounter}>Initialize</button>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={updateCounter}>Update</button> */}
      {/* {<WalletMultiButton onClick={()=>connectWallet()}/>} */}
      {/* {walletKey && <WalletDisconnectButton onClick={()=>setWalletKey(undefined)}/>}  */}
      {/* disconnectWallet */}
      {/* {<WalletDisconnectButton onClick={()=>disconnectWallet()}/>}  */}
      {/* <WalletConnectButton /> */}
      {/* <WalletMultiButton onClick={()=>setwalletConnectedStatus(true)}/> */}
      <button onClick={()=>connectWallet()}>Connect</button>
      <button onClick={()=>disconnectWallet()}>Disconnect</button>
      
    </div>
  );
};
