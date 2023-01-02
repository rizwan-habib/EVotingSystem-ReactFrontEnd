import Web3 from 'web3';

export const web3 = new Web3("http://localhost:8000");

export const CANDIDATES_ADDRESS = '0xE609A1f692edb14584D2efdAF9bd544F0D5d7fb2';
export const VOTERS_ADDRESS = '0x4e476bA94445c83cc89ED003dB5565408753aBca';
export const ELECTIONSWINNER_ADDRESS = '0xA3b9Ce79F6eDa92CbC53B5C95f50925dBf9086aF';

export const ELECTIONSWINNER_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "winnerIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "tempVotes",
            "type": "uint256[]"
          }
        ],
        "name": "getWinnerIndex",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
]
export const VOTERS_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "bool",
            "name": "canVote",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "candidatesContractAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "candidateIndex",
            "type": "uint256"
          }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "voterAccountAddress",
            "type": "address"
          }
        ],
        "name": "giveAccessToVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
]

export const CANDIDATES_ABI = [    {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "existingCandidates",
        "type": "string[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "winnerIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getCandidates",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "votes",
            "type": "uint256"
          }
        ],
        "internalType": "struct Candidates.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "voterContractAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "voterAccountAddress",
        "type": "address"
      }
    ],
    "name": "giveRightToVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newCandidate",
        "type": "string"
      }
    ],
    "name": "addCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "candidateIndex",
        "type": "uint256"
      }
    ],
    "name": "castVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "electionWinnerContractAddress",
        "type": "address"
      }
    ],
    "name": "getWinnerName",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "votesArray",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCandidatesVotes",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "tempCandidatesVotes",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const CANDIDATES_ADDRESS_CONTRACT = new web3.eth.Contract(CANDIDATES_ABI, CANDIDATES_ADDRESS);
export const VOTERS_ADDRESS_CONTRACT = new web3.eth.Contract(VOTERS_ABI, VOTERS_ADDRESS);
export const ELECTIONSWINNER_ADDRESS_CONTRACT = new web3.eth.Contract(ELECTIONSWINNER_ABI, CANDIDATES_ADDRESS);