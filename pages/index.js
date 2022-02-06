import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Fluence, FluencePeer, KeyPair, setLogLevel } from './src/index.ts';
import { allowServiceFn, Sig } from './src/services.ts';
import { registerSig, registerDataProvider, callSig } from './src/__test__/_aqua/sig-tests.ts';
import { krasnodar } from "@fluencelabs/fluence-network-environment";

const App = () => {

  const [pubKey, setPubKey] = useState(null);
  const [signature, setSignature] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const guard = () => {
    //allowServiceFn('data', 'provide_data')
    return true;
  }
  const init = async () => {
    await Fluence.start({ connectTo: krasnodar[8] });
    const customKeyPair = await KeyPair.randomEd25519();
    const customSig = new Sig(customKeyPair);
    const data = [1, 2, 3, 4, 5];

    registerSig('CustomSig', customSig);

    customSig.securityGuard = guard;

    registerDataProvider({
        provide_data: () => {
            return data;
        },
    });

    const result = await callSig('CustomSig');
    if (result.success) {
      setPubKey(customKeyPair.Libp2pPeerId.pubKey._key);
      setSignature(result.signature);
    }
  }

  useEffect(() => {
    console.log('PK', pubKey); 
  }, [pubKey]);
  return (
    <div className="wrapper">
      {pubKey && <p><h4>Pub Key</h4> {pubKey.join(', ')}</p>} 
      {signature && <p><h4>Signature</h4> {signature.join(', ')}</p>} 
      <style jsx>{`
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default App;
