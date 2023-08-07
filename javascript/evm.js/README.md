<div align="center">

![Switchboard Logo](https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png)

# @switchboard-xyz/evm.js

> A Typescript client to interact with Switchboard on EVM based chains.

[![NPM Badge](https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-evm?color=red&filename=javascript%2Fevm.js%2Fpackage.json&label=%40switchboard-xyz%2Fevm.js&logo=npm)](https://www.npmjs.com/package/@switchboard-xyz/evm.js)

</div>

## Install

```bash
npm i --save @switchboard-xyz/evm.js
```

## Usage

**Directory**

- [Load Switchboard Program](#load-switchboard-program)
- [Transactions](#transactions)
- [Create a Queue](#create-a-queue)
- [Add an Oracle](#add-an-oracle)
- [Create a Job on IPFS](#create-a-job-on-ipfs)
- [Create a Data Feed](#create-a-data-feed)
- [Read a Data Feed](#read-a-data-feed)
- [Watch Data Feed](#watch-data-feed)

### Load Switchboard Program

```ts
import ethers from "ethers";
import { SwitchboardProgram } from "@switchboard-xyz/evm.js";

// Instantiate SwitchboardProgram
const signer = new ethers.Wallet(privateKey);
const switchboardProgram = await SwitchboardProgram.load(
  signer, // Signer instance
  "0x73d6C66874e570f058834cAA666b2c352F1C792D" // Switchboard contract address
);

// Send a transaction to Switchboard
const tx = await switchboard.sendSbTxn("createOracleQueue", [
  name,
  authority,
  unpermissionedFeedsEnabled,
  maxSize,
  reward,
  oracleTimeout,
]);

// Fetch all aggregator data for a given authority
const authority = "0xabc123..."; // the public key of the authority
const aggregatorData = await switchboardProgram.fetchAggregators(authority);

// Connect a new signer to SwitchboardProgram
const newSigner = new ethers.Wallet(newPrivateKey);
const newSwitchboardProgram = switchboardProgram.connect(newSigner);
```

### Transactions

Most SDK methods have an optional TransactionOptions parameter to provide overrides.

```ts
// Most methods have an optional TransactionOptions parameter to provide overrides and an optional new signer
const txOptions: TransactionOptions = {
  // an optional multiplier to modify the gasEstimation
  gasFactor: 1.1,
  // simulate the tx before sending
  simulate: true,
  // the new msg.sender for the tx
  signer: myNewSigner,
  // it also supports any fields from ethers PayableOverrides
  gasLimit: 3000000,
  gasPrice: 10000,
  maxFeePerGas: 10000,
  maxPriorityFeePerGas: 1000,
  nonce: 1337,
};

// Send a transaction to the Switchboard.sol contract
const tx = await switchboardProgram.sendSbTxn(
  "methodName",
  [...args],
  // optional txnOptions
  txOptions
);

// Send a transaction to the SwitchboardAttestationService.sol contract
const tx = await switchboardProgram.sendVsTxn(
  "methodName",
  [...args],
  // optional txnOptions
  txOptions
);
```

### Create a Queue

```ts
import { OracleQueueAccount } from "@switchboard-xyz/evm.js";

const [oracleQueueAccount, tx] = await OracleQueueAccount.create(
  switchboardProgram,
  {
    authority: "0xMyAuthority",
    name: "my queue",
    oracleTimeout: 3600,
    reward: 10000000,
    unpermissionedFeedsEnabled: true,
    maxSize: 100,
  }
);
const oracleQueue = await oracleQueueAccount.loadData();
```

### Add an Oracle

```ts
import { OracleQueueAccount } from "@switchboard-xyz/evm.js";

const oracleQueueAccount = new OracleQueueAccount(
  switchboardProgram,
  queueAddress
);

const oracleAccount = await oracleQueueAccount.createOracle(
  {
    name: "my oracle",
    authority: "0xMyOracleAuthority",
  },
  // enable the heartbeat permissions (requires msg.sender to be queueAuthority)
  true,
  // you can also explicitly provide the queueAuthority signer
  {
    signer: queueAuthoritySigner,
  }
);
const oracle = await oracleAccount.loadData();

await oracleAccount.heartbeat();
```

### Create a Job on IPFS

A set of jobs must be encoded with the [following structure](https://ipfs.io/ipfs/bafybeiaprigfe7hakc4hgqyrjtgsbggrpvzfufpufzvpwtzlznyjb5hjw4/%20USD). This example uses [web3.storage](https://web3.storage).

```ts
const jobs = [
  {
    name: job.name,
    weight: job.weight,
    data: Buffer.from(
      sb.OracleJob.encodeDelimited({
        tasks: [
          {
            httpTask: {
              url: "https://api.coinbase.com/v2/prices/USDC-USD/spot",
            },
          },
          {
            jsonParseTask: {
              path: "$.data.amount",
            },
          },
          {
            boundTask: {
              lowerBoundValue: "0.98",
              upperBoundValue: "1.02",
            },
          },
        ],
      }).finish()
    ).toString("base64"),
  },
];

const client = new Web3Storage({
  token: "<TOKEN_GOES_HERE>",
});

// get jobs from validation
const content = new File([JSON.stringify(jobs)], "", {
  type: "application/json",
});

// get content ID - fetchable immediately via ipfs
const cid = await client.put([content], {
  wrapWithDirectory: false,
});
```

### Create a Data Feed

```ts
import { OracleQueueAccount } from "@switchboard-xyz/evm.js";

const oracleQueueAccount = new OracleQueueAccount(
  switchboardProgram,
  queueAddress
);

const aggregatorAccount = await oracleQueueAccount.createAggregator(
  {
    authority: "0xYourAuthority",
    name: "MyAggregator",
    queueAddress: "0xQueueAddress",
    batchSize: 10,
    minOracleResults: 5,
    minJobResults: 3,
    minUpdateDelaySeconds: 60,
    varianceThreshold: 0.05,
    forceReportPeriod: 600,
    jobsHash: "0xJobHash",
    enableLegacyAdapter: false,
    initialValue: 0,
  },
  // enable the oracle queue usage permissions (requires msg.sender to be queueAuthority)
  true,
  // you can also explicitly provide the queueAuthority signer
  {
    signer: queueAuthoritySigner,
  }
);
const aggregator = await aggregatorAccount.loadData();
```

### Read a Data Feed

After the oracles respond, read the feed result

```ts
import { AggregatorAccount } from "@switchboard-xyz/evm.js";

const aggregatorAccount = new AggregatorAccount(
  switchboardProgram,
  aggregatorAddress
);
const result: number = await aggregatorAccount.latestValue();
console.log(result);
```

### Watch Data Feed

Setup a websocket listener to invoke a callback whenever an aggregator is updated

```ts
import { AggregatorAccount } from "@switchboard-xyz/evm.js";

const watchHandle = AggregatorAccount.watch(
  switchboardProgram,
  "0xAggregatorAccountAddress",
  (event) => {
    console.log(event);
  }
);

// To stop watching
watchHandle.stop();
```
