<div align="center">

![Switchboard Logo](https://github.com/switchboard-xyz/sbv2-core/raw/main/website/static/img/icons/switchboard/avatar.png)

# ISwitchboard.sol

> A Solidity contract to read a Switchboard data feed.

</div>

## Usage

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISwitchboard {

  // read from aggregator
  function latestResult(address aggregatorAddress)
    external
    payable
    returns (
      int256 value,
      uint timestamp
    );

  // read round from an aggregator
  function latestRound(address aggregatorAddress)
    external
    payable
    returns (
      uint80 round,
      int256 value,
      uint256 timestamp,
      uint256 oldestConsideredValueTimestamp
    );
}

contract ReadAFeed {

  // version of this contract
  int256 public latestValue;
  uint256 public latestTimestamp;
  address switchboardAddress;
  address aggregatorAddress;

  // constructor
  // switchboard coreadao address: 0xe9F5Ecb00BC437F061DF59d899F00f260740dC48
  // example feed address:
  constructor(address _switchboard, address _aggregatorAddress) {
    switchboardAddress = _switchboard;
    aggregatorAddress = _aggregatorAddress;
  }

  function latest() external view returns (int256, uint256) {
    return (latestValue, latestTimestamp);
  }

  function getLatestResult()
    external
    returns (
      int256 value,
      uint256 timestamp
    ) {

      ISwitchboard switchboard = ISwitchboard(switchboardAddress);
      (value, timestamp) = switchboard.latestResult(aggregatorAddress);
      latestValue = value;
      latestTimestamp = timestamp;
    }
}
```
