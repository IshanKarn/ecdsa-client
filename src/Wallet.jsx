import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex } from "ethereum-cryptography/utils";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey, signature, setSignature, message, setMessage }) {
  async function onChange(evt) {
    // const privateKey = evt.target.value;
    // setPrivateKey(privateKey);
    // const signature = evt.target.value;
    // console.log(signature);
    // setSignature(signature);
    // const address = toHex(keccak256(secp256k1.getPublicKey(privateKey).slice(1)).slice(-20));
    // setAddress(address);

    const address = evt.target.value;
    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }

    // if (signature) {
    //   const {
    //     data: { balance, publicAddress },
    //   } = await server.get(`getBalance/${signature}`);
    //   setBalance(balance);
    //   setAddress(publicAddress);
    // } else {
    //   setBalance(0);
    // }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      {/* <label>
        Private Key
        <input
          placeholder="Type in a private key"
          value={privateKey}
          onChange={onChange}
        ></input>
      </label> */}

      <label>
        Address
        <input
          placeholder="Type in an address"
          value={address}
          onChange={onChange}
        ></input>
      </label>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
