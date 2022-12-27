const functions = require('firebase-functions');
const { Metaplex } = require("@metaplex-foundation/js");
const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");

const admin = require('firebase-admin');
admin.initializeApp();

exports.check = functions.https.onRequest(async (req, res) => {
  const tokenAddress = req.query.token;

  const mintAddress = new PublicKey(tokenAddress);

  if (!PublicKey.isOnCurve(mintAddress.toBytes())){
    res.status(400).send("Token address is not valid")
  }

  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const metaplex = new Metaplex(connection);

  const nft = await metaplex.nfts().findByMint({ mintAddress });

  if (nft.creators[0].verified) {
    res.status(200).send("Authenticity is confirmed")
  } else {
    res.status(200).send("Authenticity is not confirmed. NFT token is fake.")
  }
});

