# Solana NFT Token function to check authenticity

Firebase Cloud Function that receive a NFT Token address as a parameter and check authenticity in Solana( Mainnet ) network.

The difference between the original and fake token is in the metadata in the `creator` field, in the original `verified` field is `True` , while the fake token has this field set to `False`

## Installation

```
$ cd ./functions && npm install --save 
```

## Usage

To start the server run the following command:

```
$ npm run serve
```
After emulator starting you can call the function using endpoint:
```
http://127.0.0.1:5001/sol-nft-27-12/us-central1/check?token={YOUR_TOKEN}
```
After the call you will see the result.

## Testing

Check if token is not valid 

![](https://images2.imgbox.com/98/e3/ySliauCl_o.png)

**5sYajCWGHeM6Ru8FXCU6zhodQ2B9oyYiRJiqxGdYfZoo  ** - is valid NFT Token with original authenticity

![](https://images2.imgbox.com/a8/3b/RKPD1RcL_o.png)

**8JWyCQzB3FBXMiZBdLd1L6nYneNaowwffC4DQWd4YEGk  ** - is valid NFT Token with fake authenticity

![](https://images2.imgbox.com/aa/6f/vCCI5jpC_o.png)

## Metrics 
|  | Cold Start  | Warn Start  |
| ------------ | ------------ | ------------ |
|   | 1047.2986ms  |  559.9583ms |
|   | 630.3921ms  | 575.8874ms  |
|   | 736.3436ms  |  546.5023ms |
|   | 835.5016ms  |  717.2266ms  |
|   | 1006.4762ms | 595.3569ms |
| Average  |  851.2024ms |  598.9863ms |
