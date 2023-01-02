import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
// import { useHistory } from "react-router";
import { useState,useEffect } from "react";
import {CANDIDATES_ADDRESS, CANDIDATES_ADDRESS_CONTRACT, VOTERS_ADDRESS, web3} from "./config.js"

// import axios from "axios";

function RegisterVoter() {
  // const history = useHistory()
  const [users,setUsers] = useState([])
  const [userAddress,setUserAddress] = useState("");
  const [accounts, setAccounts] = useState([]);


  function updateuserAddress(e) {
    setUserAddress(e.target.value);
    // console.log(e.target.value);
  }
  async function giveRightToVote() {
    try {
      console.log(userAddress);
      let result = await CANDIDATES_ADDRESS_CONTRACT.methods.giveRightToVote(VOTERS_ADDRESS,userAddress).send({from:accounts[0]});
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Already access to vote");
    }

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("sumbit");
    giveRightToVote();

  }
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
          name:"User "+(index).toString(),
          useraccount:accounts[index]
        }
        localAccounts.push(oneUser)
      }
      setUsers(localAccounts);
    }
    setUsersWtihAccounts();

    
  }, [accounts]);

  return (

    <div>
      <Nav />
      <section class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 class="text-center"><strong>Register</strong> your Vote.</h2>
            <div class="mb-3">
          <label for="temp">Select User : </label>
          <select name="temp" id="temp" onChange={updateuserAddress}>
              {users.map(function(index){
                  return (<option value={index.useraccount}>{index.name}</option>)
            })}
          </select>
          </div>
            {/* <div class="mb-3"><input class="form-control" id="inputName" onChange={updateName} value={Name} type="text" name="text" placeholder="Name" /></div>
            <div class="mb-3">
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input class="form-control" id="inputUserName" onChange={updateUserName} value={userName} type="text" name="text" placeholder="User Name" />
              </div>
            </div>
            <div class="mb-3"><input class="form-control" id="inputPassword" onChange={updatePassword} value={password} type="password" name="password" placeholder="Password" /></div> */}
            {/* <div class="mb-3"><input class="form-control" id="inputPasswordRep" onChange={updateCNIC} value={cnic} type="text" name="password-repeat" placeholder="CNIC" /></div> */}
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Give Access</button></div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default RegisterVoter;