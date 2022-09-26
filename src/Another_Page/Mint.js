import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';
import {
	TransitionGroup,
	CSSTransition
  } from "react-transition-group";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
	useParams
  } from "react-router-dom";
  import App from '../App.js';
  import contractaddress from'../contractaddress.json';
  import ABI from'../contractabi.json';
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });
  // const contractAddr=contractAddress.STUST_NFT;
  // const abi=Stust_NETA_Artifact.abi;
  const contractAddr=contractaddress.contractaddr;
  const abi=ABI.abi;

  function Mint(props){

  const [address,setAddress]=useState(props.address);
  const [balance,setBalance]=useState('');
  const [contract,setContract]=useState({});
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(props.isClick);
  const [notisClick,setNotClick]=useState(props.notisClick);
  const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
//   function myFunction() {
//     let elem = document.querySelectorAll(".drop-down");
//     elem.forEach(element=>{
//         element.addEventListener("click", e =>{
//             console.log(e.target.innerHTML);
//         });
//     })
//   }

//   myFunction();

    // async function init(){
    //   const instance = await web3Modal.connect();
    //   const provider = new ethers.providers.Web3Provider(instance);
    //   const signer = provider.getSigner();
    //   const addr=await signer.getAddress();
    //   const _contract=new ethers.Contract(contractAddr,abi,signer);
    //   setContract(_contract);
    //   window.contract=_contract;
    //   setEns(await provider.lookupAddress(addr));
    //   console.log(addr);
    //   setAddress(addr);
    //   const bal=await provider.getBalance(addr);
    //   setBalance(ethers.utils.formatEther( bal )); 
    //   setClick((isClick) => !isClick);
    //   setNotClick((notisClick)=>!notisClick);
    // }

    
    
  //mint 盲盒處理 
  async function mint(){
    const mintPrice = await window.contract.mintPrice();
    let tx = await window.contract.mintSNMeta(
      1
      ,{value:mintPrice.toString()}
      );
    let response=await tx.wait();
    console.log(response);
    let setNotRevealedURI=await window.contract.setNotRevealedURI(
    "ipfs://QmetxQmbkyEc8AUBQ3YWDmLKNLF9q5BxNoXdgnwz9hzAVf"
    );
  }
  // 打開盲盒處理
  async function SeeNFT(){
    let flipReveal=await window.contract.flipReveal();
        let setBaseURI=await window.contract.setBaseURI(
        "ipfs://QmSqLx2d3hrnKMAcmSLYCQap5bwVNNX5UboXhBsQyPKEzW/"
        )  
  }
  
	return(
		<div className='dvi1'>
			 {/* Mint button 合約 */}
			 <div className='div6'>
				<div >
				<Container className='div10'>
					<Col>
						<h1 className='text2'>Mint Blind Box</h1>
						<h6 className='text2'>
						And you can get blind box
						</h6>
					</Col>
					<Col className='roll-in-top'>
						<iframe src="https://kuochenlee.github.io/Blind_Box_Picture1/" width="560" height="655"/>
					</Col>
						<select className="list1" id="list">
						<option class="drop-down">0</option>
						<option class="drop-down" selected="selected">1</option>
						<option class="drop-down">2</option>
						</select>
					<Col>
						<Button disabled={notisClick} onClick={()=>mint()} variant={address?"danger":"secondary"} >Mint Blind Box</Button>
                        {/* disabled={notisClick} */}
					</Col>
					<Col>
						<h1 className='text2'>Open your blind box.🔑</h1>
						<h6 className='text2'>
						You can open the blind box.
						</h6>
					</Col>
					<Col>
						<Button disabled={notisClick} onClick={()=>SeeNFT()} variant={address?"dark":"secondary"} >Open Blind Box</Button>
                        {/* disabled={notisClick} */}
					</Col>
					<Col>
						<h6 className='text2'>If you want to see your NFT ,Click <a href='https://testnets.opensea.io/zh-TW'>OpenSea</a></h6>
					</Col>
				</Container>
				</div>
      		</div>
			  <div className='div12'>
			  <br/>
			  	<a href='http://localhost:3000/Robot_Shop'>
                    <button className='button4'>Go to the shop ➝</button>
            	</a>
			  	<br/>
				<strong className='text4'>STUST UNIVERSE ROBOTS</strong>
				
				
			</div>
			
		</div>
	);
}

export default Mint;