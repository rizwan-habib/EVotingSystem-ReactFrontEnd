import Nav from "./Navbar"
import './css/Login-Form-Clean.css'
import './fonts/ionicons.eot'
import './fonts/ionicons.min.css'
import './fonts/ionicons.svg'
import './fonts/ionicons.ttf'
import './fonts/ionicons.woff'
// import { useHistory } from "react-router";
import { useEffect, useState } from "react";
// import {web3} from "./config.js"
import { CANDIDATES_ADDRESS, CANDIDATES_ADDRESS_CONTRACT, VOTERS_ADDRESS_CONTRACT, web3 } from "./config.js"
// import axios from "axios"
// import UserProfile from './userProfile';



function CastVote() {
  // const history = useHistory();
  // candidatesaddress
  // index to vote
  // {from:accounts[1]}
  // const [userName, setUserName] = useState("");
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [users, setUsers] = useState([])
  const [candidates, setCandidates] = useState([])
  const [userAddress, setUserAddress] = useState("");
  const [candidateIndex, setCandidateIndex] = useState(0);
  useEffect(() => {
    async function loadAccounts() {
      const _accounts = await web3.eth.getAccounts();
      setAccounts(_accounts);
    }
    loadAccounts();
    // console.log(accounts);
    function setUsersWtihAccounts() {
      let localAccounts = []
      for (let index = 1; index < accounts.length; index++) {
        let oneUser = {
          name: "User " + (index).toString(),
          useraccount: accounts[index]
        }
        localAccounts.push(oneUser)
      }
      setUsers(localAccounts);
    }
    setUsersWtihAccounts();

    // console.log(users)
    async function loadCandidates() {
      let result = await CANDIDATES_ADDRESS_CONTRACT.methods.getCandidates().call();
      // console.log(result);
      setCandidates(result)
    }
    loadCandidates();

  }, [accounts]);
  // const [data, setData] = useState([]);



  function handleSubmit(event) {
    event.preventDefault();
    console.log("User:", userAddress);
    console.log("Candidate index:", candidateIndex);
    async function vote() {
      try {
        let result = await VOTERS_ADDRESS_CONTRACT.methods.vote(CANDIDATES_ADDRESS, candidateIndex).send({ from: userAddress });
        console.log(result);
      } catch (error) {
        alert("Already voted")
      }

    }
    vote();

    // votersObj.vote(candidatesObj.address,2,{from:accounts[1]})
    // const user = {
    //   "username": userName,
    //   "password": password
    // };

    // const hostelOwner = {
    // "login": login,
    // "password": password
    // };

    // UserProfile.setName(userName);
    // let result =  false;

    // axios.post(`http://localhost:8001/login`,user)
    // .then(res => {

    //     result = res.data;
    //     setData(result);
    //     if(result.type==="resident")
    //     {
    //       history.push(
    //         {
    //           pathname:"/SearchAndResults",
    //           state: { username: userName, data : result} 
    //         }  
    //       );
    //     }
    //     else if(result.type=="hostel")
    //     {
    //       history.push(
    //         {
    //           pathname:"/hostelMain",
    //           state: { username: userName, data : result } 
    //         }  
    //       );
    //     }
    //     else{
    //       alert("Not Found");
    //       console.log("error");
    //     }

    // result = res.data;
    // setData(result);
    // if(result)
    // {
    //   history.push(
    //     {
    //       pathname:"/hostelMain",
    //       state: { username: userName, data : result } 
    //     }  
    //   );
    // }
    // else{
    //   alert("Not Found");
    //   console.log("error");
    // }



    // }
    // )
    // .catch(err => {
    //   // Do something for an error here
    //   console.log("Error Reading data " + err);
    // });
  }






  function updateuserAddress(e) {
    setUserAddress(e.target.value);
    // console.log(e.target.value);
  }

  function updateCandidateIndex(e) {
    setCandidateIndex(e.target.value);

  }

  return (
    <div>
      <Nav />
      <section class="login-clean">
        <form onSubmit={handleSubmit}>
          <h2 class="visually-hidden">Login Form</h2>
          <div class="illustration"><i class="icon ion-ios-unlocked"></i></div>
          {/* <div class="mb-3"><input class="form-control" id="userName" type="text" name="userName" onChange={updateUserName} value={userName} placeholder="User Name" /></div> */}
          <div class="mb-3">
            <label for="temp">Select User : </label>
            <select name="temp" id="temp" onChange={updateuserAddress}>
              {users.map(function (index) {
                return (<option value={index.useraccount}>{index.name}</option>)
              })}
            </select>
          </div>
          <div class="mb-3">
            <label for="temp1">Select Candidate : </label>
            <select name="temp1" id="temp1" onChange={updateCandidateIndex}>
              {candidates.map(function (candidate_, index) {
                return (<option value={index}>{candidate_.name}</option>)
              })}
            </select>
          </div>
          {/* <div class="mb-3"><input class="form-control" id="password" type="password" name="password" onChange={updatePassword} value={password} placeholder="Candidate ID" /></div> */}
          <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Cast Vote</button></div>


        </form>
      </section>
    </div>
  );
}

export default CastVote;