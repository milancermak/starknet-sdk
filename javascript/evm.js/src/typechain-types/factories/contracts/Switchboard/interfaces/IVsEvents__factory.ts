/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVsEvents,
  IVsEventsInterface,
} from "../../../../contracts/Switchboard/interfaces/IVsEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    name: "QuoteAccountInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "queue",
        type: "address",
      },
    ],
    name: "QuoteGC",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "QuoteHeartbeat",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "quoteAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuotePayoutEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "queueAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "verifier",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "verifiee",
        type: "address",
      },
    ],
    name: "QuoteVerifyRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    name: "ServiceQueueAccountInit",
    type: "event",
  },
] as const;

export class IVsEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IVsEventsInterface {
    return new utils.Interface(_abi) as IVsEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVsEvents {
    return new Contract(address, _abi, signerOrProvider) as IVsEvents;
  }
}
