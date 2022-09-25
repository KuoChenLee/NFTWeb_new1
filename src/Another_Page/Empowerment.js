import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';
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
		<div className='dvi1'>
			<h1>Empowerment</h1>
			<Container>
                <Row>
                    <h5>
                        If you buy a Blind Box.You will get a VIP card.
                    </h5>
                </Row>
				<Row>
                    <iframe src="https://kuochenlee.github.io/VIP_Card/" width="580" height="655"/>
                </Row>
			</Container>
		</div>
	);
}

export default Empowerment;