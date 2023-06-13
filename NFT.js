/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT = [];

let tshirts = ["Gucci", "Prada", "Versace"];
let shoes = ["Nike", "Adidas", "Puma"];
let blings = ["Gold chain", "Diamond necklace", "Silver bracelet"];
let accessories = ["Hat", "Sunglasses", "Watch", "Earrings"];
let features = ["Glowing", "Limited Edition", "Animated", "Crystalized"];

const nftCount = 3;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.



function mintNFT() {
  for (var i=1;i<=nftCount;i++){

  
  const nftName = "NFT " + i;

  const randomTshirt = tshirts[Math.floor(Math.random() * tshirts.length)];
  const randomShoes = shoes[Math.floor(Math.random() * shoes.length)];
  const randomBling = blings[Math.floor(Math.random() * blings.length)];
  const randomAccessory = accessories[Math.floor(Math.random() * accessories.length)];
  const randomFeature = features[Math.floor(Math.random() * features.length)];

  const nft = {
    Name: nftName,
    Upper: randomTshirt,
    Lower: randomShoes,
    Accessories: randomBling,
    Extra: {
      Accessory: randomAccessory,
      Feature: randomFeature,
    },
  };

  NFT.push(nft);
  console.log("\nMinted: " + nftName);

  
 }
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for (let i = 0; i < NFT.length; i++) {
        console.log("\nName: " + NFT[i].Name);
        console.log("Upper: " + NFT[i].Upper);
        console.log("Lower: " + NFT[i].Lower);
        console.log("Accessories: " + NFT[i].Accessories);
        console.log("Extra Accessory: " + NFT[i].Extra.Accessory);
        console.log("Extra Feature: " + NFT[i].Extra.Feature);
      }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe number of NFTs: " + NFT.length);
}


// call your functions below this line
mintNFT();
listNFTs();
getTotalSupply();