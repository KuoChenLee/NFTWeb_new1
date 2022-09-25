import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';
// import {
// 	TransitionGroup,
// 	CSSTransition
//   } from "react-transition-group";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link,
// 	Navigate,
// 	useLocation,
// 	useParams
//   } from "react-router-dom";

//   const web3Modal = new Web3Modal({
//     network: "Goerli", // testnet
//     providerOptions: {} 
//   });
//   // const contractAddr=contractAddress.STUST_NFT;
//   // const abi=Stust_NETA_Artifact.abi;
//   const contractAddr='0xD6C452DB2B7fbA72601a8FfEF6b08d108406bA17';
//   const abi=[
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "initBaseURI",
//           "type": "string"
//         },
//         {
//           "internalType": "string",
//           "name": "initNotRevealedUri",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "approved",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "ApprovalForAll",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "inputs": [],
//       "name": "MAX_SUPPLY",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "_isSaleActive",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "_revealed",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "baseExtension",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "flipReveal",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "flipSaleActive",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "getApproved",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "getMintPrice",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         }
//       ],
//       "name": "isApprovedForAll",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "maxBalance",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "maxMint",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "mintPrice",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenQuantity",
//           "type": "uint256"
//         }
//       ],
//       "name": "mintSNMeta",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "notRevealedUri",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "ownerOf",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         },
//         {
//           "internalType": "bytes",
//           "name": "data",
//           "type": "bytes"
//         }
//       ],
//       "name": "safeTransferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "operator",
//           "type": "address"
//         },
//         {
//           "internalType": "bool",
//           "name": "approved",
//           "type": "bool"
//         }
//       ],
//       "name": "setApprovalForAll",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_newBaseExtension",
//           "type": "string"
//         }
//       ],
//       "name": "setBaseExtension",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_newBaseURI",
//           "type": "string"
//         }
//       ],
//       "name": "setBaseURI",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_maxBalance",
//           "type": "uint256"
//         }
//       ],
//       "name": "setMaxBalance",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_maxMint",
//           "type": "uint256"
//         }
//       ],
//       "name": "setMaxMint",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "_mintPrice",
//           "type": "uint256"
//         }
//       ],
//       "name": "setMintPrice",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "string",
//           "name": "_notRevealedURI",
//           "type": "string"
//         }
//       ],
//       "name": "setNotRevealedURI",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "bytes4",
//           "name": "interfaceId",
//           "type": "bytes4"
//         }
//       ],
//       "name": "supportsInterface",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "index",
//           "type": "uint256"
//         }
//       ],
//       "name": "tokenByIndex",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "index",
//           "type": "uint256"
//         }
//       ],
//       "name": "tokenOfOwnerByIndex",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "tokenURI",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         }
//       ],
//       "name": "withdraw",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];

function Home(){
    const [address,setAddress]=useState('');
    const [balance,setBalance]=useState('');
    const [contract,setContract]=useState({});
    const [ens,setEns]=useState('');
    const [isClick,setClick]=useState(false);
    const [notisClick,setNotClick]=useState(true);
    const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
    function myFunction() {
      let elem = document.querySelectorAll(".drop-down");
      elem.forEach(element=>{
          element.addEventListener("click", e =>{
              console.log(e.target.innerHTML);
          });
      })
    }
    myFunction();
    // //mint 盲盒處理 
    // async function mint(){
    //   const mintPrice = await contract.mintPrice();
    //   let tx = await contract.mintSNMeta(
    //     1
    //     ,{value:mintPrice.toString()}
    //     )
    //   let response=await tx.wait();
    //   console.log(response);
    //   let setNotRevealedURI=await contract.setNotRevealedURI(
    //   "ipfs://QmetxQmbkyEc8AUBQ3YWDmLKNLF9q5BxNoXdgnwz9hzAVf"
    //   )
    // }
    // // 打開盲盒處理
    // async function SeeNFT(){
    //   let flipReveal=await contract.flipReveal();
    //       let setBaseURI=await contract.setBaseURI(
    //       "ipfs://QmTvroQRuCm9RSmpuPmjn9eYZFWfSbPR8ULknHEYgqtBxE/"
    //       )  
    // }
    return(
      <div className="App">
        {/* 動態圖展示 */}
        <div className='div2'>
          <Carousel fade>
              <Carousel.Item>
                <iframe src="https://kuochenlee.github.io/background_1/" width="2200" height="720"></iframe>
              <Carousel.Caption>     
              <h3 className='text1'>STUST ROBOTS MINT </h3>
              <p className='text1'>You can mint a NFT for 0.003 Ethers</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <iframe src="https://kuochenlee.github.io/background_9/" width="2200" height="720"></iframe>
                {/* <img src='../public/image/p1.png' width="2200" height="720"></img> */}
              <Carousel.Caption>
                <h3 className='text1'>DEFFERENT ATTRUBUTE</h3>
                <p className='text1'>You can get defferent attribute NFT.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <iframe src="https://kuochenlee.github.io/Blind_Box_Picture1/" width="2200" height="720"></iframe>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
        </div>
        {/* How to get Robots? 相關內容 */}
        <div className='div10'>
          <Container>
            
            <Row>
              <div className="alert1">
              <Col>
              <h2 className='text2'>How to get Robots?</h2>
                <Alert className="alert2" variant="secondary"> 
                  <div >
                      <h1 className='text3'>
                        Get Your Own Robots
                      </h1>
                      <h6>
                      Robotos is a collection of droid characters designed by Pablo Stanley and minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors.
                        First way.You need to connect wallet.And get some Ethers coins to buy a Blind Box.Open it .And you get a Robot!
                      </h6>
                      <a href='http://localhost:3000/Mint'>
                      <button className='button2'>Go to buy a Blind Box ➝</button>
                      </a>
                      <h6>
                        Second way.If you want to choise Robot which you like.You can click this Button and go to the shop buy the Robot which you like.
                      </h6>
                      <a href='http://localhost:3000/Robot_Shop'>
                      <button className='button2'>Go to the shop ➝</button>
                      </a>
                  </div>  
                </Alert>
              </Col>
              <Col>
                 <iframe src="https://kuochenlee.github.io/Robot_8/" width="700" height="680"/>
              </Col>            
              </div>
              
            </Row>
          </Container>
        </div>
        {/* About 相關內容 */}
        <div className='div7'>
          <Container>
          <h1>About</h1>
            <Row>
             <Col>
                <iframe src="https://kuochenlee.github.io/Blind_Box_picture/" width="560" height="660"/>
              </Col>
              <Col>
                
                <h6>
                Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft, have implemented multi-ship and multi-model deterrence in the Taiwan Strait.Lieutenant General Ye Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained that in terms of the actions of the communist army, the communist army announced the opening of 6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness, 8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use post-bomb warnings, and combat readiness troops should be on alert.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        {/* FAQ 問題解答查詢 */}
        <div className='div4'>
          <h1>Frequently Asked Questions</h1>
          <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <h4 className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</h4>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <h4 className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</h4>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <h4 className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</h4>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <h4 className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</h4>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <h4 className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</h4>
                  </Col>
        </div>
        {/* 此網頁客服Email twitter DC */}
        <div className='div8'>
          <Container>
            <Row>
            <h6 className='text2'>
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
            </h6>
            </Row>
          </Container>
        </div>
        
      </div>
      
    );
  }

  export default Home;