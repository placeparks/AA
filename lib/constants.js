import {Mumbai} from "@thirdweb-dev/chains";

export const THIRDWEB_API_KEY = "b348d6571045948f6cc34cffc3589041";
export const chain = Mumbai;
export const factoryAddress = "0x6805351475AE74eDF20c6aB8f451B40642918531";
export const nftCollection ="0x9818A2b9ecbFe73553cEb29D727CF3960b3ddfa4";

export const ACCOUNT_ABI = 
    [
        {
          "type": "constructor",
          "name": "",
          "inputs": [
            {
              "type": "address",
              "name": "_entrypoint",
              "internalType": "contract IEntryPoint"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "event",
          "name": "AccountCreated",
          "inputs": [
            {
              "type": "address",
              "name": "account",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "accountAdmin",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "Registered",
          "inputs": [
            {
              "type": "string",
              "name": "username",
              "indexed": false,
              "internalType": "string"
            },
            {
              "type": "address",
              "name": "account",
              "indexed": false,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "SignerAdded",
          "inputs": [
            {
              "type": "address",
              "name": "account",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "signer",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "SignerRemoved",
          "inputs": [
            {
              "type": "address",
              "name": "account",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "signer",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "function",
          "name": "accountImplementation",
          "inputs": [],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "accountOfUsername",
          "inputs": [
            {
              "type": "string",
              "name": "",
              "internalType": "string"
            }
          ],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "createAccount",
          "inputs": [
            {
              "type": "address",
              "name": "_admin",
              "internalType": "address"
            },
            {
              "type": "bytes",
              "name": "_data",
              "internalType": "bytes"
            }
          ],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "entrypoint",
          "inputs": [],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getAccountsOfSigner",
          "inputs": [
            {
              "type": "address",
              "name": "signer",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "address[]",
              "name": "accounts",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getAddress",
          "inputs": [
            {
              "type": "address",
              "name": "_adminSigner",
              "internalType": "address"
            },
            {
              "type": "bytes",
              "name": "_data",
              "internalType": "bytes"
            }
          ],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getAllAccounts",
          "inputs": [],
          "outputs": [
            {
              "type": "address[]",
              "name": "",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getSignersOfAccount",
          "inputs": [
            {
              "type": "address",
              "name": "account",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "address[]",
              "name": "signers",
              "internalType": "address[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "isRegistered",
          "inputs": [
            {
              "type": "address",
              "name": "_account",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "bool",
              "name": "",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "multicall",
          "inputs": [
            {
              "type": "bytes[]",
              "name": "data",
              "internalType": "bytes[]"
            }
          ],
          "outputs": [
            {
              "type": "bytes[]",
              "name": "results",
              "internalType": "bytes[]"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "onRegister",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "onRegistered",
          "inputs": [
            {
              "type": "string",
              "name": "username",
              "internalType": "string"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "onSignerAdded",
          "inputs": [
            {
              "type": "address",
              "name": "_signer",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "onSignerRemoved",
          "inputs": [
            {
              "type": "address",
              "name": "_signer",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        }
      ]