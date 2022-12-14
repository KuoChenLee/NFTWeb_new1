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

  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });

  function Empowerment(){
	return(
		<div className='div5'>
			
			<Container>
        <Row >
            <h1 ></h1>
            <Alert className='slide-in-top' variant='success'>
              <h1 >Empowerment</h1>
              <hr/>
              <h5>Buying a blind box will give you a chance to get a VIP NFT. The function of VIP NFT</h5> <h5>is to get a 10% discount when purchasing NFT in our Robot Shop,and you can</h5> <h5> also receive airdrops of our new products from time to time.</h5>
              <a href='http://localhost:3000/Mint'>
                <button className='button3'>Go to by a Blind Box ➝</button>
              </a>
            </Alert>  
        </Row>
				<Row>
                    <iframe src="https://kuochenlee.github.io/VIP_Card/" width="540" height="680"/>
                    <h6>20% chance to get VIP NFT</h6>
                    
        </Row>
			</Container>
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

export default Empowerment;