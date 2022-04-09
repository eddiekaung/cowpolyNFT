import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import {
  connectWallet,
  mint
} from "./interact";

function App() {
  const [walletAddress, setWallet] = useState("");
  const [amount, setAmount] = useState(0);

  const connectWalletButton = async() => {
    var res = await connectWallet();
    if (res) setWallet(res);
    console.log(walletAddress)
  }

  const clickMint = async() => {
    await mint(walletAddress, amount);
  }

  return (
    <div className="App">
        <h1>The button Element</h1>

        {(walletAddress == "") ? (<button type="button" onClick={connectWalletButton}>Connect wallet</button>) : (<p>Connected: {walletAddress}</p>)}
        
        {(walletAddress == "") ? ("") : (
          <div>
          <label>
            Amount:
            <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
          </label>
          <button type="button" onClick={clickMint}>Mint</button>
          </div>
        )}


    </div>
  );
}

export default App;
