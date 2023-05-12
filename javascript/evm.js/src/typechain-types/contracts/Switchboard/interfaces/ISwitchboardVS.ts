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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ISwitchboardVSInterface extends utils.Interface {
  functions: {
    "generateAddress()": FunctionFragment;
    "validate(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "generateAddress" | "validate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {
    "QuoteAccountInit(address,address)": EventFragment;
    "QuoteGC(address,address)": EventFragment;
    "QuoteHeartbeat(address,address)": EventFragment;
    "QuotePayoutEvent(address,address,uint256)": EventFragment;
    "QuoteVerifyRequest(address,address,address)": EventFragment;
    "ServiceQueueAccountInit(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "QuoteAccountInit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteGC"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteHeartbeat"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuotePayoutEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteVerifyRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceQueueAccountInit"): EventFragment;
}

export interface QuoteAccountInitEventObject {
  authority: string;
  accountAddress: string;
}
export type QuoteAccountInitEvent = TypedEvent<
  [string, string],
  QuoteAccountInitEventObject
>;

export type QuoteAccountInitEventFilter =
  TypedEventFilter<QuoteAccountInitEvent>;

export interface QuoteGCEventObject {
  nodeAddress: string;
  queue: string;
}
export type QuoteGCEvent = TypedEvent<[string, string], QuoteGCEventObject>;

export type QuoteGCEventFilter = TypedEventFilter<QuoteGCEvent>;

export interface QuoteHeartbeatEventObject {
  nodeAddress: string;
  authority: string;
}
export type QuoteHeartbeatEvent = TypedEvent<
  [string, string],
  QuoteHeartbeatEventObject
>;

export type QuoteHeartbeatEventFilter = TypedEventFilter<QuoteHeartbeatEvent>;

export interface QuotePayoutEventEventObject {
  nodeAddress: string;
  quoteAddress: string;
  amount: BigNumber;
}
export type QuotePayoutEventEvent = TypedEvent<
  [string, string, BigNumber],
  QuotePayoutEventEventObject
>;

export type QuotePayoutEventEventFilter =
  TypedEventFilter<QuotePayoutEventEvent>;

export interface QuoteVerifyRequestEventObject {
  queueAddress: string;
  verifier: string;
  verifiee: string;
}
export type QuoteVerifyRequestEvent = TypedEvent<
  [string, string, string],
  QuoteVerifyRequestEventObject
>;

export type QuoteVerifyRequestEventFilter =
  TypedEventFilter<QuoteVerifyRequestEvent>;

export interface ServiceQueueAccountInitEventObject {
  authority: string;
  accountAddress: string;
}
export type ServiceQueueAccountInitEvent = TypedEvent<
  [string, string],
  ServiceQueueAccountInitEventObject
>;

export type ServiceQueueAccountInitEventFilter =
  TypedEventFilter<ServiceQueueAccountInitEvent>;

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

    validate(
      quoteAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  generateAddress(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validate(
    quoteAuthority: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    generateAddress(overrides?: CallOverrides): Promise<string>;

    validate(
      quoteAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "QuoteAccountInit(address,address)"(
      authority?: PromiseOrValue<string> | null,
      accountAddress?: PromiseOrValue<string> | null
    ): QuoteAccountInitEventFilter;
    QuoteAccountInit(
      authority?: PromiseOrValue<string> | null,
      accountAddress?: PromiseOrValue<string> | null
    ): QuoteAccountInitEventFilter;

    "QuoteGC(address,address)"(
      nodeAddress?: PromiseOrValue<string> | null,
      queue?: PromiseOrValue<string> | null
    ): QuoteGCEventFilter;
    QuoteGC(
      nodeAddress?: PromiseOrValue<string> | null,
      queue?: PromiseOrValue<string> | null
    ): QuoteGCEventFilter;

    "QuoteHeartbeat(address,address)"(
      nodeAddress?: PromiseOrValue<string> | null,
      authority?: PromiseOrValue<string> | null
    ): QuoteHeartbeatEventFilter;
    QuoteHeartbeat(
      nodeAddress?: PromiseOrValue<string> | null,
      authority?: PromiseOrValue<string> | null
    ): QuoteHeartbeatEventFilter;

    "QuotePayoutEvent(address,address,uint256)"(
      nodeAddress?: PromiseOrValue<string> | null,
      quoteAddress?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): QuotePayoutEventEventFilter;
    QuotePayoutEvent(
      nodeAddress?: PromiseOrValue<string> | null,
      quoteAddress?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): QuotePayoutEventEventFilter;

    "QuoteVerifyRequest(address,address,address)"(
      queueAddress?: PromiseOrValue<string> | null,
      verifier?: PromiseOrValue<string> | null,
      verifiee?: PromiseOrValue<string> | null
    ): QuoteVerifyRequestEventFilter;
    QuoteVerifyRequest(
      queueAddress?: PromiseOrValue<string> | null,
      verifier?: PromiseOrValue<string> | null,
      verifiee?: PromiseOrValue<string> | null
    ): QuoteVerifyRequestEventFilter;

    "ServiceQueueAccountInit(address,address)"(
      authority?: PromiseOrValue<string> | null,
      accountAddress?: PromiseOrValue<string> | null
    ): ServiceQueueAccountInitEventFilter;
    ServiceQueueAccountInit(
      authority?: PromiseOrValue<string> | null,
      accountAddress?: PromiseOrValue<string> | null
    ): ServiceQueueAccountInitEventFilter;
  };

  estimateGas: {
    generateAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validate(
      quoteAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      quoteAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
