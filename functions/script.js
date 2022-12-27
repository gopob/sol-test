

// test()
// const web3 = require("@solana/web3.js");
// (async () => {
//   const publicKey = new web3.PublicKey(
//     "8JWyCQzB3FBXMiZBdLd1L6nYneNaowwffC4DQWd4YEGk"
//   );
//   const solana = new web3.Connection(web3.clusterApiUrl("mainnet-beta"));
// //   const data = await solana.getAccountInfo(publicKey, "max", {"encoding": "jsonParsed"});
//   const largestAccountInfo = await solana.getParsedAccountInfo(
//     publicKey
//   );
//   console.log(largestAccountInfo)
//   console.log(largestAccountInfo.value.data.parsed);
// })();


const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");

const address = new PublicKey("8JWyCQzB3FBXMiZBdLd1L6nYneNaowwffC4DQWd4YEGk");
console.log(PublicKey.isOnCurve(address));