/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SortLib,
  SortLibInterface,
} from "../../../../contracts/Switchboard/libraries/SortLib";

const _abi = [
  {
    inputs: [
      {
        components: [
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
            internalType: "address",
            name: "oracleAddress",
            type: "address",
          },
        ],
        internalType: "struct SbStructs.Result[]",
        name: "arr",
        type: "tuple[]",
      },
    ],
    name: "getMedian",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            internalType: "address",
            name: "oracleAddress",
            type: "address",
          },
        ],
        internalType: "struct SbStructs.Result[]",
        name: "input",
        type: "tuple[]",
      },
    ],
    name: "sortResults",
    outputs: [
      {
        components: [
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
            internalType: "address",
            name: "oracleAddress",
            type: "address",
          },
        ],
        internalType: "struct SbStructs.Result[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6108e561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c806330986b7b14610045578063c9b4e7ec1461006e575b600080fd5b610058610053366004610602565b610096565b60405161006591906106ec565b60405180910390f35b61008161007c366004610602565b610290565b60408051928352602083019190915201610065565b805160609060028110156100ab575090919050565b6001805b82811015610120578481815181106100c9576100c961074e565b602002602001015160000151856001836100e3919061077a565b815181106100f3576100f361074e565b602002602001015160000151131561010e5760009150610120565b8061011881610793565b9150506100af565b811561012f5750929392505050565b6001915060006101406002856107c2565b9050600091505b808210156102605785600161015c848761077a565b610166919061077a565b815181106101765761017661074e565b6020026020010151600001518683815181106101945761019461074e565b6020026020010151600001511315610245578560016101b3848761077a565b6101bd919061077a565b815181106101cd576101cd61074e565b60200260200101518683815181106101e7576101e761074e565b60200260200101518784815181106102015761020161074e565b602002602001018860018689610217919061077a565b610221919061077a565b815181106102315761023161074e565b60200260200101829052829052505061024e565b60009250610260565b8161025881610793565b925050610147565b8215610270575093949350505050565b61028686600061028160018861077a565b61040f565b5093949350505050565b600080600061029e84610096565b9050600284516102ae91906107d6565b6000036103af576002816001600287516102c891906107c2565b6102d2919061077a565b815181106102e2576102e261074e565b60200260200101516000015182600287516102fd91906107c2565b8151811061030d5761030d61074e565b60200260200101516000015161032391906107ea565b61032d9190610812565b60028260016002885161034091906107c2565b61034a919061077a565b8151811061035a5761035a61074e565b602002602001015160200151836002885161037591906107c2565b815181106103855761038561074e565b60200260200101516020015161039b9190610840565b6103a591906107c2565b9250925050915091565b80600285516103be91906107c2565b815181106103ce576103ce61074e565b60200260200101516000015181600286516103e991906107c2565b815181106103f9576103f961074e565b6020026020010151602001519250925050915091565b818160008560026104208585610853565b61042a9190610812565b61043490876107ea565b815181106104445761044461074e565b602002602001015190505b818313610564575b806000015186848151811061046e5761046e61074e565b6020026020010151600001511215610492578261048a8161087a565b935050610457565b8582815181106104a4576104a461074e565b602002602001015160000151816000015112156104cd57816104c581610892565b925050610492565b81831361055f578582815181106104e6576104e661074e565b60200260200101518684815181106105005761050061074e565b602002602001015187858151811061051a5761051a61074e565b602002602001018885815181106105335761053361074e565b602002602001018290528290525050828061054d9061087a565b935050818061055b90610892565b9250505b61044f565b818512156105775761057786868461040f565b8383121561058a5761058a86848661040f565b505050505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156105cb576105cb610592565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156105fa576105fa610592565b604052919050565b6000602080838503121561061557600080fd5b823567ffffffffffffffff8082111561062d57600080fd5b818501915085601f83011261064157600080fd5b81358181111561065357610653610592565b610661848260051b016105d1565b8181528481019250606091820284018501918883111561068057600080fd5b938501935b828510156106e05780858a03121561069d5760008081fd5b6106a56105a8565b8535815286860135878201526040808701356001600160a01b03811681146106cd5760008081fd5b9082015284529384019392850192610685565b50979650505050505050565b602080825282518282018190526000919060409081850190868401855b828110156107415781518051855286810151878601528501516001600160a01b03168585015260609093019290850190600101610709565b5091979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561078d5761078d610764565b92915050565b6000600182016107a5576107a5610764565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826107d1576107d16107ac565b500490565b6000826107e5576107e56107ac565b500690565b808201828112600083128015821682158216171561080a5761080a610764565b505092915050565b600082610821576108216107ac565b600160ff1b82146000198414161561083b5761083b610764565b500590565b8082018082111561078d5761078d610764565b818103600083128015838313168383128216171561087357610873610764565b5092915050565b60006001600160ff1b0182016107a5576107a5610764565b6000600160ff1b82016108a7576108a7610764565b50600019019056fea2646970667358221220ba651e36933613d2e59528c4d66b4118bf3f7963d1e634591fe859b29f72b7b564736f6c63430008110033";

type SortLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SortLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SortLib__factory extends ContractFactory {
  constructor(...args: SortLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SortLib> {
    return super.deploy(overrides || {}) as Promise<SortLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SortLib {
    return super.attach(address) as SortLib;
  }
  override connect(signer: Signer): SortLib__factory {
    return super.connect(signer) as SortLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SortLibInterface {
    return new utils.Interface(_abi) as SortLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SortLib {
    return new Contract(address, _abi, signerOrProvider) as SortLib;
  }
}