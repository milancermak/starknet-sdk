#!/usr/bin/env bash

# Ensure the script stops on first error
set -e

# Default profile will be $PROFILE_NAME if not set 
PROFILE_NAME='main'
[ -n "${PROFILE}" ] && PROFILE_NAME=${PROFILE}

FAILED_TESTS=false

# Default RPC URL will be goerli if not set
RPC_URL="https://starknet-goerli.infura.io/v3/<infura key>"
[ -n "${RPC}" ] && RPC_URL=${RPC}

# Print Profile name and RPC URL
echo "Profile: $PROFILE_NAME"
echo "RPC URL: $RPC_URL"

# Placeholder variables for AttestationQueueCreateParams
USER_ADDRESS=$(jq -r '.deployment.address' ~/.starkli-wallets/$PROFILE_NAME/account.json)

# Can only declare classhash with casm = false
sed -i '' 's|casm = true|casm = false|' contracts/PriceOracle/Scarb.toml
echo -e "Declaring the contract... (this can take minutes)"
echo "starkli declare target/dev/switchboard_price_oracle_PriceOracle.contract_class.json --rpc $RPC_URL --account ~/.starkli-wallets/$PROFILE_NAME/account.json"
declaration_output=$(starkli declare target/dev/switchboard_price_oracle_PriceOracle.contract_class.json --rpc $RPC_URL --account ~/.starkli-wallets/$PROFILE_NAME/account.json 2>&1)

if echo "$declaration_output" | grep -q "it's already declared"; then
    CLASS_HASH=$(echo "$declaration_output" | grep -o '0x[a-fA-F0-9]\{64\}' | tail -n 1)
else
    echo "New class hash declaration."
    CLASS_HASH=$(echo "$declaration_output" | grep -o '0x[a-fA-F0-9]\{64\}' | tail -n 1)
fi
echo "CLASS_HASH: $CLASS_HASH"
USER_ADDRESS=$(jq -r '.deployment.address' ~/.starkli-wallets/$PROFILE_NAME/account.json)


# Step 3: Deploy the contract 

echo -e "Deploying the contract..."
echo "starkli deploy --rpc $RPC_URL --account ~/.starkli-wallets/$PROFILE_NAME/account.json $CLASS_HASH $USER_ADDRESS"
starkli deploy --rpc $RPC_URL --account ~/.starkli-wallets/$PROFILE_NAME/account.json $CLASS_HASH $USER_ADDRESS
