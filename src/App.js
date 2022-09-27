import './App.css';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
	useParams
  } from "react-router-dom";
import Home from './Another_Page/Home.js';
import Attribute from './Another_Page/Attribute.js';
import Mint from './Another_Page/Mint.js';
import Empowerment from './Another_Page/Empowerment.js';
import Robot_Shop from './Another_Page/Robot_Shop.js';
import contractaddress from'../src/contractaddress.json';
import ABI from'../src/contractabi.json';

const web3Modal = new Web3Modal({
  network: "Goerli", // testnet
  providerOptions: {} 
});
  
const contractAddr=contractaddress.contractAddr;
const abi=ABI.abi;


function App() {
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
  // metamask錢包 相關處理
    async function init(){
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const addr=await signer.getAddress();
      const _contract=new ethers.Contract(contractAddr,abi,signer);
      setContract(_contract);
      window.contract=_contract;
      setEns(await provider.lookupAddress(addr));
      console.log(addr);
      setAddress(addr);
      const bal=await provider.getBalance(addr);
      setBalance(ethers.utils.formatEther( bal )); 
      setClick((isClick) => !isClick);
      setNotClick((notisClick)=>!notisClick);
      console.log(notisClick);
    }
  
 
  return (
    <div className="App">
      <div className='div1'>
		<Router>
			<Navbar>
				<Container>
					<Navbar.Brand to="/">STUST NFT Universe</Navbar.Brand>
					<Link className='text1' to="/Home" ><button className='button1'>Home</button></Link>
					<Link className='text1' to="/Attribute"><button className='button1'>Attribute</button></Link>
					<Link className='text1' to="/Mint"><button className='button1'>Mint</button></Link>
					<Link className='text1' to='/Empowerment'><button className='button1'>Empowerment</button></Link>
					<Link className='text1' to="/Robot_Shop"><button className='button1'>Robot_Shop</button></Link>
					<div>
						{address&&<span className='me-2' >
						{(1*balance).toFixed(2)}Ethers
						</span>}
						<Button variant={address?'success':'outline-secondary'} onClick={()=>{init()}} disabled={isClick}>
						{address?(ens||shortenAddr(address)):'Connect Wallet'}
						</Button>
					</div>
					
					</Container>

			</Navbar>
			

				<Routes>
					
					<Route exact path="*"  element={<Home/>}/>
					<Route path="/Attribute" element={<Attribute/>} />
					<Route path="/Mint" element={<Mint address={address} notisClick={notisClick} isClick={isClick} contractAddr={contractAddr} abi={abi}/>} />
					<Route path="/Empowerment" element={<Empowerment/>} />
					<Route path="/Robot_Shop" element={<Robot_Shop/>} />
				</Routes>
		</Router>
      </div>
      
    </div>
  );
}

export default App;
