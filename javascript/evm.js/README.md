<div align="center">

![Switchboard Logo](https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png)

# @switchboard-xyz/evm.js

> A Typescript client to interact with Switchboard on NEAR.

[![NPM Badge](https://img.shields.io/github/package-json/v/switchboard-xyz/sbv2-evm?color=red&filename=javascript%2Fevm.js%2Fpackage.json&label=%40switchboard-xyz%2Fevm.js&logo=npm)](https://www.npmjs.com/package/@switchboard-xyz/evm.js)

</div>

## Install

```bash
npm i --save @switchboard-xyz/evm.js
```

## Usage

**Directory**

- [Create a Data Feed](#create-a-data-feed)
- [Create a Job on IPFS](#create-a-job-on-ipfs)

### Create a Data Feed

```ts
import { AggregatorAccount, OracleJob } from "@switchboard-xyz/evm.js";
import { BigNumber, Wallet } from "ethers";

const authorityAddress = "0x1"; // Add your address here
const queueAddress = "0x83Fb069B10426056Ef8Ca54750cB9bB552a59e7D"; // Permissionless queue address
const switchboardAddress = "0xe9F5Ecb00BC437F061DF59d899F00f260740dC48";

const batchSize = 1; // 1 oracle will resolve a feed
const minUpdateDelaySeconds = 30; // update every 30 seconds
const minOracleResults = 1; // it should only take 1 oracle to resolve the feed
const ipfsJobsAddress = ""; // OracleJobs stored in IPFS
const varianceThreshold = 0; // Always update - but this is stored as a fixed scale factor decimal 18 digits represent the decimal portion of each num
const minJobResults = 1; // It should only take 1 job to resolve a feed
const forceReportPeriod = 0; // Force a result is off

const tx = await switchboard.createAggregator(
  "My BTC Feed",
  authorityAddress,
  oracleRequestBatchSize,
  minUpdateDelaySeconds,
  minOracleResults,
  ipfsJobsAddress,
  queueAddress,

  /// Response Configs (not used on-chain)
  varianceThreshold,
  minJobResults,
  forceReportPeriod,

  false, // Aggregator V3 Inteface is off (makes updates more expensive)
  {
    value: BigNumber.from(
      new Big(params.initialLoadAmount).mul(WEI_PER_ETH.toString()).toString()
    ),
  }
);

// get aggregator address from receipt
const aggregatorAddress = tx.wait().then((logs) => {
  const log = logs.logs[0];
  const sbLog = switchboard.interface.parseLog(log);
  return sbLog.args.accountAddress as string;
});
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
