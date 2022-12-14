import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

function RegisterCandidate() {
  const history = useHistory();

  const [candidateName, setCandidateName] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddr] = useState("");
  const [politicalParty, setPoliticalParty] = useState("");
  // const[totalBeds,setTotalBeds] =  useState("");

  function updateCandidateName(e) {
    setCandidateName(e.target.value);
    //   console.log(HostelName);
  }

  function updateCnic(e) {
    setCnic(e.target.value);
    //   console.log(userName);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
    //   console.log(password);
  }
  function updateAddr(e) {
    setAddr(e.target.value);
    //   console.log(hostelAddr);
  }
  function updatePoliticalParty(e) {
    setPoliticalParty(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      "candidateName": candidateName,
      "cnic": cnic,
      "password": password,
      "address": address,
      "politicalParty": politicalParty
    };

    let result = false;

    axios.post(`http://localhost:8001/enterHostelDetails`, user)
      .then(res => {
        console.log(res);
        //data message now in result
        result = res.data;
        if (result == "success") {
          history.push("/login");
        }
        else if (result == "address_false") {
          alert("Adress Already Exist")
          console.log("error");
        }
        else if (result == "login_false") {
          alert("Username Already Exist")
          console.log("error");
        }
      }
      )
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });



  }

  return (
    <div>
      <Nav />
      <section class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 class="text-center"><strong>Register</strong> an candidate.</h2>
            <div class="mb-3"><input class="form-control" id="inputName" onChange={updateCandidateName} value={candidateName} type="text" name="text" placeholder="Candidate Name" /></div>
            <div class="mb-3">
              <div class="input-group">
                <input class="form-control" id="inputUserName" onChange={updateCnic} value={cnic} type="text" name="text" placeholder="CNIC" />
              </div>
            </div>
            <div class="mb-3"><input class="form-control" id="passwordH" onChange={updatePassword} value={password} type="password" name="password" placeholder="Password" /></div>
            <div class="mb-3"><input class="form-control" id="hostelAddr" onChange={updateAddr} value={address} type="text" name="hostel-address" placeholder="Address" /></div>
            <div class="mb-3"><input class="form-control" id="totalRooms" onChange={updatePoliticalParty} value={politicalParty} type="number" name="total-rooms" placeholder="Political Party" /></div>
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Register Candidate</button></div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default RegisterCandidate;