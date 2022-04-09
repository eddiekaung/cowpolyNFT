import Web3 from "web3";
const contractABI = require("./abi.json");

const web3 = new Web3(window.ethereum);

const contractAddress = "0xD59efc795b2b4314891D3C3d40724745834b6C65";

const contract = new web3.eth.Contract(
  contractABI,
  contractAddress
);


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Successfully Connected",
        address: addressArray[0],
      };
      return(addressArray[0]);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("metamask not installed");
  }
};

export const mint = async(owner, amount) => {
  var res = await contract.methods.makeCow(amount).send({
    from: owner,
  });
  console.log(res)
}