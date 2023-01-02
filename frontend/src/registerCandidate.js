import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
import {CANDIDATES_ADDRESS, CANDIDATES_ADDRESS_CONTRACT,ELECTIONSWINNER_ADDRESS_CONTRACT,ELECTIONSWINNER_ADDRESS, VOTERS_ADDRESS, web3} from "./config.js"
import { useEffect } from "react";
// import { useHistory } from "react-router";
import { useState } from "react";
// import axios from "axios";

function RegisterCandidate() {
  // const history = useHistory();
  // const[totalBeds,setTotalBeds] =  useState("");
  const [candidates,setCandidates] = useState([])
  const [winnerIndex,setWinnerIndex] = useState("");
  const [winnerName,setWinnerName] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // async function loadAccounts() {
    //   const _accounts = await web3.eth.getAccounts();
    //   setAccounts(_accounts);
    // }
    // loadAccounts();
    // console.log(accounts);

    
    // console.log(users)
    async function loadCandidates() {
      let result = await CANDIDATES_ADDRESS_CONTRACT.methods.getCandidates().call();
      console.log(result);
      // setCandidates(result)
    }
    loadCandidates();
    async function getWinner() {
      const _accounts = await web3.eth.getAccounts();
      // console.log(_accounts);
      let result = await CANDIDATES_ADDRESS_CONTRACT.methods.getWinnerName(ELECTIONSWINNER_ADDRESS).send({from:_accounts[0]}) ;
      let result1 = await ELECTIONSWINNER_ADDRESS_CONTRACT.methods.winnerIndex().call();
      // console.log("t:",result);
      // console.log("t:",result1);
      let max = "0";
      let name = "";
      for (let index = 0; index < candidates.length; index++) {
        // console.log(candidates[index]["votes"]);
        if(candidates[index]["votes"]>=max){
          max = candidates[index]["votes"] ;  
          name = candidates[index]["name"];
        }
      }
      // console.log(name);
      setWinnerIndex(name)
    }
    getWinner();
  });

  return (
    <div>
      <Nav />
      <section class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <h1>Winner Candidate : {winnerIndex}</h1>
        </div>
      </section>

    </div>
  );
}

export default RegisterCandidate;