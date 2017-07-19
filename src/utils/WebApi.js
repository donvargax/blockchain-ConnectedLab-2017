import Web3 from 'web3'

import ISeqStudio from '../../build/contracts/ISeqStudio.json'
import SeqStudio from '../../build/contracts/SeqStudio.json'
import contract from 'truffle-contract';

export default class WebApi {

  constructor() {
    let provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
    this.web3 = new Web3(provider)

    if (process.env.NODE_ENV === 'development') {
      this.seqStudioContract = contract(SeqStudio)
      this.seqStudioContract.setProvider(this.web3.currentProvider)
    } else {
      this.iseqStudioContract = contract(ISeqStudio)
      this.iseqStudioContract.setProvider(this.web3.currentProvider)
    }
  }

  getAccounts(callback) {
    return this.web3.eth.getAccounts(callback);
  }

  getSeqStudioContractInstance() {
    if (process.env.NODE_ENV === 'development') {
      return this.seqStudioContract.deployed()
    }
    return this.iseqStudioContract.at("0x771aa8066fe9f84eaee96d4687ec8d6379d1dc19")
    // return this.iseqStudioContract.at("0xeb939a297e50e414453cfedbf42ee48acc21a04e")
  }
}
