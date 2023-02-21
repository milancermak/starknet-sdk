/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISwitchboard, ISwitchboardInterface } from "../ISwitchboard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "aggregatorExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "getReadCost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "latestResult",
    outputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint80",
        name: "round",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oldestConsideredValueTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ISwitchboard__factory {
  static readonly abi = _abi;
  static createInterface(): ISwitchboardInterface {
    return new utils.Interface(_abi) as ISwitchboardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwitchboard {
    return new Contract(address, _abi, signerOrProvider) as ISwitchboard;
  }
}
