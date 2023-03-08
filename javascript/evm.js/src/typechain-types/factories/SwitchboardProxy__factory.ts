/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SwitchboardProxy,
  SwitchboardProxyInterface,
} from "../SwitchboardProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "switchboard",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAuthority",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "switchboard",
        type: "address",
      },
    ],
    name: "addSwitchboardInstance",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "findSwitchboardInstance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "switchboard",
        type: "address",
      },
    ],
    name: "removeSwitchboardInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "updateAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a40380380610a4083398101604081905261002f91610089565b60008054600181810183559180527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b039093166001600160a01b03199384161790558054909116331790556100b9565b60006020828403121561009b57600080fd5b81516001600160a01b03811681146100b257600080fd5b9392505050565b610978806100c86000396000f3fe60806040526004361061007b5760003560e01c8063b83c9a481161004e578063b83c9a481461012f578063ef3bfa961461016f578063f7971b951461019d578063fab005a2146101bd57600080fd5b80633c716e081461008057806347543fc5146100a25780639475b455146100df578063b747ecc1146100ff575b600080fd5b34801561008c57600080fd5b506100a061009b3660046107f8565b6101e5565b005b3480156100ae57600080fd5b506100c26100bd3660046107f8565b610232565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100eb57600080fd5b506100a06100fa3660046107f8565b610319565b34801561010b57600080fd5b5061011f61011a3660046107f8565b610393565b60405190151581526020016100d6565b61014261013d3660046107f8565b610414565b6040805169ffffffffffffffffffff909516855260208501939093529183015260608201526080016100d6565b34801561017b57600080fd5b5061018f61018a3660046107f8565b610537565b6040519081526020016100d6565b3480156101a957600080fd5b506100a06101b83660046107f8565b6105b1565b6101d06101cb3660046107f8565b6106de565b604080519283526020830191909152016100d6565b6001546001600160a01b0316331461021057604051636f6a1b8760e11b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000805b600054811015610310576000818154811061025357610253610821565b60009182526020909120015460405163b747ecc160e01b81526001600160a01b0385811660048301529091169063b747ecc190602401602060405180830381865afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca9190610837565b156102fe57600081815481106102e2576102e2610821565b6000918252602090912001546001600160a01b03169392505050565b806103088161086f565b915050610236565b50600092915050565b6001546001600160a01b0316331461034457604051636f6a1b8760e11b815260040160405180910390fd5b600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319166001600160a01b0392909216919091179055565b60008061039f83610232565b60405163b747ecc160e01b81526001600160a01b0385811660048301529192509082169063b747ecc190602401602060405180830381865afa1580156103e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d9190610837565b9392505050565b600080600080600061042586610232565b60405163779dfd4b60e11b81526001600160a01b03888116600483015291925060009183169063ef3bfa9690602401602060405180830381865afa158015610471573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104959190610888565b9050803410156104b85760405163044044a560e21b815260040160405180910390fd5b604051631707934960e31b81526001600160a01b03888116600483015283169063b83c9a4890839060240160806040518083038185885af1158015610501573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061052691906108a1565b929a91995097509095509350505050565b60008061054383610232565b60405163779dfd4b60e11b81526001600160a01b0385811660048301529192509082169063ef3bfa9690602401602060405180830381865afa15801561058d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d9190610888565b6001546001600160a01b031633146105dc57604051636f6a1b8760e11b815260040160405180910390fd5b60005b6000548110156106da57816001600160a01b03166000828154811061060657610606610821565b6000918252602090912001546001600160a01b0316036106c85760008054610630906001906108ef565b8154811061064057610640610821565b600091825260208220015481546001600160a01b0390911691908390811061066a5761066a610821565b6000918252602082200180546001600160a01b0319166001600160a01b0393909316929092179091558054806106a2576106a2610908565b600082815260209020810160001990810180546001600160a01b03191690550190555050565b806106d28161086f565b9150506105df565b5050565b60008060006106ec84610232565b60405163779dfd4b60e11b81526001600160a01b03868116600483015291925060009183169063ef3bfa9690602401602060405180830381865afa158015610738573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075c9190610888565b90508034101561077f5760405163044044a560e21b815260040160405180910390fd5b604051637d5802d160e11b81526001600160a01b03868116600483015283169063fab005a2908390602401604080518083038185885af11580156107c7573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906107ec919061091e565b90969095509350505050565b60006020828403121561080a57600080fd5b81356001600160a01b038116811461040d57600080fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561084957600080fd5b8151801515811461040d57600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161088157610881610859565b5060010190565b60006020828403121561089a57600080fd5b5051919050565b600080600080608085870312156108b757600080fd5b845169ffffffffffffffffffff811681146108d157600080fd5b60208601516040870151606090970151919890975090945092505050565b8181038181111561090257610902610859565b92915050565b634e487b7160e01b600052603160045260246000fd5b6000806040838503121561093157600080fd5b50508051602090910151909290915056fea2646970667358221220e116351cff916fdb3fad17e9b7869758af2a337abd10afcb14556368f56c621964736f6c63430008110033";

type SwitchboardProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwitchboardProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwitchboardProxy__factory extends ContractFactory {
  constructor(...args: SwitchboardProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    switchboard: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwitchboardProxy> {
    return super.deploy(
      switchboard,
      overrides || {}
    ) as Promise<SwitchboardProxy>;
  }
  override getDeployTransaction(
    switchboard: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(switchboard, overrides || {});
  }
  override attach(address: string): SwitchboardProxy {
    return super.attach(address) as SwitchboardProxy;
  }
  override connect(signer: Signer): SwitchboardProxy__factory {
    return super.connect(signer) as SwitchboardProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwitchboardProxyInterface {
    return new utils.Interface(_abi) as SwitchboardProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwitchboardProxy {
    return new Contract(address, _abi, signerOrProvider) as SwitchboardProxy;
  }
}