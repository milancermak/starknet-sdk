/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ISwitchboardVSInterface extends utils.Interface {
  functions: {
    "generateAddress()": FunctionFragment;
    "hasPermission(address,address,uint256)": FunctionFragment;
    "setPermission(address,address,uint256,bool)": FunctionFragment;
    "validate(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "generateAddress"
      | "hasPermission"
      | "setPermission"
      | "validate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasPermission",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermission",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export interface ISwitchboardVS extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwitchboardVSInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    generateAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      on: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validate(
      nodeAuthority: PromiseOrValue<string>,
      serviceQueue: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  generateAddress(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasPermission(
    authorityNode: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    permission: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setPermission(
    authorityNode: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    permission: PromiseOrValue<BigNumberish>,
    on: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validate(
    nodeAuthority: PromiseOrValue<string>,
    serviceQueue: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    generateAddress(overrides?: CallOverrides): Promise<string>;

    hasPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      on: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    validate(
      nodeAuthority: PromiseOrValue<string>,
      serviceQueue: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    generateAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      on: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validate(
      nodeAuthority: PromiseOrValue<string>,
      serviceQueue: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPermission(
      authorityNode: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      permission: PromiseOrValue<BigNumberish>,
      on: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      nodeAuthority: PromiseOrValue<string>,
      serviceQueue: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
